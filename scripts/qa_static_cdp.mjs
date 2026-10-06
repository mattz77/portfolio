import { mkdir, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";

const CDP = process.env.CDP_ENDPOINT || "http://127.0.0.1:9223";
const BASE = (process.env.QA_BASE_URL || "http://127.0.0.1:4173").replace(/\/+$/, "");
const OUT = process.env.QA_OUT_DIR || "C:/Users/olive/Documents/prj_portfolio/dist-static-seo-qa/qa-evidence";
const routes = ["seo-local", "demo/estetica", "laudos"];
const viewports = [
  { name: "desktop", width: 1280, height: 800, mobile: false },
  { name: "mobile", width: 375, height: 667, mobile: true },
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function openSocket(url) {
  const ws = new WebSocket(url);
  await new Promise((resolve, reject) => {
    ws.addEventListener("open", resolve, { once: true });
    ws.addEventListener("error", reject, { once: true });
  });
  let nextId = 0;
  const pending = new Map();
  ws.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (!message.id || !pending.has(message.id)) return;
    const { resolve, reject } = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) reject(new Error(JSON.stringify(message.error)));
    else resolve(message.result ?? {});
  });
  function call(method, params = {}, sessionId) {
    const id = ++nextId;
    const payload = { id, method, params };
    if (sessionId) payload.sessionId = sessionId;
    ws.send(JSON.stringify(payload));
    return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
  }
  return { ws, call };
}

async function evaluate(call, sessionId, expression) {
  const result = await call("Runtime.evaluate", {
    expression,
    returnByValue: true,
    awaitPromise: true,
  }, sessionId);
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text || "Runtime evaluation failed");
  return result.result?.value;
}

async function runOne(browser, route, viewport) {
  const created = await browser.call("Target.createTarget", { url: "about:blank" });
  const targetId = created.targetId;
  const attached = await browser.call("Target.attachToTarget", { targetId, flatten: true });
  const sessionId = attached.sessionId;
  const { call } = browser;
  try {
    await call("Page.enable", {}, sessionId);
    await call("Runtime.enable", {}, sessionId);
    await call("Network.enable", {}, sessionId);
    await call("Network.setCacheDisabled", { cacheDisabled: true }, sessionId);
    await call("Emulation.setDeviceMetricsOverride", {
      width: viewport.width,
      height: viewport.height,
      deviceScaleFactor: 1,
      mobile: viewport.mobile,
      screenWidth: viewport.width,
      screenHeight: viewport.height,
    }, sessionId);
    const targetUrl = `${BASE}/${route}/`;
    await call("Page.navigate", { url: targetUrl }, sessionId);
    for (let attempt = 0; attempt < 40; attempt += 1) {
      await sleep(100);
      const ready = await evaluate(call, sessionId, `({ state: document.readyState, href: location.href, hasBody: !!document.body, styleSheets: document.styleSheets.length })`);
      if (ready.href === targetUrl && ready.hasBody && ready.styleSheets > 0 && (ready.state === "complete" || ready.state === "interactive")) break;
    }
    await sleep(250);
    const dom = await evaluate(call, sessionId, `(() => {
      const visible = (el) => {
        const r = el.getBoundingClientRect();
        const s = getComputedStyle(el);
        return r.width > 0 && r.height > 0 && s.display !== 'none' && s.visibility !== 'hidden';
      };
      const selectors = 'a[href],button,input,select,textarea,[role="button"]';
      const targets = [...document.querySelectorAll(selectors)].filter(visible).map((el) => {
        const r = el.getBoundingClientRect();
        return { tag: el.tagName.toLowerCase(), text: (el.innerText || el.getAttribute('aria-label') || el.getAttribute('href') || '').trim().slice(0, 80), width: Math.round(r.width), height: Math.round(r.height) };
      });
      return {
        title: document.title,
        h1: document.querySelectorAll('h1').length,
        h2: document.querySelectorAll('h2').length,
        innerWidth: window.innerWidth,
        scrollWidth: document.documentElement.scrollWidth,
        bodyHeight: document.body.scrollHeight,
        overflow: document.documentElement.scrollWidth > window.innerWidth + 1,
        smallTargets: targets.filter((x) => x.width < 44 || x.height < 44),
        targets: targets.length,
        heroAction: (() => {
          const el = document.querySelector('.hero .actions, .hero-buttons');
          if (!el) return { found: false, visible: false };
          const r = el.getBoundingClientRect();
          return { found: true, top: Math.round(r.top), bottom: Math.round(r.bottom), visible: r.top >= 0 && r.bottom <= window.innerHeight };
        })(),
        links: [...document.querySelectorAll('a[href]')].map((a) => a.getAttribute('href')),
      };
    })()`);
    const shot = await call("Page.captureScreenshot", { format: "png", captureBeyondViewport: false }, sessionId);
    const name = `${route.replaceAll("/", "-")}-${viewport.name}.png`;
    const path = `${OUT}/${name}`;
    const bytes = Buffer.from(shot.data, "base64");
    await writeFile(path, bytes);
    return { route, viewport: viewport.name, screenshot: name, sha256: createHash("sha256").update(bytes).digest("hex"), bytes: bytes.length, dom };
  } finally {
    await call("Target.closeTarget", { targetId });
  }
}

await mkdir(OUT, { recursive: true });
const version = await (await fetch(`${CDP}/json/version`)).json();
const browser = await openSocket(version.webSocketDebuggerUrl);
const results = [];
try {
  for (const route of routes) for (const viewport of viewports) results.push(await runOne(browser, route, viewport));
} finally {
  browser.ws.close();
}
const errors = [];
for (const item of results) {
  if (item.dom.h1 !== 1) errors.push(`${item.route}/${item.viewport}:h1=${item.dom.h1}`);
  if (item.dom.overflow) errors.push(`${item.route}/${item.viewport}:horizontal-overflow`);
  if (item.dom.smallTargets.length) errors.push(`${item.route}/${item.viewport}:small-targets=${item.dom.smallTargets.map((x) => `${x.tag}:${x.text}:${x.width}x${x.height}`).join(",")}`);
  if (!item.dom.heroAction.found || !item.dom.heroAction.visible) errors.push(`${item.route}/${item.viewport}:hero-action-not-visible=${JSON.stringify(item.dom.heroAction)}`);
}
const report = { protocol: "cdp-static-seo-qa-v1", status: errors.length ? "QA_FAILED" : "QA_PASSED", results, errors };
await writeFile(`${OUT}/qa-cdp-report.json`, JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify(report, null, 2));
process.exitCode = errors.length ? 1 : 0;

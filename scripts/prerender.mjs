/**
 * Prerender the static portfolio SPA into crawlable HTML.
 *
 * The site under static/ boots React + Babel in the browser, so crawlers (and
 * link unfurlers) see an empty <div id="app">. This script evaluates the same
 * sources in Node, renders each route to markup and writes one HTML file per
 * route into dist-static/, together with per-route <head> metadata, robots.txt
 * and sitemap.xml. The client still boots normally and replaces the markup.
 */
import { readFile, writeFile, mkdir, rm, cp, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";
import { transform } from "esbuild";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "static");
// OUT_DIR lets local runs target a path outside cloud-synced folders (Windows: much faster)
const OUT = process.env.OUT_DIR ? path.resolve(process.env.OUT_DIR) : path.join(ROOT, "dist-static");
const SITE_URL = (process.env.SITE_URL || "https://nicebyte.ia.br").replace(/\/+$/, "");
const AUTHOR = "Mateus Oliveira";
const ORGANIZATION = {
  "@type": "Organization",
  "@id": SITE_URL + "/#organization",
  name: "NiceByte",
  url: SITE_URL + "/",
  logo: SITE_URL + "/assets/nicebyte-official-exact.jpg",
  email: "contato@nicebyte.ia.br",
};

/* ---------- browser shims: enough for render, not for effects ---------- */

function makeStyleShim() {
  return { setProperty() {}, removeProperty() {}, backgroundColor: "", color: "" };
}

function makeElementShim() {
  return {
    style: makeStyleShim(),
    classList: { add() {}, remove() {}, toggle() {}, contains: () => false },
    setAttribute() {},
    removeAttribute() {},
    getAttribute: () => null,
    appendChild() {},
    remove() {},
    addEventListener() {},
    removeEventListener() {},
    getBoundingClientRect: () => ({ top: 0, left: 0, right: 0, bottom: 0, width: 0, height: 0 }),
  };
}

function makeContext(pathname) {
  const store = new Map();
  const documentShim = {
    documentElement: makeElementShim(),
    head: makeElementShim(),
    body: makeElementShim(),
    getElementById: () => null,
    querySelector: () => null,
    querySelectorAll: () => [],
    createElement: () => makeElementShim(),
    addEventListener() {},
    removeEventListener() {},
  };

  const ctx = {
    React,
    ReactDOM: { createRoot: () => ({ render() {}, unmount() {} }) },
    console,
    setTimeout,
    clearTimeout,
    setInterval,
    clearInterval,
    requestAnimationFrame: (fn) => setTimeout(fn, 0),
    cancelAnimationFrame: clearTimeout,
    ResizeObserver: class { observe() {} unobserve() {} disconnect() {} },
    IntersectionObserver: class { observe() {} unobserve() {} disconnect() {} },
    matchMedia: () => ({ matches: false, addEventListener() {}, removeEventListener() {} }),
    navigator: { userAgent: "prerender" },
    innerWidth: 1280,
    innerHeight: 900,
    scrollTo() {},
    addEventListener() {},
    removeEventListener() {},
    postMessage() {},
    document: documentShim,
    localStorage: {
      getItem: (k) => (store.has(k) ? store.get(k) : null),
      setItem: (k, v) => store.set(k, String(v)),
      removeItem: (k) => store.delete(k),
    },
    location: { pathname, hash: "", search: "", href: SITE_URL + pathname },
    history: { pushState() {}, replaceState() {} },
  };
  ctx.window = ctx;
  ctx.self = ctx;
  ctx.globalThis = ctx;
  return vm.createContext(ctx);
}

/* ---------- load the app sources into one context ---------- */

const DS_DIR = (await readdir(path.join(SRC, "_ds"), { withFileTypes: true })).find((d) => d.isDirectory());
if (!DS_DIR) throw new Error("design-system bundle not found under static/_ds/");
const DS_BUNDLE = path.join("_ds", DS_DIR.name, "_ds_bundle.js");

const SOURCES = [
  DS_BUNDLE,
  "portfolio-data.js",
  "portfolio-icons.jsx",
  "tweaks-panel.jsx",
  "portfolio-sections.jsx",
  "portfolio-app.jsx",
];

async function compile(file) {
  const code = await readFile(path.join(SRC, file), "utf8");
  if (!file.endsWith(".jsx")) return code;
  const out = await transform(code, {
    loader: "jsx",
    jsx: "transform",
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",
  });
  return out.code;
}

const compiled = [];
for (const file of SOURCES) compiled.push({ file, code: await compile(file) });

function bootContext(pathname) {
  const ctx = makeContext(pathname);
  for (const { file, code } of compiled) {
    vm.runInContext(code, ctx, { filename: file });
  }
  return ctx;
}

/* ---------- route metadata ---------- */

const probe = bootContext("/");
const P = probe.PORTFOLIO;
if (!P) throw new Error("window.PORTFOLIO not found after evaluating portfolio-data.js");

const HOME_TITLE = `${AUTHOR} — AI Engineer & Backend .NET`;
const HOME_DESC =
  "Construo APIs que não caem, integrações que não falham e automações com IA que economizam horas de trabalho. Portfólio de " +
  AUTHOR +
  ": sistemas de agentes, .NET 8, Azure e n8n.";

function textOf(post) {
  return (post.bodyPt || [])
    .filter((b) => b.t === "p")
    .map((b) => b.v)
    .join(" ");
}

const routes = [
  {
    pathname: "/",
    file: "index.html",
    title: HOME_TITLE,
    description: HOME_DESC,
    type: "website",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: AUTHOR,
      url: SITE_URL + "/",
      jobTitle: "AI Engineer · Backend Developer",
      email: "mailto:" + P.identity.email,
      sameAs: [P.identity.github, P.identity.linkedin].filter(Boolean),
      knowsAbout: (P.stack || []).map((s) => s.namePt || s.nameEn).filter(Boolean),
    },
  },
  {
    pathname: "/blog",
    file: path.join("blog", "index.html"),
    title: `Artigos — ${AUTHOR}`,
    description:
      "Artigos sobre engenharia de agentes, arquitetura backend e automação com IA, escritos por " + AUTHOR + ".",
    type: "website",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: `Artigos — ${AUTHOR}`,
      url: SITE_URL + "/blog",
      author: { "@type": "Person", name: AUTHOR },
    },
  },
  ...(P.posts || []).map((post) => ({
    pathname: "/post/" + post.slug,
    file: path.join("post", post.slug, "index.html"),
    title: `${post.titlePt} — ${AUTHOR}`,
    description: post.summaryPt,
    type: "article",
    date: post.date,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.titlePt,
      description: post.summaryPt,
      datePublished: post.date,
      dateModified: post.date,
      inLanguage: "pt-BR",
      wordCount: textOf(post).split(/\s+/).length,
      author: { "@type": "Person", name: AUTHOR, url: SITE_URL + "/" },
      mainEntityOfPage: SITE_URL + "/post/" + post.slug,
      keywords: post.tagPt,
    },
  })),
];

const STATIC_SITEMAP_PATHS = ["/seo-local/", "/seo-local/solicitar/", "/demo/estetica/", "/laudos/"];

/* ---------- html assembly ---------- */

const escapeAttr = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function jsonLdWithOrganization(jsonLd) {
  const { "@context": context, "@graph": graph, ...entity } = jsonLd;
  return {
    "@context": context,
    "@graph": [ORGANIZATION, ...(graph || [entity])],
  };
}

function headFor(route) {
  const canonical = SITE_URL + route.pathname;
  const tags = [
    `<title>${escapeAttr(route.title)}</title>`,
    `<meta name="description" content="${escapeAttr(route.description)}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<meta name="author" content="${AUTHOR}" />`,
    `<meta property="og:type" content="${route.type}" />`,
    `<meta property="og:title" content="${escapeAttr(route.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(route.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:locale" content="pt_BR" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(route.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(route.description)}" />`,
  ];
  if (route.date) tags.push(`<meta property="article:published_time" content="${route.date}" />`);
  tags.push(
    `<script type="application/ld+json">${JSON.stringify(jsonLdWithOrganization(route.jsonLd)).replace(/</g, "\\u003c")}</script>`
  );
  return tags.map((t) => "  " + t).join("\n");
}

function replaceRequired(html, pattern, replacement, label) {
  const next = html.replace(pattern, replacement);
  if (next === html) throw new Error(`Prerender template mismatch: ${label}`);
  return next;
}

function buildPage(template, route, markup) {
  let html = template;
  // one <base> so relative asset paths still resolve on /post/<slug>/ pages
  html = replaceRequired(html, /<head>/, '<head>\n  <base href="/" />', "<head>");
  // drop the template's own title/description; per-route head replaces them
  html = replaceRequired(html, /\s*<title>[\s\S]*?<\/title>/, "", "template title");
  html = replaceRequired(html, /\s*<meta name="description"[^>]*\/?\s*>/, "", "template description");
  html = replaceRequired(html, /<\/head>/, headFor(route) + "\n</head>", "</head>");
  html = replaceRequired(html, '<div id="app"></div>', `<div id="app">${markup}</div>`, "#app mount");
  return html;
}

/* ---------- write ---------- */

// Wiping the tree is only worth it in CI/Docker: on Windows a locked file in the
// output (indexer, cloud sync, a dev server) makes rmdir hang or throw EPERM.
if (process.env.CLEAN === "1" || process.argv.includes("--clean")) {
  await rm(OUT, { recursive: true, force: true, maxRetries: 10, retryDelay: 150 });
}
await cp(SRC, OUT, { recursive: true, force: true });

const template = await readFile(path.join(SRC, "index.html"), "utf8");

for (const route of routes) {
  const ctx = bootContext(route.pathname);
  if (typeof ctx.App !== "function") throw new Error("App component not found in evaluated bundle");
  const markup = renderToStaticMarkup(React.createElement(ctx.App));
  const dest = path.join(OUT, route.file);
  await mkdir(path.dirname(dest), { recursive: true });
  await writeFile(dest, buildPage(template, route, markup), "utf8");
  console.log(`${route.pathname.padEnd(46)} ${(markup.length / 1024).toFixed(1)} KB  -> ${route.file}`);
}

const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  [...routes, ...STATIC_SITEMAP_PATHS.map((pathname) => ({ pathname }))]
    .map(
      (r) =>
        `  <url><loc>${SITE_URL}${r.pathname}</loc>` +
        (r.date ? `<lastmod>${r.date}</lastmod>` : "") +
        `<changefreq>${r.pathname === "/" ? "weekly" : "monthly"}</changefreq>` +
        `<priority>${r.pathname === "/" ? "1.0" : "0.8"}</priority></url>`
    )
    .join("\n") +
  `\n</urlset>\n`;
await writeFile(path.join(OUT, "sitemap.xml"), sitemap, "utf8");

console.log(`\ndist-static/ ready — ${routes.length + STATIC_SITEMAP_PATHS.length} indexed pages + sitemap.xml`);

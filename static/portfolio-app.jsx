/* Portfolio app — context, hash router, theme + language, tweaks. */
window.AppCtx = React.createContext(null);

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#2563eb",
  "accent2": "#059669",
  "headingScale": 1,
  "density": "regular"
}/*EDITMODE-END*/;

/* Real paths are canonical (/blog, /post/<slug>) so each route is a crawlable
   URL with its own prerendered HTML. Legacy #/ links keep working. */
function routeToPath(r) {
  return r.name === "home" ? "/" : r.name === "blog" ? "/blog" : "/post/" + r.slug;
}

function parseHash() {
  const h = (window.location.hash || "").replace(/^#\/?/, "");
  if (h.startsWith("post/")) return { name: "post", slug: h.slice(5) };
  if (h === "blog") return { name: "blog" };
  if (h) return { name: "home" };
  const p = (window.location.pathname || "/").replace(/\/+$/, "");
  if (p.startsWith("/post/")) return { name: "post", slug: p.slice(6) };
  if (p === "/blog") return { name: "blog" };
  return { name: "home" };
}

function readStore(key) {
  try {
    return window.localStorage ? window.localStorage.getItem(key) : null;
  } catch (e) {
    return null;
  }
}

function writeStore(key, value) {
  try {
    if (window.localStorage) window.localStorage.setItem(key, value);
  } catch (e) {
    /* private mode / prerender */
  }
}

function App() {
  const [t, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
  const [route, setRoute] = React.useState(parseHash());
  const [lang, setLang] = React.useState(() => readStore("mo-lang") || "pt");
  const [dark, setDark] = React.useState(() => {
    const s = readStore("mo-theme");
    if (s) return s === "dark";
    return false;
  });
  const pendingAnchor = React.useRef(null);

  // --- language ---
  const tr = React.useCallback(
    (key) => {
      const dict = window.PORTFOLIO.i18n[lang] || {};
      return dict[key] != null ? dict[key] : key;
    },
    [lang]
  );
  React.useEffect(() => {
    writeStore("mo-lang", lang);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);
  const toggleLang = () => setLang((l) => (l === "pt" ? "en" : "pt"));

  // --- theme ---
  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.body.style.backgroundColor = dark ? "#09090b" : "#fafafa";
    document.body.style.color = dark ? "#f4f4f5" : "#09090b";
    writeStore("mo-theme", dark ? "dark" : "light");
  }, [dark]);
  const toggleTheme = () => setDark((d) => !d);

  // --- tweaks → CSS vars ---
  React.useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty("--primary", t.accent);
    r.setProperty("--primary-hover", shade(t.accent, -12));
    r.setProperty("--ring", t.accent);
    r.setProperty("--brand-accent", t.accent);
    r.setProperty("--brand-accent-hover", shade(t.accent, -12));
    r.setProperty("--brand-accent-2", t.accent2);
    r.setProperty("--primary-foreground", "#fffdf8");
    r.setProperty("--hero-scale", String(t.headingScale));
    document.documentElement.setAttribute("data-density", t.density);
  }, [t.accent, t.accent2, t.headingScale, t.density]);

  // --- router ---
  React.useEffect(() => {
    const onNav = () => setRoute(parseHash());
    window.addEventListener("hashchange", onNav);
    window.addEventListener("popstate", onNav);
    // a legacy #/post/... link lands on "/" — normalize it to the real path
    if (window.location.hash) {
      const r = parseHash();
      window.history.replaceState({ route: r }, "", routeToPath(r));
    }
    return () => {
      window.removeEventListener("hashchange", onNav);
      window.removeEventListener("popstate", onNav);
    };
  }, []);

  const goTo = React.useCallback((next, anchor) => {
    pendingAnchor.current = anchor || null;
    const target = routeToPath(next);
    if (window.location.pathname.replace(/\/+$/, "") !== target.replace(/\/+$/, "")) {
      window.history.pushState({ route: next }, "", target);
    }
    setRoute(next);
    if (!anchor) {
      setTimeout(() => window.scrollTo({ top: 0, behavior: "auto" }), 10);
    }
  }, []);

  // keep <title>/description in sync on client-side navigation (prerender sets the first one)
  React.useEffect(() => {
    const P = window.PORTFOLIO;
    const who = P.identity.name;
    let title = who + " — AI Engineer & Backend .NET";
    let desc = tr("hero.tagline");
    if (route.name === "blog") {
      title = (lang === "pt" ? "Artigos — " : "Articles — ") + who;
    } else if (route.name === "post") {
      const post = (P.posts || []).find((p) => p.slug === route.slug);
      if (post) {
        title = (lang === "pt" ? post.titlePt : post.titleEn) + " — " + who;
        desc = lang === "pt" ? post.summaryPt : post.summaryEn;
      }
    }
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && desc) meta.setAttribute("content", desc);
  }, [route, lang, tr]);

  // scroll to pending anchor after home renders
  React.useEffect(() => {
    if (route.name === "home" && pendingAnchor.current) {
      const a = pendingAnchor.current;
      pendingAnchor.current = null;
      requestAnimationFrame(() => {
        const el = document.getElementById(a);
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 84, behavior: "smooth" });
      });
    }
  }, [route]);

  const ctx = { t: tr, lang, toggleLang, dark, toggleTheme, route, goTo, P: window.PORTFOLIO };

  return (
    <window.AppCtx.Provider value={ctx}>
      <window.Nav />
      {route.name === "home" && <window.Hero key="hero" />}
      <main className="page" key={route.name + (route.slug || "")}>
        {route.name === "home" && (
          <React.Fragment>
            <window.Stack />
            <window.Metrics />
            <window.Work />
            <window.HowIWork />
            <window.Projects />
            <window.UpdatesHome />
            <window.Contact />
          </React.Fragment>
        )}
        {route.name === "blog" && <window.BlogView />}
        {route.name === "post" && <window.PostView slug={route.slug} />}
      </main>
      <window.Footer />

      <window.TweaksPanel title="Tweaks">
        <window.TweakSection label={lang === "pt" ? "Tema" : "Theme"} />
        <window.TweakToggle label={lang === "pt" ? "Modo escuro" : "Dark mode"} value={dark} onChange={() => toggleTheme()} />
        <window.TweakColor
          label={lang === "pt" ? "Cor primária" : "Primary color"}
          value={t.accent}
          options={["#2563eb", "#0ea5e9", "#4f46e5", "#8b5cf6"]}
          onChange={(v) => setTweak("accent", v)}
        />
        <window.TweakColor
          label={lang === "pt" ? "Cor secundária" : "Secondary color"}
          value={t.accent2}
          options={["#059669", "#16a34a", "#dc2626", "#ea580c"]}
          onChange={(v) => setTweak("accent2", v)}
        />
        <window.TweakSection label={lang === "pt" ? "Tipografia & ritmo" : "Type & rhythm"} />
        <window.TweakSlider
          label={lang === "pt" ? "Escala do título" : "Heading scale"}
          value={t.headingScale}
          min={0.8}
          max={1.25}
          step={0.05}
          onChange={(v) => setTweak("headingScale", v)}
        />
        <window.TweakRadio
          label={lang === "pt" ? "Densidade" : "Density"}
          value={t.density}
          options={["compact", "regular", "comfy"]}
          onChange={(v) => setTweak("density", v)}
        />
        <window.TweakSection label={lang === "pt" ? "Idioma" : "Language"} />
        <window.TweakRadio
          label={lang === "pt" ? "Idioma" : "Language"}
          value={lang}
          options={["pt", "en"]}
          onChange={(v) => setLang(v)}
        />
      </window.TweaksPanel>
    </window.AppCtx.Provider>
  );
}

/* darken/lighten a hex color by pct (negative = darker) */
function shade(hex, pct) {
  const n = hex.replace("#", "");
  const num = parseInt(n.length === 3 ? n.split("").map((c) => c + c).join("") : n, 16);
  let r = (num >> 16) & 255, g = (num >> 8) & 255, b = num & 255;
  const f = pct / 100;
  r = Math.round(r + (f < 0 ? r : 255 - r) * f);
  g = Math.round(g + (f < 0 ? g : 255 - g) * f);
  b = Math.round(b + (f < 0 ? b : 255 - b) * f);
  const clamp = (x) => Math.max(0, Math.min(255, x));
  return "#" + [clamp(r), clamp(g), clamp(b)].map((x) => x.toString(16).padStart(2, "0")).join("");
}

if (!window.__moRoot) {
  window.__moRoot = ReactDOM.createRoot(document.getElementById("app"));
}
window.__moRoot.render(React.createElement(App));

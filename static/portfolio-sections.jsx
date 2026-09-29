/* Portfolio sections — render with Commit Briefing DS primitives. → window */
const DS = window.CommitBriefingDesignSystem_27542e;
const { Button, Badge, StatusBadge, Card, CardHeader, CardTitle, CardContent, Separator } = DS;
const I = window.Icons;
const BrandGlyph = window.BrandGlyph;

function useApp() {
  return React.useContext(window.AppCtx);
}

/* ---- Brand mark: personal MO monogram ---- */
function BrandMark({ size = 26, animated = true }) {
  return React.createElement(
    "span",
    {
      className: "mo-mark" + (animated ? " mo-mark--live" : ""),
      style: { width: size, height: size, fontSize: Math.round(size * 0.4) },
      "aria-hidden": true,
    },
    React.createElement("span", { className: "mm-face mm-mo" }, "MO"),
    React.createElement(
      "span",
      { className: "mm-face mm-term" },
      React.createElement("span", { className: "mm-chev" }, ">"),
      React.createElement("span", { className: "mm-cur" }, "_")
    )
  );
}

function SectionHead({ id, eyebrow, title, sub }) {
  return (
    <header className="sec-head" id={id}>
      {eyebrow && <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>}
      <h2 className="sec-title">{title}</h2>
      {sub && <p className="sec-sub">{sub}</p>}
    </header>
  );
}

/* ============================ NAV ============================ */
function Nav() {
  const { t, lang, toggleLang, dark, toggleTheme, route, goTo } = useApp();
  const [open, setOpen] = React.useState(false);
  const onHome = route.name === "home";
  const links = [
    ["stack", "nav.stack"],
    ["work", "nav.work"],
    ["how", "nav.how"],
    ["projects", "nav.projects"],
    ["writing", "nav.writing"],
  ];
  const handleNav = (anchor) => {
    const el = document.getElementById(anchor);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (open) setOpen(false);
    if (!onHome) goTo({ name: "home" });
  };
  return (
    <div className="nav-wrap">
      <nav className="nav">
        <button className="nav-brand" onClick={() => goTo({ name: "home" })} aria-label="Início">
          <BrandMark />
          <span className="nav-brand-name">Mateus<span className="nav-brand-dim"> Oliveira</span></span>
        </button>
        <div className="nav-links">
          {links.map(([a, k]) => (
            <button key={a} className="nav-link" onClick={() => handleNav(a)}>{t(k)}</button>
          ))}
        </div>
        <div className="nav-actions">
          <button className="icon-btn lang-btn" onClick={toggleLang} title={t("lang.toggle")}>
            <I.globe />
            <span>{lang === "pt" ? "EN" : "PT"}</span>
          </button>
          <button className="icon-btn" onClick={toggleTheme} title={t("theme.toggle")} aria-label={t("theme.toggle")}>
            {dark ? <I.sun /> : <I.moon />}
          </button>
          <button className="icon-btn menu-btn" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            <I.layers />
          </button>
        </div>
      </nav>
      {open && (
        <div className="nav-mobile">
          {links.map(([a, k]) => (
            <button key={a} onClick={() => handleNav(a)}>{t(k)}</button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ============================ HERO ============================ */
function Hero() {
  const { t, lang, P } = useApp();
  const id = P.identity;
  const loc = lang === "pt" ? id.locationPt : id.locationEn;
  return (
    <section 
      className="hero hero-dark-force" 
      id="top" 
      style={{
        '--foreground': '#fafafa',
        '--card': 'transparent',
        '--card-foreground': '#fafafa',
        '--muted': '#27272a',
        '--muted-foreground': '#a1a1aa',
        '--border': 'rgba(255,255,255,0.1)'
      }}
    >
      <div className="hero-scrim"></div>

      <div className="hero-content-wrapper">
        <div className="hero-grid">
          <div className="hero-main">
            <h1 className="hero-name">
              <span className="hn-line">Mateus</span>
              <span className="hn-line hn-accent">Oliveira</span>
            </h1>
            <p className="hero-role"><span className="role-mark">{">"}<span className="role-cursor">_</span>{" "}</span>{t("hero.role")}</p>
            <p className="hero-tagline">{t("hero.tagline")}</p>
            <p className="hero-intro">{t("hero.intro")}</p>
            <div className="hero-cta">
              <Button size="lg" onClick={() => {
                const el = document.getElementById("contact");
                el && window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 84, behavior: "smooth" });
              }}>
                {t("hero.ctaContact")} <I.arrowRight />
              </Button>
              <Button size="lg" variant="outline" onClick={() => {
                const el = document.getElementById("work");
                el && window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 84, behavior: "smooth" });
              }}>
                {t("hero.ctaWork")}
              </Button>
            </div>
          </div>

          <aside className="hero-card glass-card">
            <div className="hero-card-top">
              <div className="hero-avatar">
                <img src={id.avatar} alt={id.name} />
              </div>
            <div className="hero-card-id">
              <span className="hc-name">{id.name}</span>
              <span className="hc-loc"><I.mapPin /> {loc}</span>
            </div>
          </div>
          <Separator />
          <div className="hero-facts">
            <a className="fact" href={id.github} target="_blank" rel="noreferrer">
              <I.github /><span className="fact-k">GitHub</span><span className="fact-v">{id.githubHandle}</span><I.arrowUpRight />
            </a>
            <a className="fact" href={id.linkedin} target="_blank" rel="noreferrer">
              <I.linkedin /><span className="fact-k">LinkedIn</span><span className="fact-v">{id.linkedinHandle}</span><I.arrowUpRight />
            </a>
            <a className="fact" href={"mailto:" + id.email}>
              <I.mail /><span className="fact-k">E-mail</span><span className="fact-v">{id.email}</span><I.arrowUpRight />
            </a>
          </div>
        </aside>
        </div>
      </div>
    </section>
  );
}

/* ============================ IMPACT (stat band) ============================ */
function Metrics() {
  const { t, P } = useApp();
  return (
    <section className="block" id="impact">
      <SectionHead eyebrow={t("metrics.eyebrow")} title={t("metrics.title")} sub={t("metrics.subtitle")} />
      <div className="impact-band">
        {P.metrics.map((m) => (
          <div className={"stat" + (m.accent ? " stat--accent" : "")} key={m.key}>
            <span className="stat-value">{m.value}</span>
            <span className="stat-label">{t("m." + m.key)}</span>
            <span className="stat-desc">{t("m." + m.key + ".d")}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================ WORK ============================ */
function Work() {
  const { t, lang, P } = useApp();
  return (
    <section className="block" id="work">
      <SectionHead title={t("work.title")} sub={t("work.subtitle")} />
      <div className="timeline">
        {P.work.map((w, i) => (
          <article className="tl-item" key={i}>
            <div className="tl-rail">
              <span className="tl-dot" />
              <span className="tl-years">
                <span className="tl-y">{w.start}</span>
                <span className="tl-dash">—</span>
                <span className="tl-y">{w.current ? t("work.present") : w.end}</span>
              </span>
            </div>
            <div className="tl-body card-premium">
              <div className="tl-top">
                <div className="tl-logo"><img src={w.logo} alt={w.company} /></div>
                <div className="tl-headings">
                  <h3 className="tl-company">
                    {w.company}
                    {w.clientPt && <span className="tl-client">{lang === "pt" ? w.clientPt : w.clientEn}</span>}
                  </h3>
                  <p className="tl-role">{lang === "pt" ? w.titlePt : w.titleEn}</p>
                </div>
                <span className="tl-loc">{lang === "pt" ? w.locationPt : w.locationEn}</span>
              </div>
              <p className="tl-desc">{lang === "pt" ? w.descPt : w.descEn}</p>
              <div className="chip-row">
                {w.tags.map((tg) => <Badge key={tg} variant="outline" mono>{tg}</Badge>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ============================ HOW I WORK ============================ */
function HowIWork() {
  const { t, lang, P } = useApp();
  const steps = lang === "pt" ? P.howStepsPt : P.howStepsEn;
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { setShown(true); obs.disconnect(); } }),
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <section className="block" id="how">
      <SectionHead title={t("how.title")} sub={t("how.subtitle")} />
      <ol className="how-steps" ref={ref}>
        {steps.map((s, i) => (
          <li
            key={s.n}
            className={"how-step" + (shown ? " in" : "")}
            style={{ animationDelay: (i * 0.09 + 0.05) + "s" }}
          >
            <span className="how-num" aria-hidden="true">{s.n}</span>
            <div className="how-copy">
              <h3 className="how-step-title">{s.title}</h3>
              <p className="how-step-body">{s.body}</p>
            </div>
            {s.tools.length > 0 && (
              <div className="how-tools">
                {s.tools.map((tool) => <Badge key={tool} variant="outline" mono>{tool}</Badge>)}
              </div>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ============================ PROJECTS ============================ */
function ProjectCard({ p, idx }) {
  const { t, lang } = useApp();
  const tech = p.tech;
  const highlights = lang === "pt" ? p.highlightsPt : p.highlightsEn;
  return (
    <article className="proj card-premium" style={{ "--proj-accent": p.accent }}>
      <div className="proj-preview">
        <span className="proj-idx">{String(idx + 1).padStart(2, "0")}</span>
        <div className="proj-preview-mark">
          {p.logo ? <img src={p.logo} alt={p.name} /> : (p.mark === "luma" ? <I.luma /> : p.mark === "commit" ? <I.commit /> : <BrandMark size={40} animated={false} />)}
        </div>
        <div className="proj-preview-stack">
          {tech.slice(0, 4).map((tg) => <span key={tg} className="pp-chip">{tg}</span>)}
        </div>
        <span className="proj-status">
          <StatusBadge status={p.status === "live" ? "good" : "info"}>
            {p.status === "live" ? t("projects.live") : t("projects.building")}
          </StatusBadge>
        </span>
      </div>
      <div className="proj-info">
        <div className="proj-meta">
          <span className="proj-kind">{lang === "pt" ? p.kindPt : p.kindEn}</span>
          <span className="proj-dates">{lang === "pt" ? p.datesPt : p.datesEn}</span>
        </div>
        <h3 className="proj-name">{p.name}</h3>
        <p className="proj-tagline">{lang === "pt" ? p.taglinePt : p.taglineEn}</p>
        <p className="proj-desc">{lang === "pt" ? p.descPt : p.descEn}</p>
        <ul className="proj-highlights">
          {highlights.map((h, i) => <li key={i}><I.check />{h}</li>)}
        </ul>
        <div className="chip-row proj-tech">
          {tech.map((tg) => <Badge key={tg} variant="secondary" mono>{tg}</Badge>)}
        </div>
        {p.closed ? (
          <span className="proj-link proj-link--closed" title={t("projects.closedSource")}>
            <I.lock /> {t("projects.closedSource")}
          </span>
        ) : p.href ? (
          <a className="proj-link" href={p.href} target="_blank" rel="noreferrer">
            <I.github /> {t("projects.viewSource")} <I.arrowUpRight />
          </a>
        ) : null}
      </div>
    </article>
  );
}

function Projects() {
  const { t, P } = useApp();
  return (
    <section className="block" id="projects">
      <SectionHead title={t("projects.title")} sub={t("projects.subtitle")} />
      <div className="proj-list">
        {P.projects.map((p, i) => <ProjectCard key={p.slug} p={p} idx={i} />)}
      </div>
    </section>
  );
}

/* ============================ STACK ============================ */
const STACK_GLYPH = {
  csharp: { img: "assets/icons/csharp.svg" },
  dotnet: { img: "assets/icons/dotnet.svg" },
  n8n: { img: "assets/icons/n8n.svg" },
  azure: { img: "assets/icons/azuredevops.svg" },
  webhook: { svg: "link" },
  react: { img: "assets/icons/react.svg" },
  typescript: { img: "assets/icons/typescript.svg" },
  supabase: { img: "assets/icons/supabase.svg" },
  mysql: { img: "assets/icons/mysql.svg" },
  docker: { img: "assets/icons/docker.svg" },
  github: { img: "assets/icons/github.svg" },
  excel: { img: "assets/icons/microsoft.svg" },
  claude: { img: "assets/icons/claude.svg" },
  antigravity: { img: "assets/icons/antigravity.svg" },
  cursor: { img: "assets/icons/cursor.svg" },
};

function TechGlyph({ name }) {
  const g = STACK_GLYPH[name] || {};
  if (g.text) return <span className="tech-glyph tech-glyph--text">{g.text}</span>;
  if (g.img) return <span className="tech-glyph"><img src={g.img} alt="" /></span>;
  const Ico = I[g.svg];
  return <span className="tech-glyph">{Ico ? <Ico /> : null}</span>;
}

function Stack() {
  const { t, lang, P } = useApp();
  return (
    <section className="block" id="stack">
      <SectionHead title={t("stack.title")} sub={t("stack.subtitle")} />
      <div className="tech-grid">
        {P.stack.map((s, i) => (
          <span className={"tech-chip" + (s.icons ? " tech-chip--multi" : "")} key={i}>
            {s.icons ? (
              <span className="tech-glyph-cluster">
                {s.icons.map((n) => <TechGlyph key={n} name={n} />)}
              </span>
            ) : (
              <TechGlyph name={s.icon} />
            )}
            <span className="tech-label">{lang === "pt" ? s.namePt : s.nameEn}</span>
          </span>
        ))}
      </div>
    </section>
  );
}

/* ============================ UPDATES (home) ============================ */
function PostRow({ post, idx }) {
  const { lang, goTo } = useApp();
  return (
    <button className="post-row" onClick={() => goTo({ name: "post", slug: post.slug })}>
      <span className="post-idx">{String(idx).padStart(2, "0")}</span>
      <div className="post-row-main">
        <div className="post-row-meta">
          <Badge variant="outline" mono>{lang === "pt" ? post.tagPt : post.tagEn}</Badge>
          <span className="post-date">{formatDate(post.date, lang)}</span>
        </div>
        <h3 className="post-row-title">{lang === "pt" ? post.titlePt : post.titleEn}<I.arrowRight /></h3>
        <p className="post-row-sum">{lang === "pt" ? post.summaryPt : post.summaryEn}</p>
      </div>
    </button>
  );
}

function UpdatesHome() {
  const { t, P, goTo } = useApp();
  const latest = P.posts.slice(0, 3);
  return (
    <section className="block" id="writing">
      <SectionHead title={t("writing.title")} sub={t("writing.subtitle")} />
      <div className="post-list">
        {latest.map((p, i) => <PostRow key={p.slug} post={p} idx={i + 1} />)}
      </div>
      <button className="text-link" onClick={() => goTo({ name: "blog" })}>
        {t("writing.all")} <I.arrowRight />
      </button>
    </section>
  );
}

/* ============================ CONTACT ============================ */
function Contact() {
  const { t, P } = useApp();
  const id = P.identity;
  return (
    <section className="block contact" id="contact">
      <div className="contact-card terminal-warm">
        <div className="contact-inner">
          <h2 className="contact-title">{t("contact.title")}</h2>
          <p className="contact-sub">{t("contact.subtitle")}</p>
          <div className="contact-actions">
            <a className="contact-btn primary" href={"mailto:" + id.email}><I.mail /> {t("contact.email")}</a>
            <a className="contact-btn" href={id.linkedin} target="_blank" rel="noreferrer"><I.linkedin /> {t("contact.linkedin")}</a>
            <a className="contact-btn" href={id.github} target="_blank" rel="noreferrer"><I.github /> {t("contact.github")}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ FOOTER ============================ */
function Footer() {
  const { t, P } = useApp();
  return (
    <footer className="footer">
      <div className="footer-l">
        <BrandMark size={18} animated={false} />
        <span>{P.identity.name}</span>
      </div>
      <span className="footer-mid">{t("footer.built")}</span>
      <span className="footer-r">© {new Date().getFullYear()} · {t("footer.rights")}</span>
    </footer>
  );
}

/* ============================ BLOG ============================ */
function BlogView() {
  const { t, lang, P, goTo } = useApp();
  return (
    <section className="block blog-page">
      <button className="text-link back" onClick={() => goTo({ name: "home" })}><I.arrowLeft /> {t("nav.backHome")}</button>
      <header className="sec-head">
        <h2 className="sec-title">{t("writing.title")} <span className="blog-count">{P.posts.length} {t("writing.readingList")}</span></h2>
        <p className="sec-sub">{t("writing.subtitle")}</p>
      </header>
      <div className="post-list">
        {P.posts.map((p, i) => <PostRow key={p.slug} post={p} idx={i + 1} />)}
      </div>
    </section>
  );
}

function PostView({ slug }) {
  const { t, lang, P, goTo } = useApp();
  const [lightbox, setLightbox] = React.useState(null);

  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") setLightbox(null);
    }
    if (lightbox) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const idx = P.posts.findIndex((p) => p.slug === slug);
  const post = P.posts[idx];
  if (!post) {
    return (
      <section className="block">
        <button className="text-link back" onClick={() => goTo({ name: "blog" })}><I.arrowLeft /> {t("writing.back")}</button>
        <p className="sec-sub">{t("writing.empty")}</p>
      </section>
    );
  }
  const body = lang === "pt" ? post.bodyPt : post.bodyEn;
  const prev = P.posts[idx + 1];
  const next = P.posts[idx - 1];
  return (
    <article className="block post-page">
      <button className="text-link back" onClick={() => goTo({ name: "blog" })}><I.arrowLeft /> {t("writing.back")}</button>
      <div className="post-head">
        <div className="post-head-meta">
          <Badge variant="accent" mono>{lang === "pt" ? post.tagPt : post.tagEn}</Badge>
          <span className="post-date">{formatDate(post.date, lang)}</span>
          <span className="post-dot">·</span>
          <span className="post-date">{post.read} {t("writing.minread")}</span>
        </div>
        <h1 className="post-title">{lang === "pt" ? post.titlePt : post.titleEn}</h1>
        <p className="post-lede">{lang === "pt" ? post.summaryPt : post.summaryEn}</p>
      </div>
      <Separator />
      <div className="prose">
        {body.map((b, i) => {
          if (b.t === "h2") return <h2 key={i}>{b.v}</h2>;
          if (b.t === "quote") return <blockquote key={i}>{b.v}</blockquote>;
          if (b.t === "img") return (
            <figure key={i} className="post-figure">
              <img
                src={b.v}
                alt={b.alt || ""}
                loading="lazy"
                title={lang === "pt" ? "Clique para ampliar" : "Click to expand"}
                onClick={() => setLightbox({ src: b.v, alt: b.alt || "", cap: b.cap })}
              />
              {b.cap ? <figcaption>{b.cap}</figcaption> : null}
            </figure>
          );
          return <p key={i}>{b.v}</p>;
        })}
      </div>

      {lightbox ? (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              aria-label="Fechar"
              onClick={() => setLightbox(null)}
            >
              <I.x />
            </button>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="lightbox-img"
              onClick={() => setLightbox(null)}
            />
            {lightbox.cap ? <div className="lightbox-caption">{lightbox.cap}</div> : null}
          </div>
        </div>
      ) : null}

      <div className="post-nav">
        {prev ? (
          <button className="post-nav-btn" onClick={() => goTo({ name: "post", slug: prev.slug })}>
            <span className="pn-dir"><I.arrowLeft /> {t("writing.prev")}</span>
            <span className="pn-title">{lang === "pt" ? prev.titlePt : prev.titleEn}</span>
          </button>
        ) : <span />}
        {next ? (
          <button className="post-nav-btn right" onClick={() => goTo({ name: "post", slug: next.slug })}>
            <span className="pn-dir">{t("writing.next")} <I.arrowRight /></span>
            <span className="pn-title">{lang === "pt" ? next.titlePt : next.titleEn}</span>
          </button>
        ) : <span />}
      </div>
    </article>
  );
}

function formatDate(iso, lang) {
  const d = new Date(iso + "T00:00:00");
  const months = {
    pt: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
    en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  };
  const m = months[lang][d.getMonth()];
  return lang === "pt" ? `${d.getDate()} ${m} ${d.getFullYear()}` : `${m} ${d.getDate()}, ${d.getFullYear()}`;
}

Object.assign(window, {
  Nav, Hero, Metrics, Work, HowIWork, Projects, Stack, UpdatesHome, Contact, Footer, BlogView, PostView, BrandMark,
});

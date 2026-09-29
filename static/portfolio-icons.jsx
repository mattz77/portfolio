/* Lucide-style inline icons → window.Icons. Stroke uses currentColor. */
(function () {
  const React = window.React;
  const S = (props, children) =>
    React.createElement(
      "svg",
      Object.assign(
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 1.75,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          width: "1em",
          height: "1em",
        },
        props
      ),
      ...(Array.isArray(children) ? children.map((c, i) => (c && c.key == null ? React.cloneElement(c, { key: i }) : c)) : [children])
    );
  const p = (d) => React.createElement("path", { d });
  const make = (nodes) => (props = {}) => S(props, nodes());

  window.Icons = {
    arrowRight: make(() => [p("M5 12h14"), p("m12 5 7 7-7 7")]),
    arrowUpRight: make(() => [p("M7 7h10v10"), p("M7 17 17 7")]),
    chevronRight: make(() => [p("m9 18 6-6-6-6")]),
    chevronDown: make(() => [p("m6 9 6 6 6-6")]),
    check: make(() => [p("M20 6 9 17l-5-5")]),
    zap: make(() => [React.createElement("path", { key: "z", d: "M13 2 3 14h9l-1 8 10-12h-9l1-8z" })]),
    clock: make(() => [React.createElement("circle", { key: "c", cx: 12, cy: 12, r: 10 }), p("M12 6v6l4 2")]),
    rocket: make(() => [
      p("M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"),
      p("M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"),
      p("M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"),
      p("M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"),
    ]),
    code: make(() => [p("m16 18 6-6-6-6"), p("m8 6-6 6 6 6")]),
    terminal: make(() => [p("m4 17 6-6-6-6"), p("M12 19h8")]),
    sparkles: make(() => [
      p("M9.94 4.5 11 7.5l3 1.06-3 1.06L9.94 12.6 8.88 9.62 5.88 8.56l3-1.06z"),
      p("M18 5v4"),
      p("M16 7h4"),
      p("M17 16v3"),
      p("M15.5 17.5h3"),
    ]),
    mapPin: make(() => [
      p("M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"),
      React.createElement("circle", { key: "c", cx: 12, cy: 10, r: 3 }),
    ]),
    mail: make(() => [
      React.createElement("rect", { key: "r", x: 2, y: 4, width: 20, height: 16, rx: 2 }),
      p("m22 7-10 6L2 7"),
    ]),
    github: make(() => [
      p("M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),
    ]),
    linkedin: make(() => [
      p("M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"),
      React.createElement("rect", { key: "r", x: 2, y: 9, width: 4, height: 12 }),
      React.createElement("circle", { key: "c", cx: 4, cy: 4, r: 2 }),
    ]),
    whatsapp: make(() => [
      p("M3 21l1.65-4.8a9 9 0 1 1 3.4 2.9L3 21"),
      p("M9 10c.5 2 2.5 4 4.5 4.5l1.3-1.2 1.7.8c.2 1-.3 2-1.5 2.2-2 .3-5.5-1.3-6.8-4.3-.6-1.4.2-2.6 1.1-3l.8 1.7L9 10z"),
    ]),
    sun: make(() => [
      React.createElement("circle", { key: "c", cx: 12, cy: 12, r: 4 }),
      p("M12 2v2"), p("M12 20v2"), p("m4.93 4.93 1.41 1.41"), p("m17.66 17.66 1.41 1.41"),
      p("M2 12h2"), p("M20 12h2"), p("m6.34 17.66-1.41 1.41"), p("m19.07 4.93-1.41 1.41"),
    ]),
    moon: make(() => [p("M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z")]),
    globe: make(() => [
      React.createElement("circle", { key: "c", cx: 12, cy: 12, r: 10 }),
      p("M2 12h20"),
      p("M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"),
    ]),
    layers: make(() => [
      p("m12 2 9 5-9 5-9-5 9-5z"), p("m3 12 9 5 9-5"), p("m3 17 9 5 9-5"),
    ]),
    briefcase: make(() => [
      React.createElement("rect", { key: "r", x: 2, y: 7, width: 20, height: 14, rx: 2 }),
      p("M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"),
    ]),
    workflow: make(() => [
      React.createElement("rect", { key: "r1", x: 3, y: 3, width: 7, height: 7, rx: 1 }),
      React.createElement("rect", { key: "r2", x: 14, y: 14, width: 7, height: 7, rx: 1 }),
      p("M10 6.5h4a2 2 0 0 1 2 2V14"),
    ]),
    arrowLeft: make(() => [p("M19 12H5"), p("m12 19-7-7 7-7")]),
    link: make(() => [p("M9 17H7A5 5 0 0 1 7 7h2"), p("M15 7h2a5 5 0 0 1 0 10h-2"), p("M8 12h8")]),
    lock: make(() => [
      React.createElement("rect", { key: "r", x: 4.5, y: 11, width: 15, height: 9.5, rx: 2 }),
      p("M8 11V7.5a4 4 0 0 1 8 0V11"),
    ]),
    commit: make(() => [
      React.createElement("circle", { key: "c", cx: 12, cy: 12, r: 3.4 }),
      p("M2 12h5.6"), p("M16.4 12H22"),
    ]),
    x: make(() => [p("M18 6 6 18"), p("m6 6 12 12")]),
  };

  /* ---- brand / tech glyphs (filled + custom) ---- */
  const fbase = (props) =>
    Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", width: "1em", height: "1em" }, props);
  const sbase = (props, sw) =>
    Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: sw || 1.7, strokeLinecap: "round", strokeLinejoin: "round", width: "1em", height: "1em" }, props);
  const ln = (d, k) => React.createElement("path", { key: k, d, fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" });

  // developer prompt mark  ›_
  window.Icons.caret = (props = {}) =>
    React.createElement("svg", sbase(props, 2.2),
      React.createElement("path", { key: 0, d: "M5 7.5 9.5 12 5 16.5" }),
      React.createElement("path", { key: 1, d: "M12.5 16.6H19" })
    );

  // Luma — light / moon + spark
  window.Icons.luma = (props = {}) =>
    React.createElement("svg", fbase(props),
      React.createElement("path", { key: 0, d: "M20.5 14.8A8 8 0 1 1 10.6 4.2a6 6 0 0 0 9.9 10.6z" }),
      React.createElement("path", { key: 1, d: "M18.4 3.1l.62 1.66 1.66.62-1.66.62-.62 1.66-.62-1.66-1.66-.62 1.66-.62z" })
    );

  // Microsoft — four squares
  window.Icons.msoft = (props = {}) =>
    React.createElement("svg", fbase(props),
      React.createElement("rect", { key: 0, x: 3, y: 3, width: 8, height: 8 }),
      React.createElement("rect", { key: 1, x: 13, y: 3, width: 8, height: 8 }),
      React.createElement("rect", { key: 2, x: 3, y: 13, width: 8, height: 8 }),
      React.createElement("rect", { key: 3, x: 13, y: 13, width: 8, height: 8 })
    );

  // n8n — connected nodes
  window.Icons.n8n = (props = {}) =>
    React.createElement("svg", fbase(props),
      React.createElement("circle", { key: 0, cx: 5, cy: 12, r: 2.4 }),
      React.createElement("circle", { key: 1, cx: 17, cy: 6, r: 2.4 }),
      React.createElement("circle", { key: 2, cx: 17, cy: 18, r: 2.4 }),
      ln("M7.1 11 14.9 7.1", 3),
      ln("M7.1 13 14.9 16.9", 4)
    );

  // Docker — container stack + wake
  window.Icons.docker = (props = {}) =>
    React.createElement("svg", fbase(props),
      React.createElement("rect", { key: 0, x: 3.6, y: 10.6, width: 3.4, height: 3.4, rx: 0.4 }),
      React.createElement("rect", { key: 1, x: 8, y: 10.6, width: 3.4, height: 3.4, rx: 0.4 }),
      React.createElement("rect", { key: 2, x: 12.4, y: 10.6, width: 3.4, height: 3.4, rx: 0.4 }),
      React.createElement("rect", { key: 3, x: 8, y: 6.4, width: 3.4, height: 3.4, rx: 0.4 }),
      ln("M2 16.4c2.2 1.8 6.4 1.8 9.3.6 1.8-.8 3-2 3.4-3.2 1 .5 3.2.6 4.3-.4", 4)
    );

  // MySQL — database cylinder
  window.Icons.database = (props = {}) =>
    React.createElement("svg", sbase(props, 1.7),
      React.createElement("ellipse", { key: 0, cx: 12, cy: 5.2, rx: 7, ry: 2.6 }),
      React.createElement("path", { key: 1, d: "M5 5.2v13.6c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V5.2" }),
      React.createElement("path", { key: 2, d: "M5 12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6" })
    );
})();

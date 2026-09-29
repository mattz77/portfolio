/* @ds-bundle: {"format":3,"namespace":"CommitBriefingDesignSystem_27542e","components":[{"name":"Badge","sourcePath":"components/badges/Badge.jsx"},{"name":"StatusBadge","sourcePath":"components/badges/StatusBadge.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"KpiCard","sourcePath":"components/dashboard/KpiCard.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"CardHeader","sourcePath":"components/data-display/Card.jsx"},{"name":"CardTitle","sourcePath":"components/data-display/Card.jsx"},{"name":"CardDescription","sourcePath":"components/data-display/Card.jsx"},{"name":"CardContent","sourcePath":"components/data-display/Card.jsx"},{"name":"CardFooter","sourcePath":"components/data-display/Card.jsx"},{"name":"Separator","sourcePath":"components/data-display/Separator.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TabsList","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TabsTrigger","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TabsContent","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/badges/Badge.jsx":"8712516f310c","components/badges/StatusBadge.jsx":"924df3ab4dee","components/buttons/Button.jsx":"7d8c725e4725","components/dashboard/KpiCard.jsx":"1039e5b462a7","components/data-display/Avatar.jsx":"73da0482de6c","components/data-display/Card.jsx":"4b591955c61d","components/data-display/Separator.jsx":"77ea2ac1e6eb","components/forms/Input.jsx":"5aa0a86a9210","components/forms/Switch.jsx":"c52ee65ef234","components/navigation/Tabs.jsx":"4b8f903cee91","export/src/app.jsx":"5e63e1f689f0","export/src/brands.js":"aaf6196d0729","export/src/data.js":"72936f8d64cb","export/src/features.jsx":"3725230e5312","export/src/icons.js":"a3132c4f295d","export/src/screens.jsx":"6e8f6a8e8a7a","export/src/settings.jsx":"3aae1bf906ab","export/src/ui.jsx":"e423f93de4c3","ui_kits/commit-briefing/app.jsx":"5e63e1f689f0","ui_kits/commit-briefing/data.js":"72936f8d64cb","ui_kits/commit-briefing/features.jsx":"9f9e01b1a003","ui_kits/commit-briefing/icons.js":"a3132c4f295d","ui_kits/commit-briefing/screens.jsx":"6e8f6a8e8a7a","ui_kits/commit-briefing/settings.jsx":"3aae1bf906ab","ui_kits/commit-briefing/ui.jsx":"293771d21338"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CommitBriefingDesignSystem_27542e = window.CommitBriefingDesignSystem_27542e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/badges/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CB_BADGE_CSS = `
.cb-badge {
  display: inline-flex; align-items: center; gap: 0.375rem;
  padding: 0.125rem 0.5rem;
  font-family: var(--font-sans); font-size: var(--text-xs); font-weight: var(--weight-medium); line-height: 1.25;
  border: 1px solid transparent; border-radius: var(--radius-md); white-space: nowrap;
}
.cb-badge--mono { font-family: var(--font-mono); font-size: var(--text-2xs); font-feature-settings: 'tnum','zero'; }
.cb-badge svg, .cb-badge img { width: 0.875rem; height: 0.875rem; }
.cb-badge--default { background: var(--primary); color: var(--primary-foreground); }
.cb-badge--secondary { background: var(--secondary); color: var(--secondary-foreground); }
.cb-badge--outline { background: transparent; color: var(--foreground); border-color: var(--border); }
.cb-badge--accent { background: var(--brand-accent); color: #fff; }
.cb-badge--destructive { background: var(--destructive); color: var(--destructive-foreground); }
`;
let _i = false;
function ensureCss() {
  if (_i || typeof document === 'undefined') return;
  if (!document.getElementById('cb-badge-css')) {
    const el = document.createElement('style');
    el.id = 'cb-badge-css';
    el.textContent = CB_BADGE_CSS;
    document.head.appendChild(el);
  }
  _i = true;
}

/**
 * Badge — a compact label/pill. Default (caramel), secondary, outline,
 * accent (copper) and destructive variants. Set `mono` for code/email/version chips.
 */
function Badge({
  variant = 'secondary',
  mono = false,
  className = '',
  children,
  ...props
}) {
  ensureCss();
  const cls = ['cb-badge', `cb-badge--${variant}`, mono ? 'cb-badge--mono' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, props), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/Badge.jsx", error: String((e && e.message) || e) }); }

// components/badges/StatusBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CB_STATUS_CSS = `
.cb-status {
  display: inline-flex; align-items: center; gap: 0.375rem;
  padding: 0.125rem 0.5rem;
  font-family: var(--font-sans); font-size: var(--text-xs); font-weight: var(--weight-medium); line-height: 1.25;
  border-radius: var(--radius-full);
}
.cb-status__dot { width: 0.5rem; height: 0.5rem; border-radius: 999px; background: currentColor; }
.cb-status--good     { color: #059669; background: rgb(16 185 129 / 0.12); }
.cb-status--warning  { color: #b45309; background: rgb(245 158 11 / 0.14); }
.cb-status--critical { color: #dc2626; background: rgb(239 68 68 / 0.12); }
.cb-status--toil     { color: #ea580c; background: rgb(249 115 22 / 0.12); }
.cb-status--info     { color: #2563eb; background: rgb(59 130 246 / 0.12); }
.cb-status--neutral  { color: var(--muted-foreground); background: var(--muted); }
`;
let _i = false;
function ensureCss() {
  if (_i || typeof document === 'undefined') return;
  if (!document.getElementById('cb-status-css')) {
    const el = document.createElement('style');
    el.id = 'cb-status-css';
    el.textContent = CB_STATUS_CSS;
    document.head.appendChild(el);
  }
  _i = true;
}

/**
 * StatusBadge — a rounded signal pill with a leading dot, mapping the
 * product's health states (good / warning / critical / toil / info / neutral).
 */
function StatusBadge({
  status = 'neutral',
  dot = true,
  className = '',
  children,
  ...props
}) {
  ensureCss();
  const cls = ['cb-status', `cb-status--${status}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, props), dot && /*#__PURE__*/React.createElement("span", {
    className: "cb-status__dot"
  }), children);
}
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CB_BTN_CSS = `
.cb-btn {
  --_h: 2.25rem;
  display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;
  height: var(--_h); padding: 0 0.875rem;
  font-family: var(--font-sans);
  font-size: var(--text-sm); font-weight: var(--weight-medium); line-height: 1;
  white-space: nowrap; cursor: pointer; user-select: none;
  border: 1px solid transparent; border-radius: var(--radius-lg);
  transition: background-color var(--duration-base) ease, color var(--duration-base) ease,
              border-color var(--duration-base) ease, box-shadow var(--duration-base) ease, transform var(--duration-fast) ease;
}
.cb-btn:focus-visible { outline: 2px solid var(--ring); outline-offset: 2px; }
.cb-btn:active { transform: translateY(0.5px); }
.cb-btn:disabled { opacity: 0.5; pointer-events: none; }
.cb-btn svg, .cb-btn img { width: 1rem; height: 1rem; flex-shrink: 0; }

/* sizes */
.cb-btn--sm { --_h: 2rem; padding: 0 0.625rem; font-size: var(--text-xs); }
.cb-btn--lg { --_h: 2.5rem; padding: 0 1.25rem; font-size: var(--text-base); }
.cb-btn--icon { --_h: 2.25rem; width: 2.25rem; padding: 0; }

/* variants */
.cb-btn--default { background: var(--primary); color: var(--primary-foreground); }
.cb-btn--default:hover { background: var(--primary-hover); }
.cb-btn--secondary { background: var(--secondary); color: var(--secondary-foreground); }
.cb-btn--secondary:hover { background: var(--accent); }
.cb-btn--outline { background: var(--card); color: var(--foreground); border-color: var(--border); box-shadow: var(--shadow-2xs); }
.cb-btn--outline:hover { background: var(--muted); }
.cb-btn--ghost { background: transparent; color: var(--foreground); }
.cb-btn--ghost:hover { background: var(--muted); }
.cb-btn--destructive { background: var(--destructive); color: var(--destructive-foreground); }
.cb-btn--destructive:hover { filter: brightness(0.93); }
.cb-btn--link { background: transparent; color: var(--primary); height: auto; padding: 0; border-radius: 0; }
.cb-btn--link:hover { text-decoration: underline; }
`;
let _cbBtnInjected = false;
function ensureCss() {
  if (_cbBtnInjected || typeof document === 'undefined') return;
  if (!document.getElementById('cb-btn-css')) {
    const el = document.createElement('style');
    el.id = 'cb-btn-css';
    el.textContent = CB_BTN_CSS;
    document.head.appendChild(el);
  }
  _cbBtnInjected = true;
}

/**
 * Button — the primary action control. Caramel fill by default; outline,
 * ghost, secondary, destructive and link variants. Sizes sm / default / lg / icon.
 */
function Button({
  variant = 'default',
  size = 'default',
  className = '',
  children,
  ...props
}) {
  ensureCss();
  const cls = ['cb-btn', `cb-btn--${variant}`, size !== 'default' ? `cb-btn--${size}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls
  }, props), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/dashboard/KpiCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CB_KPI_CSS = `
.cb-kpi {
  position: relative; display: flex; flex-direction: column; gap: 0.625rem;
  padding: var(--space-4) var(--space-5);
  background: var(--card); border-radius: var(--radius-xl); box-shadow: var(--shadow-card);
  transition: box-shadow var(--duration-base) ease, transform var(--duration-base) ease;
}
.cb-kpi:hover { box-shadow: var(--shadow-card-hover); transform: translateY(-1px); }
.cb-kpi__top { display: flex; align-items: flex-start; justify-content: space-between; gap: 0.5rem; }
.cb-kpi__title { font-family: var(--font-sans); font-size: var(--text-xs); font-weight: var(--weight-medium); color: var(--muted-foreground); line-height: 1.3; }
.cb-kpi__icon {
  display: inline-flex; align-items: center; justify-content: center;
  width: 1.75rem; height: 1.75rem; flex-shrink: 0;
  border-radius: var(--radius-md); background: var(--muted); color: var(--muted-foreground);
}
.cb-kpi__icon svg, .cb-kpi__icon img { width: 1rem; height: 1rem; }
.cb-kpi__icon--good     { background: rgb(16 185 129 / 0.12); color: #059669; }
.cb-kpi__icon--warning  { background: rgb(245 158 11 / 0.14); color: #b45309; }
.cb-kpi__icon--critical { background: rgb(239 68 68 / 0.12); color: #dc2626; }
.cb-kpi__value {
  font-family: var(--font-mono); font-feature-settings: 'tnum','zero';
  font-size: var(--text-3xl); font-weight: var(--weight-bold); line-height: 1; letter-spacing: -0.01em;
  color: var(--foreground);
}
.cb-kpi__value--good { color: #059669; }
.cb-kpi__value--warning { color: #b45309; }
.cb-kpi__value--critical { color: #dc2626; }
.cb-kpi__foot { display: flex; align-items: center; gap: 0.5rem; }
.cb-kpi__desc { font-family: var(--font-sans); font-size: var(--text-2xs); color: var(--muted-foreground); line-height: 1.3; }
.cb-kpi__trend { display: inline-flex; align-items: center; gap: 0.25rem; font-family: var(--font-sans); font-size: var(--text-2xs); font-weight: var(--weight-medium); }
.cb-kpi__trend--up { color: #059669; }
.cb-kpi__trend--down { color: #dc2626; }
.cb-kpi__trend--neutral { color: var(--muted-foreground); }
.cb-kpi__pulse { position: absolute; top: 0.75rem; right: 0.75rem; width: 0.5rem; height: 0.5rem; border-radius: 999px; background: #ef4444; }
.cb-kpi__pulse::after { content: ''; position: absolute; inset: 0; border-radius: 999px; background: #ef4444; animation: cb-kpi-ping 1.4s var(--ease-out) infinite; }
@keyframes cb-kpi-ping { 0% { transform: scale(1); opacity: 0.6; } 100% { transform: scale(2.6); opacity: 0; } }
@media (prefers-reduced-motion: reduce) { .cb-kpi__pulse::after { animation: none; } }
`;
let _i = false;
function ensureCss() {
  if (_i || typeof document === 'undefined') return;
  if (!document.getElementById('cb-kpi-css')) {
    const el = document.createElement('style');
    el.id = 'cb-kpi-css';
    el.textContent = CB_KPI_CSS;
    document.head.appendChild(el);
  }
  _i = true;
}
const TREND_GLYPH = {
  up: '▲',
  down: '▼',
  neutral: '—'
};

/**
 * KpiCard — the dashboard's signature metric tile. Mono value, a status-tinted
 * icon chip, a description and an optional trend line. `showPulse` adds a red
 * ping for critical states.
 */
function KpiCard({
  title,
  value,
  description,
  status = 'neutral',
  icon,
  trend,
  trendValue,
  showPulse = false,
  className = '',
  ...props
}) {
  ensureCss();
  const statusMod = ['good', 'warning', 'critical'].includes(status) ? status : '';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['cb-kpi', className].filter(Boolean).join(' ')
  }, props), showPulse && /*#__PURE__*/React.createElement("span", {
    className: "cb-kpi__pulse"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cb-kpi__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cb-kpi__title"
  }, title), icon && /*#__PURE__*/React.createElement("span", {
    className: ['cb-kpi__icon', statusMod ? `cb-kpi__icon--${statusMod}` : ''].filter(Boolean).join(' ')
  }, icon)), /*#__PURE__*/React.createElement("div", {
    className: ['cb-kpi__value', statusMod ? `cb-kpi__value--${statusMod}` : ''].filter(Boolean).join(' ')
  }, value), /*#__PURE__*/React.createElement("div", {
    className: "cb-kpi__foot"
  }, trend && /*#__PURE__*/React.createElement("span", {
    className: `cb-kpi__trend cb-kpi__trend--${trend}`
  }, TREND_GLYPH[trend], " ", trendValue), description && /*#__PURE__*/React.createElement("span", {
    className: "cb-kpi__desc"
  }, description)));
}
Object.assign(__ds_scope, { KpiCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dashboard/KpiCard.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CB_AVATAR_CSS = `
.cb-avatar {
  display: inline-flex; align-items: center; justify-content: center;
  width: 2.25rem; height: 2.25rem; flex-shrink: 0; overflow: hidden;
  border-radius: var(--radius-full);
  background: rgb(196 149 106 / 0.15); color: var(--brand-accent);
  font-family: var(--font-sans); font-weight: var(--weight-semibold); font-size: var(--text-sm);
  user-select: none;
}
.cb-avatar img { width: 100%; height: 100%; object-fit: cover; }
.cb-avatar--sm { width: 1.75rem; height: 1.75rem; font-size: var(--text-xs); }
.cb-avatar--lg { width: 5rem; height: 5rem; font-size: var(--text-3xl); }
`;
let _i = false;
function ensureCss() {
  if (_i || typeof document === 'undefined') return;
  if (!document.getElementById('cb-avatar-css')) {
    const el = document.createElement('style');
    el.id = 'cb-avatar-css';
    el.textContent = CB_AVATAR_CSS;
    document.head.appendChild(el);
  }
  _i = true;
}

/**
 * Avatar — a round identity chip. Pass `src` for an image, or `fallback`
 * (e.g. initials) shown in the copper-tinted default.
 */
function Avatar({
  src,
  alt = '',
  fallback,
  size = 'default',
  className = '',
  ...props
}) {
  ensureCss();
  const cls = ['cb-avatar', size !== 'default' ? `cb-avatar--${size}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, props), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  }) : fallback);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CB_CARD_CSS = `
.cb-card {
  display: flex; flex-direction: column;
  background: var(--card); color: var(--card-foreground);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-card);
  transition: box-shadow var(--duration-base) ease, transform var(--duration-base) ease;
}
.cb-card--hover:hover { box-shadow: var(--shadow-card-hover); transform: translateY(-1px); }
.cb-card__header { display: flex; flex-direction: column; gap: 0.375rem; padding: var(--space-6) var(--space-6) 0; }
.cb-card__title { margin: 0; font-family: var(--font-sans); font-size: var(--text-base); font-weight: var(--weight-semibold); letter-spacing: var(--tracking-tight); color: var(--foreground); }
.cb-card__desc { margin: 0; font-family: var(--font-sans); font-size: var(--text-xs); color: var(--muted-foreground); line-height: var(--leading-normal); }
.cb-card__content { padding: var(--space-6); }
.cb-card__footer { display: flex; align-items: center; gap: 0.75rem; padding: 0 var(--space-6) var(--space-6); }
`;
let _i = false;
function ensureCss() {
  if (_i || typeof document === 'undefined') return;
  if (!document.getElementById('cb-card-css')) {
    const el = document.createElement('style');
    el.id = 'cb-card-css';
    el.textContent = CB_CARD_CSS;
    document.head.appendChild(el);
  }
  _i = true;
}

/** Card — the signature premium surface (warm paper + layered shadow + hairline ring). */
function Card({
  hover = false,
  className = '',
  children,
  ...props
}) {
  ensureCss();
  const cls = ['cb-card', hover ? 'cb-card--hover' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, props), children);
}
function CardHeader({
  className = '',
  children,
  ...props
}) {
  ensureCss();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['cb-card__header', className].filter(Boolean).join(' ')
  }, props), children);
}
function CardTitle({
  className = '',
  children,
  ...props
}) {
  ensureCss();
  return /*#__PURE__*/React.createElement("h3", _extends({
    className: ['cb-card__title', className].filter(Boolean).join(' ')
  }, props), children);
}
function CardDescription({
  className = '',
  children,
  ...props
}) {
  ensureCss();
  return /*#__PURE__*/React.createElement("p", _extends({
    className: ['cb-card__desc', className].filter(Boolean).join(' ')
  }, props), children);
}
function CardContent({
  className = '',
  children,
  ...props
}) {
  ensureCss();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['cb-card__content', className].filter(Boolean).join(' ')
  }, props), children);
}
function CardFooter({
  className = '',
  children,
  ...props
}) {
  ensureCss();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['cb-card__footer', className].filter(Boolean).join(' ')
  }, props), children);
}
Object.assign(__ds_scope, { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Separator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CB_SEP_CSS = `
.cb-sep { border: none; background: var(--border); flex-shrink: 0; }
.cb-sep--horizontal { width: 100%; height: 1px; margin: 0; }
.cb-sep--vertical { width: 1px; align-self: stretch; min-height: 1rem; margin: 0; }
`;
let _i = false;
function ensureCss() {
  if (_i || typeof document === 'undefined') return;
  if (!document.getElementById('cb-sep-css')) {
    const el = document.createElement('style');
    el.id = 'cb-sep-css';
    el.textContent = CB_SEP_CSS;
    document.head.appendChild(el);
  }
  _i = true;
}

/** Separator — a hairline warm divider, horizontal (default) or vertical. */
function Separator({
  orientation = 'horizontal',
  className = '',
  ...props
}) {
  ensureCss();
  const cls = ['cb-sep', `cb-sep--${orientation}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    className: cls
  }, props));
}
Object.assign(__ds_scope, { Separator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Separator.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CB_INPUT_CSS = `
.cb-input {
  display: flex; width: 100%; height: 2.25rem;
  padding: 0 0.75rem;
  font-family: var(--font-sans); font-size: var(--text-sm); color: var(--foreground);
  background: var(--card); border: 1px solid var(--input); border-radius: var(--radius-md);
  transition: border-color var(--duration-base) ease, box-shadow var(--duration-base) ease;
}
.cb-input::placeholder { color: var(--muted-foreground); opacity: 0.8; }
.cb-input:focus { outline: none; border-color: var(--ring); box-shadow: 0 0 0 3px rgb(166 124 82 / 0.18); }
.cb-input:disabled { background: var(--muted); opacity: 0.6; cursor: not-allowed; }
.cb-input--mono { font-family: var(--font-mono); font-size: var(--text-sm); }
`;
let _i = false;
function ensureCss() {
  if (_i || typeof document === 'undefined') return;
  if (!document.getElementById('cb-input-css')) {
    const el = document.createElement('style');
    el.id = 'cb-input-css';
    el.textContent = CB_INPUT_CSS;
    document.head.appendChild(el);
  }
  _i = true;
}

/**
 * Input — single-line text field on a warm paper surface with a caramel
 * focus ring. Set `mono` for tokens / URLs / repo paths.
 */
function Input({
  mono = false,
  className = '',
  ...props
}) {
  ensureCss();
  const cls = ['cb-input', mono ? 'cb-input--mono' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("input", _extends({
    className: cls
  }, props));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CB_SWITCH_CSS = `
.cb-switch {
  position: relative; display: inline-flex; flex-shrink: 0; align-items: center;
  width: 2.25rem; height: 1.25rem; padding: 0; cursor: pointer;
  background: var(--secondary); border: none; border-radius: var(--radius-full);
  transition: background-color var(--duration-base) ease;
}
.cb-switch[data-checked="true"] { background: var(--brand-accent); }
.cb-switch:focus-visible { outline: 2px solid var(--ring); outline-offset: 2px; }
.cb-switch:disabled { opacity: 0.5; cursor: not-allowed; }
.cb-switch__thumb {
  position: absolute; left: 2px; width: 1rem; height: 1rem;
  background: #fff; border-radius: 999px; box-shadow: var(--shadow-xs);
  transition: transform var(--duration-base) var(--ease-out);
}
.cb-switch[data-checked="true"] .cb-switch__thumb { transform: translateX(1rem); }
`;
let _i = false;
function ensureCss() {
  if (_i || typeof document === 'undefined') return;
  if (!document.getElementById('cb-switch-css')) {
    const el = document.createElement('style');
    el.id = 'cb-switch-css';
    el.textContent = CB_SWITCH_CSS;
    document.head.appendChild(el);
  }
  _i = true;
}

/**
 * Switch — a small copper toggle. Controlled via `checked` + `onCheckedChange`.
 */
function Switch({
  checked = false,
  onCheckedChange,
  disabled = false,
  className = '',
  ...props
}) {
  ensureCss();
  const cls = ['cb-switch', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": checked,
    "data-checked": checked ? 'true' : 'false',
    disabled: disabled,
    onClick: () => onCheckedChange && onCheckedChange(!checked),
    className: cls
  }, props), /*#__PURE__*/React.createElement("span", {
    className: "cb-switch__thumb"
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CB_TABS_CSS = `
.cb-tabs { display: flex; flex-direction: column; gap: var(--space-4); }
.cb-tabs__list {
  display: inline-flex; align-items: center; gap: 2px;
  padding: 3px; background: var(--muted); border-radius: var(--radius-lg);
  width: fit-content; max-width: 100%; overflow-x: auto;
}
.cb-tabs__trigger {
  appearance: none; border: none; cursor: pointer; white-space: nowrap;
  display: inline-flex; align-items: center; gap: 0.375rem;
  padding: 0.375rem 0.875rem;
  font-family: var(--font-sans); font-size: var(--text-sm); font-weight: var(--weight-medium);
  color: var(--muted-foreground); background: transparent; border-radius: var(--radius-md);
  transition: color var(--duration-base) ease, background-color var(--duration-base) ease, box-shadow var(--duration-base) ease;
}
.cb-tabs__trigger:hover { color: var(--foreground); }
.cb-tabs__trigger[data-active="true"] {
  color: var(--foreground); background: var(--card); box-shadow: var(--shadow-xs);
}
.cb-tabs__trigger:focus-visible { outline: 2px solid var(--ring); outline-offset: 2px; }
`;
let _i = false;
function ensureCss() {
  if (_i || typeof document === 'undefined') return;
  if (!document.getElementById('cb-tabs-css')) {
    const el = document.createElement('style');
    el.id = 'cb-tabs-css';
    el.textContent = CB_TABS_CSS;
    document.head.appendChild(el);
  }
  _i = true;
}
const TabsCtx = React.createContext(null);

/** Tabs — segmented control + panels. Controlled (`value`) or uncontrolled (`defaultValue`). */
function Tabs({
  value,
  defaultValue,
  onValueChange,
  className = '',
  children,
  ...props
}) {
  ensureCss();
  const [internal, setInternal] = React.useState(defaultValue);
  const active = value !== undefined ? value : internal;
  const setActive = v => {
    if (value === undefined) setInternal(v);
    onValueChange && onValueChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['cb-tabs', className].filter(Boolean).join(' ')
  }, props), /*#__PURE__*/React.createElement(TabsCtx.Provider, {
    value: {
      active,
      setActive
    }
  }, children));
}
function TabsList({
  className = '',
  children,
  ...props
}) {
  ensureCss();
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    className: ['cb-tabs__list', className].filter(Boolean).join(' ')
  }, props), children);
}
function TabsTrigger({
  value,
  className = '',
  children,
  ...props
}) {
  const ctx = React.useContext(TabsCtx);
  const isActive = ctx && ctx.active === value;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "tab",
    "aria-selected": !!isActive,
    "data-active": isActive ? 'true' : 'false',
    onClick: () => ctx && ctx.setActive(value),
    className: ['cb-tabs__trigger', className].filter(Boolean).join(' ')
  }, props), children);
}
function TabsContent({
  value,
  className = '',
  children,
  ...props
}) {
  const ctx = React.useContext(TabsCtx);
  if (!ctx || ctx.active !== value) return null;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tabpanel",
    className: className
  }, props), children);
}
Object.assign(__ds_scope, { Tabs, TabsList, TabsTrigger, TabsContent });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// export/src/app.jsx
try { (() => {
// ── Commit Briefing UI kit — app shell & routing ───────────────────
function App() {
  const D = window.CB_DATA;
  const [projectId, setProjectId] = React.useState('worc');
  const [route, setRoute] = React.useState('dashboard');
  const [toast, setToast] = React.useState(null);
  const project = D.projects.find(p => p.id === projectId);
  const unread = D.notifications.filter(n => !n.read).length;
  React.useEffect(() => {
    window.__nav = setRoute;
  }, []);
  const nav = r => setRoute(r);
  const selectProject = id => {
    setProjectId(id);
    setRoute('dashboard');
  };
  const generate = () => {
    setToast('Briefing em processamento. Você receberá o e-mail em breve.');
    setTimeout(() => setToast(null), 3200);
  };
  const crumb = route === 'dashboard' ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, project.name), " \xB7 Dashboard") : route === 'briefing' ? /*#__PURE__*/React.createElement("span", null, project.name, " \xB7 ", /*#__PURE__*/React.createElement("b", null, "Briefing")) : route === 'settings' ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Configura\xE7\xF5es")) : /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Notifica\xE7\xF5es"));
  return /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, /*#__PURE__*/React.createElement(window.Sidebar, {
    projectId: projectId,
    route: route,
    onSelectProject: selectProject,
    onNav: nav
  }), /*#__PURE__*/React.createElement("div", {
    className: "main"
  }, /*#__PURE__*/React.createElement(window.Header, {
    crumb: crumb,
    unread: unread,
    onBell: () => nav('notifications')
  }), /*#__PURE__*/React.createElement("div", {
    className: "scroll"
  }, route === 'dashboard' && /*#__PURE__*/React.createElement(window.ProjectDashboard, {
    project: project,
    onGenerate: generate,
    onOpenBriefing: () => nav('briefing')
  }), route === 'briefing' && /*#__PURE__*/React.createElement(window.BriefingDetail, {
    project: project,
    onBack: () => nav('dashboard')
  }), route === 'settings' && /*#__PURE__*/React.createElement(window.SettingsScreen, null), route === 'notifications' && /*#__PURE__*/React.createElement(window.NotificationsScreen, null))), toast && /*#__PURE__*/React.createElement("div", {
    className: "toast"
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "loader",
    size: 16,
    className: "cursor-blink"
  }), toast));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/src/app.jsx", error: String((e && e.message) || e) }); }

// export/src/brands.js
try { (() => {
window.CB_BRAND = {
  "azuredevops-white": "data:image/svg+xml,%3Csvg%20fill%3D%22%23ffffff%22%20role%3D%22img%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EAzure%20DevOps%3C%2Ftitle%3E%3Cpath%20d%3D%22M0%208.877L2.247%205.91l8.405-3.416V.022l7.37%205.393L2.966%208.338v8.225L0%2015.707zm24-4.45v14.651l-5.753%204.9-9.303-3.057v3.056l-5.978-7.416%2015.057%201.798V5.415z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E",
  "azuredevops": "data:image/svg+xml,%3Csvg%20fill%3D%22%230078D7%22%20role%3D%22img%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EAzure%20DevOps%3C%2Ftitle%3E%3Cpath%20d%3D%22M0%208.877L2.247%205.91l8.405-3.416V.022l7.37%205.393L2.966%208.338v8.225L0%2015.707zm24-4.45v14.651l-5.753%204.9-9.303-3.057v3.056l-5.978-7.416%2015.057%201.798V5.415z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E",
  "dotnet-white": "data:image/svg+xml,%3Csvg%20fill%3D%22%23ffffff%22%20role%3D%22img%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3E.NET%3C%2Ftitle%3E%3Cpath%20d%3D%22M24%208.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852%207.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708%200H8.882L4.78%209.863a2.896%202.896%200%200%201-.258-.51h-.036c.032.189.048.592.048%201.21v5.772H3.157V7.53h1.659l3.965%206.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.829%200%200%201-.869.829.868.829%200%200%201-.868-.83.868.829%200%200%201%20.868-.828.868.829%200%200%201%20.869.829Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E",
  "dotnet": "data:image/svg+xml,%3Csvg%20fill%3D%22%23512BD4%22%20role%3D%22img%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3E.NET%3C%2Ftitle%3E%3Cpath%20d%3D%22M24%208.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852%207.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708%200H8.882L4.78%209.863a2.896%202.896%200%200%201-.258-.51h-.036c.032.189.048.592.048%201.21v5.772H3.157V7.53h1.659l3.965%206.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.829%200%200%201-.869.829.868.829%200%200%201-.868-.83.868.829%200%200%201%20.868-.828.868.829%200%200%201%20.869.829Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E",
  "expo-white": "data:image/svg+xml,%3Csvg%20fill%3D%22%23ffffff%22%20role%3D%22img%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EExpo%3C%2Ftitle%3E%3Cpath%20d%3D%22M0%2020.084c.043.53.23%201.063.718%201.778.58.849%201.576%201.315%202.303.567.49-.505%205.794-9.776%208.35-13.29a.761.761%200%20011.248%200c2.556%203.514%207.86%2012.785%208.35%2013.29.727.748%201.723.282%202.303-.567.57-.835.728-1.42.728-2.046%200-.426-8.26-15.798-9.092-17.078-.8-1.23-1.044-1.498-2.397-1.542h-1.032c-1.353.044-1.597.311-2.398%201.542C8.267%203.991.33%2018.758%200%2019.77Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E",
  "expo": "data:image/svg+xml,%3Csvg%20fill%3D%22%23000020%22%20role%3D%22img%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EExpo%3C%2Ftitle%3E%3Cpath%20d%3D%22M0%2020.084c.043.53.23%201.063.718%201.778.58.849%201.576%201.315%202.303.567.49-.505%205.794-9.776%208.35-13.29a.761.761%200%20011.248%200c2.556%203.514%207.86%2012.785%208.35%2013.29.727.748%201.723.282%202.303-.567.57-.835.728-1.42.728-2.046%200-.426-8.26-15.798-9.092-17.078-.8-1.23-1.044-1.498-2.397-1.542h-1.032c-1.353.044-1.597.311-2.398%201.542C8.267%203.991.33%2018.758%200%2019.77Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E",
  "gemini-white": "data:image/svg+xml,%3Csvg%20fill%3D%22%23ffffff%22%20role%3D%22img%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EGoogle%20Gemini%3C%2Ftitle%3E%3Cpath%20d%3D%22M11.04%2019.32Q12%2021.51%2012%2024q0-2.49.93-4.68.96-2.19%202.58-3.81t3.81-2.55Q21.51%2012%2024%2012q-2.49%200-4.68-.93a12.3%2012.3%200%200%201-3.81-2.58%2012.3%2012.3%200%200%201-2.58-3.81Q12%202.49%2012%200q0%202.49-.96%204.68-.93%202.19-2.55%203.81a12.3%2012.3%200%200%201-3.81%202.58Q2.49%2012%200%2012q2.49%200%204.68.96%202.19.93%203.81%202.55t2.55%203.81%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E",
  "gemini": "data:image/svg+xml,%3Csvg%20fill%3D%22%238E75B2%22%20role%3D%22img%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EGoogle%20Gemini%3C%2Ftitle%3E%3Cpath%20d%3D%22M11.04%2019.32Q12%2021.51%2012%2024q0-2.49.93-4.68.96-2.19%202.58-3.81t3.81-2.55Q21.51%2012%2024%2012q-2.49%200-4.68-.93a12.3%2012.3%200%200%201-3.81-2.58%2012.3%2012.3%200%200%201-2.58-3.81Q12%202.49%2012%200q0%202.49-.96%204.68-.93%202.19-2.55%203.81a12.3%2012.3%200%200%201-3.81%202.58Q2.49%2012%200%2012q2.49%200%204.68.96%202.19.93%203.81%202.55t2.55%203.81%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E",
  "github-white": "data:image/svg+xml,%3Csvg%20fill%3D%22%23ffffff%22%20role%3D%22img%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EGitHub%3C%2Ftitle%3E%3Cpath%20d%3D%22M12%20.297c-6.63%200-12%205.373-12%2012%200%205.303%203.438%209.8%208.205%2011.385.6.113.82-.258.82-.577%200-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422%2018.07%203.633%2017.7%203.633%2017.7c-1.087-.744.084-.729.084-.729%201.205.084%201.838%201.236%201.838%201.236%201.07%201.835%202.809%201.305%203.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93%200-1.31.465-2.38%201.235-3.22-.135-.303-.54-1.523.105-3.176%200%200%201.005-.322%203.3%201.23.96-.267%201.98-.399%203-.405%201.02.006%202.04.138%203%20.405%202.28-1.552%203.285-1.23%203.285-1.23.645%201.653.24%202.873.12%203.176.765.84%201.23%201.91%201.23%203.22%200%204.61-2.805%205.625-5.475%205.92.42.36.81%201.096.81%202.22%200%201.606-.015%202.896-.015%203.286%200%20.315.21.69.825.57C20.565%2022.092%2024%2017.592%2024%2012.297c0-6.627-5.373-12-12-12%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E",
  "github": "data:image/svg+xml,%3Csvg%20fill%3D%22%2324292f%22%20role%3D%22img%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EGitHub%3C%2Ftitle%3E%3Cpath%20d%3D%22M12%20.297c-6.63%200-12%205.373-12%2012%200%205.303%203.438%209.8%208.205%2011.385.6.113.82-.258.82-.577%200-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422%2018.07%203.633%2017.7%203.633%2017.7c-1.087-.744.084-.729.084-.729%201.205.084%201.838%201.236%201.838%201.236%201.07%201.835%202.809%201.305%203.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93%200-1.31.465-2.38%201.235-3.22-.135-.303-.54-1.523.105-3.176%200%200%201.005-.322%203.3%201.23.96-.267%201.98-.399%203-.405%201.02.006%202.04.138%203%20.405%202.28-1.552%203.285-1.23%203.285-1.23.645%201.653.24%202.873.12%203.176.765.84%201.23%201.91%201.23%203.22%200%204.61-2.805%205.625-5.475%205.92.42.36.81%201.096.81%202.22%200%201.606-.015%202.896-.015%203.286%200%20.315.21.69.825.57C20.565%2022.092%2024%2017.592%2024%2012.297c0-6.627-5.373-12-12-12%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E",
  "nextdotjs-white": "data:image/svg+xml,%3Csvg%20fill%3D%22%23ffffff%22%20role%3D%22img%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3ENext.js%3C%2Ftitle%3E%3Cpath%20d%3D%22M18.665%2021.978C16.758%2023.255%2014.465%2024%2012%2024%205.377%2024%200%2018.623%200%2012S5.377%200%2012%200s12%205.377%2012%2012c0%203.583-1.574%206.801-4.067%209.001L9.219%207.2H7.2v9.596h1.615V9.251l9.85%2012.727Zm-3.332-8.533%201.6%202.061V7.2h-1.6v6.245Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E",
  "nextdotjs": "data:image/svg+xml,%3Csvg%20fill%3D%22%23000000%22%20role%3D%22img%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3ENext.js%3C%2Ftitle%3E%3Cpath%20d%3D%22M18.665%2021.978C16.758%2023.255%2014.465%2024%2012%2024%205.377%2024%200%2018.623%200%2012S5.377%200%2012%200s12%205.377%2012%2012c0%203.583-1.574%206.801-4.067%209.001L9.219%207.2H7.2v9.596h1.615V9.251l9.85%2012.727Zm-3.332-8.533%201.6%202.061V7.2h-1.6v6.245Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E",
  "nodedotjs-white": "data:image/svg+xml,%3Csvg%20fill%3D%22%23ffffff%22%20role%3D%22img%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3ENode.js%3C%2Ftitle%3E%3Cpath%20d%3D%22M11.998%2C24c-0.321%2C0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383%20c0.585-0.203%2C0.703-0.25%2C1.328-0.604c0.065-0.037%2C0.151-0.023%2C0.218%2C0.017l2.256%2C1.339c0.082%2C0.045%2C0.197%2C0.045%2C0.272%2C0l8.795-5.076%20c0.082-0.047%2C0.134-0.141%2C0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271%2C0%20L3.075%2C6.68C2.99%2C6.729%2C2.936%2C6.825%2C2.936%2C6.921v10.15c0%2C0.097%2C0.054%2C0.189%2C0.139%2C0.235l2.409%2C1.392%20c1.307%2C0.654%2C2.108-0.116%2C2.108-0.89V7.787c0-0.142%2C0.114-0.253%2C0.256-0.253h1.115c0.139%2C0%2C0.255%2C0.112%2C0.255%2C0.253v10.021%20c0%2C1.745-0.95%2C2.745-2.604%2C2.745c-0.508%2C0-0.909%2C0-2.026-0.551L2.28%2C18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921%20c0-0.659%2C0.353-1.275%2C0.922-1.603l8.795-5.082c0.557-0.315%2C1.296-0.315%2C1.848%2C0l8.794%2C5.082c0.57%2C0.329%2C0.924%2C0.944%2C0.924%2C1.603%20v10.15c0%2C0.659-0.354%2C1.273-0.924%2C1.604l-8.794%2C5.078C12.643%2C23.916%2C12.324%2C24%2C11.998%2C24z%20M19.099%2C13.993%20c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528%2C0.235-1.233%2C2.258-1.233%20c1.807%2C0%2C2.473%2C0.389%2C2.747%2C1.607c0.024%2C0.115%2C0.129%2C0.199%2C0.247%2C0.199h1.141c0.071%2C0%2C0.138-0.031%2C0.186-0.081%20c0.048-0.054%2C0.074-0.123%2C0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508%2C0-4.004%2C1.058-4.004%2C2.833%20c0%2C1.925%2C1.488%2C2.457%2C3.895%2C2.695c2.88%2C0.282%2C3.103%2C0.703%2C3.103%2C1.269c0%2C0.983-0.789%2C1.402-2.642%2C1.402%20c-2.327%2C0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141%2C0-0.254%2C0.112-0.254%2C0.253%20c0%2C1.482%2C0.806%2C3.248%2C4.655%2C3.248C17.501%2C17.007%2C19.099%2C15.91%2C19.099%2C13.993z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E",
  "nodedotjs": "data:image/svg+xml,%3Csvg%20fill%3D%22%235FA04E%22%20role%3D%22img%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3ENode.js%3C%2Ftitle%3E%3Cpath%20d%3D%22M11.998%2C24c-0.321%2C0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383%20c0.585-0.203%2C0.703-0.25%2C1.328-0.604c0.065-0.037%2C0.151-0.023%2C0.218%2C0.017l2.256%2C1.339c0.082%2C0.045%2C0.197%2C0.045%2C0.272%2C0l8.795-5.076%20c0.082-0.047%2C0.134-0.141%2C0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271%2C0%20L3.075%2C6.68C2.99%2C6.729%2C2.936%2C6.825%2C2.936%2C6.921v10.15c0%2C0.097%2C0.054%2C0.189%2C0.139%2C0.235l2.409%2C1.392%20c1.307%2C0.654%2C2.108-0.116%2C2.108-0.89V7.787c0-0.142%2C0.114-0.253%2C0.256-0.253h1.115c0.139%2C0%2C0.255%2C0.112%2C0.255%2C0.253v10.021%20c0%2C1.745-0.95%2C2.745-2.604%2C2.745c-0.508%2C0-0.909%2C0-2.026-0.551L2.28%2C18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921%20c0-0.659%2C0.353-1.275%2C0.922-1.603l8.795-5.082c0.557-0.315%2C1.296-0.315%2C1.848%2C0l8.794%2C5.082c0.57%2C0.329%2C0.924%2C0.944%2C0.924%2C1.603%20v10.15c0%2C0.659-0.354%2C1.273-0.924%2C1.604l-8.794%2C5.078C12.643%2C23.916%2C12.324%2C24%2C11.998%2C24z%20M19.099%2C13.993%20c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528%2C0.235-1.233%2C2.258-1.233%20c1.807%2C0%2C2.473%2C0.389%2C2.747%2C1.607c0.024%2C0.115%2C0.129%2C0.199%2C0.247%2C0.199h1.141c0.071%2C0%2C0.138-0.031%2C0.186-0.081%20c0.048-0.054%2C0.074-0.123%2C0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508%2C0-4.004%2C1.058-4.004%2C2.833%20c0%2C1.925%2C1.488%2C2.457%2C3.895%2C2.695c2.88%2C0.282%2C3.103%2C0.703%2C3.103%2C1.269c0%2C0.983-0.789%2C1.402-2.642%2C1.402%20c-2.327%2C0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141%2C0-0.254%2C0.112-0.254%2C0.253%20c0%2C1.482%2C0.806%2C3.248%2C4.655%2C3.248C17.501%2C17.007%2C19.099%2C15.91%2C19.099%2C13.993z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E",
  "openai-white": "data:image/svg+xml,%3Csvg%20fill%3D%22%23ffffff%22%20role%3D%22img%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EOpenAI%3C%2Ftitle%3E%3Cpath%20d%3D%22M22.2819%209.8211a5.9847%205.9847%200%200%200-.5157-4.9108%206.0462%206.0462%200%200%200-6.5098-2.9A6.0651%206.0651%200%200%200%204.9807%204.1818a5.9847%205.9847%200%200%200-3.9977%202.9%206.0462%206.0462%200%200%200%20.7427%207.0966%205.98%205.98%200%200%200%20.511%204.9107%206.051%206.051%200%200%200%206.5146%202.9001A5.9847%205.9847%200%200%200%2013.2599%2024a6.0557%206.0557%200%200%200%205.7718-4.2058%205.9894%205.9894%200%200%200%203.9977-2.9001%206.0557%206.0557%200%200%200-.7475-7.0729zm-9.022%2012.6081a4.4755%204.4755%200%200%201-2.8764-1.0408l.1419-.0804%204.7783-2.7582a.7948.7948%200%200%200%20.3927-.6813v-6.7369l2.02%201.1686a.071.071%200%200%201%20.038.052v5.5826a4.504%204.504%200%200%201-4.4945%204.4944zm-9.6607-4.1254a4.4708%204.4708%200%200%201-.5346-3.0137l.142.0852%204.783%202.7582a.7712.7712%200%200%200%20.7806%200l5.8428-3.3685v2.3324a.0804.0804%200%200%201-.0332.0615L9.74%2019.9502a4.4992%204.4992%200%200%201-6.1408-1.6464zM2.3408%207.8956a4.485%204.485%200%200%201%202.3655-1.9728V11.6a.7664.7664%200%200%200%20.3879.6765l5.8144%203.3543-2.0201%201.1685a.0757.0757%200%200%201-.071%200l-4.8303-2.7865A4.504%204.504%200%200%201%202.3408%207.872zm16.5963%203.8558L13.1038%208.364%2015.1192%207.2a.0757.0757%200%200%201%20.071%200l4.8303%202.7913a4.4944%204.4944%200%200%201-.6765%208.1042v-5.6772a.79.79%200%200%200-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759%200%200%200-.7854%200L9.409%209.2297V6.8974a.0662.0662%200%200%201%20.0284-.0615l4.8303-2.7866a4.4992%204.4992%200%200%201%206.6802%204.66zM8.3065%2012.863l-2.02-1.1638a.0804.0804%200%200%201-.038-.0567V6.0742a4.4992%204.4992%200%200%201%207.3757-3.4537l-.142.0805L8.704%205.459a.7948.7948%200%200%200-.3927.6813zm1.0976-2.3654l2.602-1.4998%202.6069%201.4998v2.9994l-2.5974%201.4997-2.6067-1.4997Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E",
  "openai": "data:image/svg+xml,%3Csvg%20fill%3D%22%23000000%22%20role%3D%22img%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EOpenAI%3C%2Ftitle%3E%3Cpath%20d%3D%22M22.2819%209.8211a5.9847%205.9847%200%200%200-.5157-4.9108%206.0462%206.0462%200%200%200-6.5098-2.9A6.0651%206.0651%200%200%200%204.9807%204.1818a5.9847%205.9847%200%200%200-3.9977%202.9%206.0462%206.0462%200%200%200%20.7427%207.0966%205.98%205.98%200%200%200%20.511%204.9107%206.051%206.051%200%200%200%206.5146%202.9001A5.9847%205.9847%200%200%200%2013.2599%2024a6.0557%206.0557%200%200%200%205.7718-4.2058%205.9894%205.9894%200%200%200%203.9977-2.9001%206.0557%206.0557%200%200%200-.7475-7.0729zm-9.022%2012.6081a4.4755%204.4755%200%200%201-2.8764-1.0408l.1419-.0804%204.7783-2.7582a.7948.7948%200%200%200%20.3927-.6813v-6.7369l2.02%201.1686a.071.071%200%200%201%20.038.052v5.5826a4.504%204.504%200%200%201-4.4945%204.4944zm-9.6607-4.1254a4.4708%204.4708%200%200%201-.5346-3.0137l.142.0852%204.783%202.7582a.7712.7712%200%200%200%20.7806%200l5.8428-3.3685v2.3324a.0804.0804%200%200%201-.0332.0615L9.74%2019.9502a4.4992%204.4992%200%200%201-6.1408-1.6464zM2.3408%207.8956a4.485%204.485%200%200%201%202.3655-1.9728V11.6a.7664.7664%200%200%200%20.3879.6765l5.8144%203.3543-2.0201%201.1685a.0757.0757%200%200%201-.071%200l-4.8303-2.7865A4.504%204.504%200%200%201%202.3408%207.872zm16.5963%203.8558L13.1038%208.364%2015.1192%207.2a.0757.0757%200%200%201%20.071%200l4.8303%202.7913a4.4944%204.4944%200%200%201-.6765%208.1042v-5.6772a.79.79%200%200%200-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759%200%200%200-.7854%200L9.409%209.2297V6.8974a.0662.0662%200%200%201%20.0284-.0615l4.8303-2.7866a4.4992%204.4992%200%200%201%206.6802%204.66zM8.3065%2012.863l-2.02-1.1638a.0804.0804%200%200%201-.038-.0567V6.0742a4.4992%204.4992%200%200%201%207.3757-3.4537l-.142.0805L8.704%205.459a.7948.7948%200%200%200-.3927.6813zm1.0976-2.3654l2.602-1.4998%202.6069%201.4998v2.9994l-2.5974%201.4997-2.6067-1.4997Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E",
  "python-white": "data:image/svg+xml,%3Csvg%20fill%3D%22%23ffffff%22%20role%3D%22img%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EPython%3C%2Ftitle%3E%3Cpath%20d%3D%22M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02%201.27.05zm-6.3%201.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09%203.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14%201.04.05%201.23-.06%201.23-.16%201.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01%202.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47%2014.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E",
  "python": "data:image/svg+xml,%3Csvg%20fill%3D%22%233776AB%22%20role%3D%22img%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EPython%3C%2Ftitle%3E%3Cpath%20d%3D%22M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02%201.27.05zm-6.3%201.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09%203.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14%201.04.05%201.23-.06%201.23-.16%201.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01%202.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47%2014.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E",
  "react-white": "data:image/svg+xml,%3Csvg%20fill%3D%22%23ffffff%22%20role%3D%22img%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EReact%3C%2Ftitle%3E%3Cpath%20d%3D%22M14.23%2012.004a2.236%202.236%200%200%201-2.235%202.236%202.236%202.236%200%200%201-2.236-2.236%202.236%202.236%200%200%201%202.235-2.236%202.236%202.236%200%200%201%202.236%202.236zm2.648-10.69c-1.346%200-3.107.96-4.888%202.622-1.78-1.653-3.542-2.602-4.887-2.602-.41%200-.783.093-1.106.278-1.375.793-1.683%203.264-.973%206.365C1.98%208.917%200%2010.42%200%2012.004c0%201.59%201.99%203.097%205.043%204.03-.704%203.113-.39%205.588.988%206.38.32.187.69.275%201.102.275%201.345%200%203.107-.96%204.888-2.624%201.78%201.654%203.542%202.603%204.887%202.603.41%200%20.783-.09%201.106-.275%201.374-.792%201.683-3.263.973-6.365C22.02%2015.096%2024%2013.59%2024%2012.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005%201.09v.006c.225%200%20.406.044.558.127.666.382.955%201.835.73%203.704-.054.46-.142.945-.25%201.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447%201.592-1.48%203.087-2.292%204.105-2.295zm-9.77.02c1.012%200%202.514.808%204.11%202.28-.686.72-1.37%201.537-2.02%202.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882%203.05c.455.468.91.992%201.36%201.564-.44-.02-.89-.034-1.345-.034-.46%200-.915.01-1.36.034.44-.572.895-1.096%201.345-1.565zM12%208.1c.74%200%201.477.034%202.202.093.406.582.802%201.203%201.183%201.86.372.64.71%201.29%201.018%201.946-.308.655-.646%201.31-1.013%201.95-.38.66-.773%201.288-1.18%201.87-.728.063-1.466.098-2.21.098-.74%200-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313%201.013-1.954.38-.66.773-1.286%201.18-1.868.728-.064%201.466-.098%202.21-.098zm-3.635.254c-.24.377-.48.763-.704%201.16-.225.39-.435.782-.635%201.174-.265-.656-.49-1.31-.676-1.947.64-.15%201.315-.283%202.015-.386zm7.26%200c.695.103%201.365.23%202.006.387-.18.632-.405%201.282-.66%201.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317%201.375.498%201.732.74%202.852%201.708%202.852%202.476-.005.768-1.125%201.74-2.857%202.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01%201.085-2.964zm-13.395.004c.278.96.645%201.957%201.1%202.98-.45%201.017-.812%202.01-1.086%202.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474%200-.768%201.12-1.742%202.852-2.476.42-.18.88-.342%201.356-.494zm11.678%204.28c.265.657.49%201.312.676%201.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64%201.175.23.39.465.772.705%201.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92%2016.32c.112.493.2.968.254%201.423.23%201.868-.054%203.32-.714%203.708-.147.09-.338.128-.563.128-1.012%200-2.514-.807-4.11-2.28.686-.72%201.37-1.536%202.02-2.44%201.107-.118%202.154-.3%203.113-.54zm-11.83.01c.96.234%202.006.415%203.107.532.66.905%201.345%201.727%202.035%202.446-1.595%201.483-3.092%202.295-4.11%202.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034%201.345.034.46%200%20.915-.01%201.36-.034-.44.572-.895%201.095-1.345%201.565-.455-.47-.91-.993-1.36-1.565z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E",
  "react": "data:image/svg+xml,%3Csvg%20fill%3D%22%2361DAFB%22%20role%3D%22img%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EReact%3C%2Ftitle%3E%3Cpath%20d%3D%22M14.23%2012.004a2.236%202.236%200%200%201-2.235%202.236%202.236%202.236%200%200%201-2.236-2.236%202.236%202.236%200%200%201%202.235-2.236%202.236%202.236%200%200%201%202.236%202.236zm2.648-10.69c-1.346%200-3.107.96-4.888%202.622-1.78-1.653-3.542-2.602-4.887-2.602-.41%200-.783.093-1.106.278-1.375.793-1.683%203.264-.973%206.365C1.98%208.917%200%2010.42%200%2012.004c0%201.59%201.99%203.097%205.043%204.03-.704%203.113-.39%205.588.988%206.38.32.187.69.275%201.102.275%201.345%200%203.107-.96%204.888-2.624%201.78%201.654%203.542%202.603%204.887%202.603.41%200%20.783-.09%201.106-.275%201.374-.792%201.683-3.263.973-6.365C22.02%2015.096%2024%2013.59%2024%2012.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005%201.09v.006c.225%200%20.406.044.558.127.666.382.955%201.835.73%203.704-.054.46-.142.945-.25%201.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447%201.592-1.48%203.087-2.292%204.105-2.295zm-9.77.02c1.012%200%202.514.808%204.11%202.28-.686.72-1.37%201.537-2.02%202.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882%203.05c.455.468.91.992%201.36%201.564-.44-.02-.89-.034-1.345-.034-.46%200-.915.01-1.36.034.44-.572.895-1.096%201.345-1.565zM12%208.1c.74%200%201.477.034%202.202.093.406.582.802%201.203%201.183%201.86.372.64.71%201.29%201.018%201.946-.308.655-.646%201.31-1.013%201.95-.38.66-.773%201.288-1.18%201.87-.728.063-1.466.098-2.21.098-.74%200-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313%201.013-1.954.38-.66.773-1.286%201.18-1.868.728-.064%201.466-.098%202.21-.098zm-3.635.254c-.24.377-.48.763-.704%201.16-.225.39-.435.782-.635%201.174-.265-.656-.49-1.31-.676-1.947.64-.15%201.315-.283%202.015-.386zm7.26%200c.695.103%201.365.23%202.006.387-.18.632-.405%201.282-.66%201.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317%201.375.498%201.732.74%202.852%201.708%202.852%202.476-.005.768-1.125%201.74-2.857%202.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01%201.085-2.964zm-13.395.004c.278.96.645%201.957%201.1%202.98-.45%201.017-.812%202.01-1.086%202.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474%200-.768%201.12-1.742%202.852-2.476.42-.18.88-.342%201.356-.494zm11.678%204.28c.265.657.49%201.312.676%201.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64%201.175.23.39.465.772.705%201.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92%2016.32c.112.493.2.968.254%201.423.23%201.868-.054%203.32-.714%203.708-.147.09-.338.128-.563.128-1.012%200-2.514-.807-4.11-2.28.686-.72%201.37-1.536%202.02-2.44%201.107-.118%202.154-.3%203.113-.54zm-11.83.01c.96.234%202.006.415%203.107.532.66.905%201.345%201.727%202.035%202.446-1.595%201.483-3.092%202.295-4.11%202.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034%201.345.034.46%200%20.915-.01%201.36-.034-.44.572-.895%201.095-1.345%201.565-.455-.47-.91-.993-1.36-1.565z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E",
  "slack-white": "data:image/svg+xml,%3Csvg%20fill%3D%22%23ffffff%22%20role%3D%22img%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3ESlack%3C%2Ftitle%3E%3Cpath%20d%3D%22M5.042%2015.165a2.528%202.528%200%200%201-2.52%202.523A2.528%202.528%200%200%201%200%2015.165a2.527%202.527%200%200%201%202.522-2.52h2.52v2.52zM6.313%2015.165a2.527%202.527%200%200%201%202.521-2.52%202.527%202.527%200%200%201%202.521%202.52v6.313A2.528%202.528%200%200%201%208.834%2024a2.528%202.528%200%200%201-2.521-2.522v-6.313zM8.834%205.042a2.528%202.528%200%200%201-2.521-2.52A2.528%202.528%200%200%201%208.834%200a2.528%202.528%200%200%201%202.521%202.522v2.52H8.834zM8.834%206.313a2.528%202.528%200%200%201%202.521%202.521%202.528%202.528%200%200%201-2.521%202.521H2.522A2.528%202.528%200%200%201%200%208.834a2.528%202.528%200%200%201%202.522-2.521h6.312zM18.956%208.834a2.528%202.528%200%200%201%202.522-2.521A2.528%202.528%200%200%201%2024%208.834a2.528%202.528%200%200%201-2.522%202.521h-2.522V8.834zM17.688%208.834a2.528%202.528%200%200%201-2.523%202.521%202.527%202.527%200%200%201-2.52-2.521V2.522A2.527%202.527%200%200%201%2015.165%200a2.528%202.528%200%200%201%202.523%202.522v6.312zM15.165%2018.956a2.528%202.528%200%200%201%202.523%202.522A2.528%202.528%200%200%201%2015.165%2024a2.527%202.527%200%200%201-2.52-2.522v-2.522h2.52zM15.165%2017.688a2.527%202.527%200%200%201-2.52-2.523%202.526%202.526%200%200%201%202.52-2.52h6.313A2.527%202.527%200%200%201%2024%2015.165a2.528%202.528%200%200%201-2.522%202.523h-6.313z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E",
  "slack": "data:image/svg+xml,%3Csvg%20fill%3D%22%23611f69%22%20role%3D%22img%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3ESlack%3C%2Ftitle%3E%3Cpath%20d%3D%22M5.042%2015.165a2.528%202.528%200%200%201-2.52%202.523A2.528%202.528%200%200%201%200%2015.165a2.527%202.527%200%200%201%202.522-2.52h2.52v2.52zM6.313%2015.165a2.527%202.527%200%200%201%202.521-2.52%202.527%202.527%200%200%201%202.521%202.52v6.313A2.528%202.528%200%200%201%208.834%2024a2.528%202.528%200%200%201-2.521-2.522v-6.313zM8.834%205.042a2.528%202.528%200%200%201-2.521-2.52A2.528%202.528%200%200%201%208.834%200a2.528%202.528%200%200%201%202.521%202.522v2.52H8.834zM8.834%206.313a2.528%202.528%200%200%201%202.521%202.521%202.528%202.528%200%200%201-2.521%202.521H2.522A2.528%202.528%200%200%201%200%208.834a2.528%202.528%200%200%201%202.522-2.521h6.312zM18.956%208.834a2.528%202.528%200%200%201%202.522-2.521A2.528%202.528%200%200%201%2024%208.834a2.528%202.528%200%200%201-2.522%202.521h-2.522V8.834zM17.688%208.834a2.528%202.528%200%200%201-2.523%202.521%202.527%202.527%200%200%201-2.52-2.521V2.522A2.527%202.527%200%200%201%2015.165%200a2.528%202.528%200%200%201%202.523%202.522v6.312zM15.165%2018.956a2.528%202.528%200%200%201%202.523%202.522A2.528%202.528%200%200%201%2015.165%2024a2.527%202.527%200%200%201-2.52-2.522v-2.522h2.52zM15.165%2017.688a2.527%202.527%200%200%201-2.52-2.523%202.526%202.526%200%200%201%202.52-2.52h6.313A2.527%202.527%200%200%201%2024%2015.165a2.528%202.528%200%200%201-2.522%202.523h-6.313z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E",
  "supabase-white": "data:image/svg+xml,%3Csvg%20fill%3D%22%23ffffff%22%20role%3D%22img%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3ESupabase%3C%2Ftitle%3E%3Cpath%20d%3D%22M11.9%201.036c-.015-.986-1.26-1.41-1.874-.637L.764%2012.05C-.33%2013.427.65%2015.455%202.409%2015.455h9.579l.113%207.51c.014.985%201.259%201.408%201.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E",
  "supabase": "data:image/svg+xml,%3Csvg%20fill%3D%22%233FCF8E%22%20role%3D%22img%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3ESupabase%3C%2Ftitle%3E%3Cpath%20d%3D%22M11.9%201.036c-.015-.986-1.26-1.41-1.874-.637L.764%2012.05C-.33%2013.427.65%2015.455%202.409%2015.455h9.579l.113%207.51c.014.985%201.259%201.408%201.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E",
  "logo-mark": "data:image/svg+xml,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cline%20x1%3D%223%22%20y1%3D%2216%22%20x2%3D%2211%22%20y2%3D%2216%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222.4%22%20stroke-linecap%3D%22round%22%3E%3C%2Fline%3E%0A%20%20%3Cline%20x1%3D%2221%22%20y1%3D%2216%22%20x2%3D%2229%22%20y2%3D%2216%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222.4%22%20stroke-linecap%3D%22round%22%3E%3C%2Fline%3E%0A%20%20%3Ccircle%20cx%3D%2216%22%20cy%3D%2216%22%20r%3D%225.4%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222.4%22%20fill%3D%22none%22%3E%3C%2Fcircle%3E%0A%3C%2Fsvg%3E"
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/src/brands.js", error: String((e && e.message) || e) }); }

// export/src/data.js
try { (() => {
// ── Commit Briefing — UI kit mock data (nicebyte org) ──────────────
window.CB_DATA = {
  user: {
    name: 'Maria Andrade',
    email: 'maria@nicebyte.dev',
    role: 'Admin'
  },
  org: {
    name: 'nicebyte'
  },
  projects: [{
    id: 'worc',
    name: 'Worc',
    stack: '.NET 8 + SQL Server',
    stackIcon: 'dotnet',
    status: 'healthy'
  }, {
    id: 'atlas-app',
    name: 'Atlas App',
    stack: 'React Expo + Supabase',
    stackIcon: 'react',
    status: 'warning'
  }, {
    id: 'painel-web',
    name: 'Painel Web',
    stack: 'Next.js + Supabase',
    stackIcon: 'nextdotjs',
    status: 'healthy'
  }, {
    id: 'ingestor',
    name: 'Ingestor',
    stack: 'Python',
    stackIcon: 'python',
    status: 'critical'
  }],
  // Keyed by project id
  briefing: {
    worc: {
      id: 'br-worc-2406',
      period: {
        start: '2026-05-19',
        end: '2026-06-02'
      },
      previousPeriod: {
        start: '2026-05-05',
        end: '2026-05-19'
      },
      totalCommits: 142,
      totalTasks: 38,
      llmProvider: 'gemini-2.5-flash',
      dora: {
        cycleTime: {
          value: '2.4d',
          status: 'good',
          description: 'Tempo médio por task'
        },
        busFactor: {
          topContributor: 'M. Andrade',
          topContributorPercentage: 92,
          status: 'critical'
        },
        deployFrequency: {
          value: '7/sem',
          status: 'good'
        },
        toil: {
          value: '34%',
          category: 'Infra/DevOps',
          threshold: 25,
          status: 'warning'
        }
      },
      health: {
        score: 62,
        status: 'critical'
      },
      effort: [{
        name: 'Feature',
        value: 48
      }, {
        name: 'Infra/DevOps',
        value: 34
      }, {
        name: 'Tech Debt',
        value: 11
      }, {
        name: 'Bug Fix',
        value: 7
      }],
      comparison: [{
        name: 'Feature',
        cur: 48,
        prev: 61
      }, {
        name: 'Infra/DevOps',
        cur: 34,
        prev: 19
      }, {
        name: 'Tech Debt',
        cur: 11,
        prev: 14
      }, {
        name: 'Bug Fix',
        cur: 7,
        prev: 6
      }],
      summary: ['Cadência saudável: 142 commits distribuídos em 7 PRs mergeados no período.', 'Atenção: 92% dos commits concentrados em M. Andrade — bus factor 1.', 'Toil em 34%, acima do limite de 25% — automação de migrations devolveria tempo a Features.'],
      risks: [{
        id: 'r1',
        severity: 'critical',
        title: 'Bus factor 1 em módulo de billing',
        detail: '92% dos commits do core de cobrança vêm de um único autor. Saída impacta produção.',
        area: 'Conhecimento'
      }, {
        id: 'r2',
        severity: 'high',
        title: 'Toil acima do limite',
        detail: 'Infra/DevOps consumiu 34% do esforço (limite 25%). Migrations manuais recorrentes.',
        area: 'Operação'
      }, {
        id: 'r3',
        severity: 'medium',
        title: 'Cobertura de testes em queda',
        detail: 'PRs recentes adicionam endpoints sem testes de integração.',
        area: 'Qualidade'
      }, {
        id: 'r4',
        severity: 'low',
        title: 'Branch main sem proteção de CI obrigatório',
        detail: 'Merges possíveis sem checks verdes em alguns casos.',
        area: 'Processo'
      }],
      tasks: [{
        id: 'WRC-412',
        title: 'Endpoint de faturamento recorrente',
        category: 'Feature',
        author: 'M. Andrade',
        commits: 23
      }, {
        id: 'WRC-418',
        title: 'Migração de schema billing v3',
        category: 'Infra/DevOps',
        author: 'M. Andrade',
        commits: 17
      }, {
        id: 'WRC-401',
        title: 'Corrigir cálculo de impostos',
        category: 'Bug Fix',
        author: 'J. Pereira',
        commits: 6
      }, {
        id: 'WRC-420',
        title: 'Refatorar repositório de pedidos',
        category: 'Tech Debt',
        author: 'L. Souza',
        commits: 9
      }, {
        id: 'WRC-422',
        title: 'Webhook de status de pagamento',
        category: 'Feature',
        author: 'M. Andrade',
        commits: 14
      }, {
        id: 'WRC-415',
        title: 'Pipeline de deploy para staging',
        category: 'Infra/DevOps',
        author: 'L. Souza',
        commits: 11
      }]
    }
  },
  notifications: [{
    id: 'n1',
    type: 'briefing_done',
    title: 'Briefing gerado — Worc',
    body: 'Período 19/05 — 02/06 processado. PDF enviado por e-mail.',
    read: false,
    ago: 'há 12min'
  }, {
    id: 'n2',
    type: 'risk_critical',
    title: 'Risco crítico em Worc',
    body: 'Bus factor 1 detectado no módulo de billing.',
    read: false,
    ago: 'há 1h'
  }, {
    id: 'n3',
    type: 'toil_alert',
    title: 'Toil acima do limite — Worc',
    body: 'Infra/DevOps em 34% (limite 25%).',
    read: false,
    ago: 'há 1h'
  }, {
    id: 'n4',
    type: 'risk_high',
    title: 'Cobertura em queda — Atlas App',
    body: 'PRs recentes sem testes de integração.',
    read: true,
    ago: 'há 3h'
  }, {
    id: 'n5',
    type: 'briefing_done',
    title: 'Briefing gerado — Painel Web',
    body: 'Período 12/05 — 26/05 processado.',
    read: true,
    ago: 'ontem'
  }, {
    id: 'n6',
    type: 'info',
    title: 'Integração Slack disponível',
    body: 'Conecte um canal para receber alertas em tempo real.',
    read: true,
    ago: 'há 2d'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/src/data.js", error: String((e && e.message) || e) }); }

// export/src/features.jsx
try { (() => {
// ── Commit Briefing UI kit — feature widgets ───────────────────────
const EFFORT_COLORS = {
  'Feature': 'var(--chart-1)',
  'Infra/DevOps': 'var(--chart-2)',
  'Tech Debt': 'var(--chart-3)',
  'Bug Fix': 'var(--chart-4)'
};
function Sidebar({
  projectId,
  route,
  onSelectProject,
  onNav
}) {
  const D = window.CB_DATA;
  return /*#__PURE__*/React.createElement("aside", {
    className: "sb"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sb__brand"
  }, /*#__PURE__*/React.createElement("img", {
    className: "sb__mark",
    src: window.CB_BRAND && window.CB_BRAND['logo-mark'] || '',
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "sb__wm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, "Commit Briefing"), /*#__PURE__*/React.createElement("div", {
    className: "s"
  }, "DevOps Intelligence"))), /*#__PURE__*/React.createElement("div", {
    className: "sb__sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sb__label"
  }, "Projetos"), D.projects.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    className: "sb__item",
    "data-active": route === 'dashboard' && projectId === p.id,
    onClick: () => onSelectProject(p.id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico"
  }, /*#__PURE__*/React.createElement(window.Brand, {
    name: p.stackIcon,
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    className: "nm"
  }, p.name), /*#__PURE__*/React.createElement("span", {
    className: `sb__dot sb__dot--${p.status}`
  })))), /*#__PURE__*/React.createElement("div", {
    className: "sb__sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sb__label"
  }, "Conta"), /*#__PURE__*/React.createElement("button", {
    className: "sb__item",
    "data-active": route === 'notifications',
    onClick: () => onNav('notifications')
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "bell",
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    className: "nm"
  }, "Notifica\xE7\xF5es"), /*#__PURE__*/React.createElement("span", {
    className: "sb__dot sb__dot--critical"
  })), /*#__PURE__*/React.createElement("button", {
    className: "sb__item",
    "data-active": route === 'settings',
    onClick: () => onNav('settings')
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "settings",
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    className: "nm"
  }, "Configura\xE7\xF5es"))), /*#__PURE__*/React.createElement("div", {
    className: "sb__spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sb__user"
  }, /*#__PURE__*/React.createElement(window.Avatar, {
    fallback: "M"
  }), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, D.user.name), /*#__PURE__*/React.createElement("div", {
    className: "e"
  }, D.user.email))));
}
function Header({
  crumb,
  unread,
  onBell
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "hdr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hdr__crumb"
  }, crumb), /*#__PURE__*/React.createElement("div", {
    className: "hdr__spacer"
  }), /*#__PURE__*/React.createElement("button", {
    className: "hdr__icon",
    title: "Buscar"
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "search",
    size: 17
  })), /*#__PURE__*/React.createElement("button", {
    className: "hdr__icon",
    title: "Tema"
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "sun",
    size: 17
  })), /*#__PURE__*/React.createElement("button", {
    className: "hdr__icon",
    title: "Notifica\xE7\xF5es",
    onClick: onBell
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "bell",
    size: 17
  }), unread > 0 && /*#__PURE__*/React.createElement("span", {
    className: "hdr__badge"
  }, unread)));
}
function EffortChart({
  data
}) {
  return /*#__PURE__*/React.createElement(window.Card, null, /*#__PURE__*/React.createElement(window.CardH, {
    title: "Distribui\xE7\xE3o de Esfor\xE7o",
    desc: "Como o time investiu o per\xEDodo"
  }), /*#__PURE__*/React.createElement("div", {
    className: "card__b"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bars"
  }, data.map(d => /*#__PURE__*/React.createElement("div", {
    className: "barrow",
    key: d.name
  }, /*#__PURE__*/React.createElement("span", {
    className: "lab"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sw",
    style: {
      background: EFFORT_COLORS[d.name]
    }
  }), d.name), /*#__PURE__*/React.createElement("span", {
    className: "track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fill",
    style: {
      width: d.value + '%',
      background: EFFORT_COLORS[d.name]
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "pct"
  }, d.value, "%"))))));
}
function ComparisonChart({
  data
}) {
  return /*#__PURE__*/React.createElement(window.Card, null, /*#__PURE__*/React.createElement(window.CardH, {
    title: "Compara\xE7\xE3o com Per\xEDodo Anterior",
    desc: "Varia\xE7\xE3o na aloca\xE7\xE3o de esfor\xE7o"
  }), /*#__PURE__*/React.createElement("div", {
    className: "card__b"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cmp"
  }, data.map(d => {
    const delta = d.cur - d.prev;
    return /*#__PURE__*/React.createElement("div", {
      className: "cmprow",
      key: d.name
    }, /*#__PURE__*/React.createElement("div", {
      className: "top"
    }, /*#__PURE__*/React.createElement("span", null, d.name), /*#__PURE__*/React.createElement("span", {
      className: 'delta ' + (delta >= 0 ? 'delta--up' : 'delta--down')
    }, delta >= 0 ? '+' : '', delta, "pp")), /*#__PURE__*/React.createElement("div", {
      className: "dual"
    }, /*#__PURE__*/React.createElement("span", {
      className: "t"
    }, /*#__PURE__*/React.createElement("span", {
      className: "f",
      style: {
        width: d.prev + '%',
        background: 'var(--line)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      className: "t"
    }, /*#__PURE__*/React.createElement("span", {
      className: "f",
      style: {
        width: d.cur + '%',
        background: EFFORT_COLORS[d.name]
      }
    }))));
  }))));
}
const SEV_LABEL = {
  critical: 'Crítico',
  high: 'Alto',
  medium: 'Médio',
  low: 'Baixo'
};
function RiskRadar({
  risks,
  onOpen
}) {
  const counts = ['critical', 'high', 'medium', 'low'].map(s => ({
    s,
    n: risks.filter(r => r.severity === s).length
  }));
  return /*#__PURE__*/React.createElement(window.Card, null, /*#__PURE__*/React.createElement(window.CardH, {
    title: "Radar de Riscos",
    desc: `${risks.length} riscos detectados pelo agente`,
    right: /*#__PURE__*/React.createElement(window.Btn, {
      variant: "ghost",
      size: "sm",
      onClick: onOpen
    }, "Ver todos", /*#__PURE__*/React.createElement(window.Icon, {
      name: "chevron-right",
      size: 15
    }))
  }), /*#__PURE__*/React.createElement("div", {
    className: "card__b"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 14,
      flexWrap: 'wrap'
    }
  }, counts.map(c => /*#__PURE__*/React.createElement(window.Status, {
    key: c.s,
    status: c.s === 'high' ? 'high' : c.s,
    dot: true
  }, c.n, " ", SEV_LABEL[c.s]))), /*#__PURE__*/React.createElement("div", null, risks.slice(0, 3).map(r => /*#__PURE__*/React.createElement("div", {
    className: "risk",
    key: r.id
  }, /*#__PURE__*/React.createElement("span", {
    className: `risk__bar risk__bar--${r.severity}`
  }), /*#__PURE__*/React.createElement("div", {
    className: "risk__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "risk__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "risk__title"
  }, r.title)), /*#__PURE__*/React.createElement("div", {
    className: "risk__detail"
  }, r.detail)))))));
}
function AgentSummary({
  summary,
  provider,
  period
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "card terminal-warm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "term"
  }, /*#__PURE__*/React.createElement("div", {
    className: "term__h"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "Resumo do Agente"), /*#__PURE__*/React.createElement("span", {
    className: "prov"
  }, provider)), summary.map((line, i) => /*#__PURE__*/React.createElement("div", {
    className: "term__line",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "\u203A"), /*#__PURE__*/React.createElement("span", null, line, i === summary.length - 1 && /*#__PURE__*/React.createElement("span", {
    className: "term__cur cursor-blink"
  }))))));
}
Object.assign(window, {
  Sidebar,
  Header,
  EffortChart,
  ComparisonChart,
  RiskRadar,
  AgentSummary,
  SEV_LABEL,
  EFFORT_COLORS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/src/features.jsx", error: String((e && e.message) || e) }); }

// export/src/icons.js
try { (() => {
window.CB_ICONS = {
  "clock": "<circle cx=\"12\" cy=\"12\" r=\"10\" />\n  <path d=\"M12 6v6l4 2\" />",
  "users": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\" />\n  <path d=\"M16 3.128a4 4 0 0 1 0 7.744\" />\n  <path d=\"M22 21v-2a4 4 0 0 0-3-3.87\" />\n  <circle cx=\"9\" cy=\"7\" r=\"4\" />",
  "rocket": "<path d=\"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5\" />\n  <path d=\"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09\" />\n  <path d=\"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z\" />\n  <path d=\"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05\" />",
  "zap": "<path d=\"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z\" />",
  "shield": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\" />",
  "layout-grid": "<rect width=\"7\" height=\"7\" x=\"3\" y=\"3\" rx=\"1\" />\n  <rect width=\"7\" height=\"7\" x=\"14\" y=\"3\" rx=\"1\" />\n  <rect width=\"7\" height=\"7\" x=\"14\" y=\"14\" rx=\"1\" />\n  <rect width=\"7\" height=\"7\" x=\"3\" y=\"14\" rx=\"1\" />",
  "bell": "<path d=\"M10.268 21a2 2 0 0 0 3.464 0\" />\n  <path d=\"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326\" />",
  "bell-off": "<path d=\"M10.268 21a2 2 0 0 0 3.464 0\" />\n  <path d=\"M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742\" />\n  <path d=\"m2 2 20 20\" />\n  <path d=\"M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05\" />",
  "settings": "<path d=\"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915\" />\n  <circle cx=\"12\" cy=\"12\" r=\"3\" />",
  "user": "<path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\" />\n  <circle cx=\"12\" cy=\"7\" r=\"4\" />",
  "file-text": "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\" />\n  <path d=\"M14 2v5a1 1 0 0 0 1 1h5\" />\n  <path d=\"M10 9H8\" />\n  <path d=\"M16 13H8\" />\n  <path d=\"M16 17H8\" />",
  "chevron-right": "<path d=\"m9 18 6-6-6-6\" />",
  "chevron-down": "<path d=\"m6 9 6 6 6-6\" />",
  "arrow-left": "<path d=\"m12 19-7-7 7-7\" />\n  <path d=\"M19 12H5\" />",
  "plus": "<path d=\"M5 12h14\" />\n  <path d=\"M12 5v14\" />",
  "download": "<path d=\"M12 15V3\" />\n  <path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\" />\n  <path d=\"m7 10 5 5 5-5\" />",
  "share-2": "<circle cx=\"18\" cy=\"5\" r=\"3\" />\n  <circle cx=\"6\" cy=\"12\" r=\"3\" />\n  <circle cx=\"18\" cy=\"19\" r=\"3\" />\n  <line x1=\"8.59\" x2=\"15.42\" y1=\"13.51\" y2=\"17.49\" />\n  <line x1=\"15.41\" x2=\"8.59\" y1=\"6.51\" y2=\"10.49\" />",
  "calendar": "<path d=\"M8 2v4\" />\n  <path d=\"M16 2v4\" />\n  <rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\" />\n  <path d=\"M3 10h18\" />",
  "check": "<path d=\"M20 6 9 17l-5-5\" />",
  "check-check": "<path d=\"M18 6 7 17l-5-5\" />\n  <path d=\"m22 10-7.5 7.5L13 16\" />",
  "alert-triangle": "<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\" />\n  <path d=\"M12 9v4\" />\n  <path d=\"M12 17h.01\" />",
  "circle-check-big": "<path d=\"M21.801 10A10 10 0 1 1 17 3.335\" />\n  <path d=\"m9 11 3 3L22 4\" />",
  "info": "<circle cx=\"12\" cy=\"12\" r=\"10\" />\n  <path d=\"M12 16v-4\" />\n  <path d=\"M12 8h.01\" />",
  "mail": "<path d=\"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7\" />\n  <rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\" />",
  "message-square": "<path d=\"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z\" />",
  "eye": "<path d=\"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0\" />\n  <circle cx=\"12\" cy=\"12\" r=\"3\" />",
  "eye-off": "<path d=\"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49\" />\n  <path d=\"M14.084 14.158a3 3 0 0 1-4.242-4.242\" />\n  <path d=\"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143\" />\n  <path d=\"m2 2 20 20\" />",
  "trash-2": "<path d=\"M10 11v6\" />\n  <path d=\"M14 11v6\" />\n  <path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6\" />\n  <path d=\"M3 6h18\" />\n  <path d=\"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\" />",
  "search": "<path d=\"m21 21-4.34-4.34\" />\n  <circle cx=\"11\" cy=\"11\" r=\"8\" />",
  "sun": "<circle cx=\"12\" cy=\"12\" r=\"4\" />\n  <path d=\"M12 2v2\" />\n  <path d=\"M12 20v2\" />\n  <path d=\"m4.93 4.93 1.41 1.41\" />\n  <path d=\"m17.66 17.66 1.41 1.41\" />\n  <path d=\"M2 12h2\" />\n  <path d=\"M20 12h2\" />\n  <path d=\"m6.34 17.66-1.41 1.41\" />\n  <path d=\"m19.07 4.93-1.41 1.41\" />",
  "moon": "<path d=\"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401\" />",
  "external-link": "<path d=\"M15 3h6v6\" />\n  <path d=\"M10 14 21 3\" />\n  <path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\" />",
  "refresh-cw": "<path d=\"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8\" />\n  <path d=\"M21 3v5h-5\" />\n  <path d=\"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16\" />\n  <path d=\"M8 16H3v5\" />",
  "folder-git-2": "<path d=\"M18 19a5 5 0 0 1-5-5v8\" />\n  <path d=\"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5\" />\n  <circle cx=\"13\" cy=\"12\" r=\"2\" />\n  <circle cx=\"20\" cy=\"19\" r=\"2\" />",
  "git-pull-request": "<circle cx=\"18\" cy=\"18\" r=\"3\" />\n  <circle cx=\"6\" cy=\"6\" r=\"3\" />\n  <path d=\"M13 6h3a2 2 0 0 1 2 2v7\" />\n  <line x1=\"6\" x2=\"6\" y1=\"9\" y2=\"21\" />",
  "loader": "<path d=\"M12 2v4\" />\n  <path d=\"m16.2 7.8 2.9-2.9\" />\n  <path d=\"M18 12h4\" />\n  <path d=\"m16.2 16.2 2.9 2.9\" />\n  <path d=\"M12 18v4\" />\n  <path d=\"m4.9 19.1 2.9-2.9\" />\n  <path d=\"M2 12h4\" />\n  <path d=\"m4.9 4.9 2.9 2.9\" />"
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/src/icons.js", error: String((e && e.message) || e) }); }

// export/src/screens.jsx
try { (() => {
// ── Commit Briefing UI kit — screens ───────────────────────────────
function fmtDate(s) {
  const [y, m, d] = s.split('-');
  return `${d}/${m}/${y}`;
}
function Kpi({
  title,
  value,
  desc,
  status = 'neutral',
  icon,
  trend,
  trendValue,
  pulse
}) {
  const sm = ['good', 'warning', 'critical'].includes(status) ? status : '';
  const TG = {
    up: '▲',
    down: '▼',
    neutral: '—'
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "kpi"
  }, pulse && /*#__PURE__*/React.createElement("span", {
    className: "kpi__pulse"
  }), /*#__PURE__*/React.createElement("div", {
    className: "kpi__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kpi__title"
  }, title), /*#__PURE__*/React.createElement("span", {
    className: ['kpi__chip', sm ? `kpi__chip--${sm}` : ''].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: icon,
    size: 15
  }))), /*#__PURE__*/React.createElement("div", {
    className: ['kpi__val', sm ? `kpi__val--${sm}` : ''].filter(Boolean).join(' ')
  }, value), /*#__PURE__*/React.createElement("div", {
    className: "kpi__foot"
  }, trend && /*#__PURE__*/React.createElement("span", {
    className: `kpi__trend kpi__trend--${trend}`
  }, TG[trend], " ", trendValue), desc && /*#__PURE__*/React.createElement("span", {
    className: "kpi__desc"
  }, desc)));
}
function KpiStrip({
  b
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "kpis"
  }, /*#__PURE__*/React.createElement(Kpi, {
    title: "Velocidade de Entrega",
    value: b.dora.cycleTime.value,
    desc: b.dora.cycleTime.description,
    status: "good",
    icon: "clock",
    trend: "up",
    trendValue: "Est\xE1vel"
  }), /*#__PURE__*/React.createElement(Kpi, {
    title: "Risco de Pessoa-Chave",
    value: b.dora.busFactor.topContributorPercentage + '%',
    desc: `${b.dora.busFactor.topContributor}`,
    status: "critical",
    icon: "users"
  }), /*#__PURE__*/React.createElement(Kpi, {
    title: "Ritmo de Entregas",
    value: b.dora.deployFrequency.value,
    desc: "PRs mergeados",
    status: "good",
    icon: "rocket",
    trend: "up",
    trendValue: "Em dia"
  }), /*#__PURE__*/React.createElement(Kpi, {
    title: "Alerta de Toil",
    value: b.dora.toil.value,
    desc: `Esforço em ${b.dora.toil.category}`,
    status: "warning",
    icon: "zap"
  }), /*#__PURE__*/React.createElement(Kpi, {
    title: "Sa\xFAde do Projeto",
    value: b.health.score,
    desc: `${b.risks.filter(r => r.severity === 'critical').length} crítico · ${b.risks.filter(r => r.severity === 'high').length} alto`,
    status: "critical",
    icon: "shield",
    pulse: true
  }));
}
function ProjectDashboard({
  project,
  onGenerate,
  onOpenBriefing
}) {
  const b = window.CB_DATA.briefing.worc;
  const period = `${fmtDate(b.period.start)} — ${fmtDate(b.period.end)}`;
  return /*#__PURE__*/React.createElement("div", {
    className: "page anim-up"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ph"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, project.name, /*#__PURE__*/React.createElement(window.Badge, {
    variant: "outline",
    mono: true
  }, /*#__PURE__*/React.createElement(window.Brand, {
    name: project.stackIcon,
    size: 14
  }), project.stack)), /*#__PURE__*/React.createElement("p", {
    className: "sub mono"
  }, b.totalCommits, " commits \xB7 ", b.totalTasks, " tasks \xB7 ", period)), /*#__PURE__*/React.createElement("div", {
    className: "actions"
  }, /*#__PURE__*/React.createElement(window.Btn, {
    variant: "ghost",
    size: "sm",
    icon: "settings",
    onClick: () => window.__nav('settings')
  }, "Configura\xE7\xF5es"), /*#__PURE__*/React.createElement(window.Btn, {
    variant: "outline",
    size: "sm",
    icon: "refresh-cw",
    onClick: onGenerate
  }, "Gerar Briefing"), /*#__PURE__*/React.createElement(window.Btn, {
    variant: "primary",
    icon: "file-text",
    onClick: onOpenBriefing
  }, "Ver Briefing"))), /*#__PURE__*/React.createElement(KpiStrip, {
    b: b
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid2"
  }, /*#__PURE__*/React.createElement(window.EffortChart, {
    data: b.effort
  }), /*#__PURE__*/React.createElement(window.ComparisonChart, {
    data: b.comparison
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid2"
  }, /*#__PURE__*/React.createElement(window.RiskRadar, {
    risks: b.risks,
    onOpen: onOpenBriefing
  }), /*#__PURE__*/React.createElement(window.AgentSummary, {
    summary: b.summary,
    provider: b.llmProvider,
    period: period
  })));
}
function BriefingDetail({
  project,
  onBack
}) {
  const b = window.CB_DATA.briefing.worc;
  const [tab, setTab] = React.useState('tasks');
  const period = `${fmtDate(b.period.start)} — ${fmtDate(b.period.end)}`;
  const cats = {};
  b.tasks.forEach(t => {
    cats[t.category] = (cats[t.category] || 0) + 1;
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "page anim-up"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ph"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(window.Btn, {
    variant: "ghost",
    size: "icon",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "arrow-left",
    size: 17
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 22
    }
  }, "Mapeamento de Atividades \u2014 ", project.name), /*#__PURE__*/React.createElement("p", {
    className: "sub",
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 5,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "calendar",
    size: 14
  }), /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, period)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 5,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "file-text",
    size: 14
  }), b.totalTasks, " tasks \xB7 ", b.totalCommits, " commits")))), /*#__PURE__*/React.createElement("div", {
    className: "actions"
  }, /*#__PURE__*/React.createElement(window.Btn, {
    variant: "outline",
    size: "sm",
    icon: "share-2"
  }, "Compartilhar"), /*#__PURE__*/React.createElement(window.Btn, {
    variant: "outline",
    size: "sm",
    icon: "download"
  }, "Exportar"))), /*#__PURE__*/React.createElement(window.AgentSummary, {
    summary: b.summary,
    provider: b.llmProvider,
    period: period
  }), /*#__PURE__*/React.createElement(KpiStrip, {
    b: b
  }), /*#__PURE__*/React.createElement(window.Tabs, {
    value: tab,
    onChange: setTab
  }, /*#__PURE__*/React.createElement(window.TabsList, null, /*#__PURE__*/React.createElement(window.TabsT, {
    value: "tasks"
  }, "Vis\xE3o Consolidada"), /*#__PURE__*/React.createElement(window.TabsT, {
    value: "risks"
  }, "Riscos (", b.risks.length, ")"), /*#__PURE__*/React.createElement(window.TabsT, {
    value: "dist"
  }, "Distribui\xE7\xE3o"), /*#__PURE__*/React.createElement(window.TabsT, {
    value: "md"
  }, "Relat\xF3rio MD"))), tab === 'tasks' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid4"
  }, Object.entries(cats).map(([c, n]) => /*#__PURE__*/React.createElement(window.Card, {
    key: c
  }, /*#__PURE__*/React.createElement("div", {
    className: "card__b",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--muted-foreground)'
    }
  }, c), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--muted-foreground)',
      marginTop: 4
    }
  }, b.effort.find(e => e.name === c)?.value ?? 0, "% do esfor\xE7o")), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 26,
      fontWeight: 700
    }
  }, n))))), /*#__PURE__*/React.createElement(window.Card, null, /*#__PURE__*/React.createElement("div", {
    className: "card__b",
    style: {
      paddingTop: 6,
      paddingBottom: 6
    }
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Task"), /*#__PURE__*/React.createElement("th", null, "T\xEDtulo"), /*#__PURE__*/React.createElement("th", null, "Categoria"), /*#__PURE__*/React.createElement("th", null, "Autor"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "Commits"))), /*#__PURE__*/React.createElement("tbody", null, b.tasks.map(t => /*#__PURE__*/React.createElement("tr", {
    key: t.id
  }, /*#__PURE__*/React.createElement("td", {
    className: "id"
  }, t.id), /*#__PURE__*/React.createElement("td", null, t.title), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(window.Badge, {
    variant: "secondary"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 9,
      background: window.EFFORT_COLORS[t.category]
    }
  }), t.category)), /*#__PURE__*/React.createElement("td", {
    style: {
      color: 'var(--muted-foreground)'
    }
  }, t.author), /*#__PURE__*/React.createElement("td", {
    className: "mono",
    style: {
      textAlign: 'right'
    }
  }, t.commits)))))))), tab === 'risks' && /*#__PURE__*/React.createElement(window.Card, null, /*#__PURE__*/React.createElement("div", {
    className: "card__b"
  }, b.risks.map(r => /*#__PURE__*/React.createElement("div", {
    className: "risk",
    key: r.id
  }, /*#__PURE__*/React.createElement("span", {
    className: `risk__bar risk__bar--${r.severity}`
  }), /*#__PURE__*/React.createElement("div", {
    className: "risk__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "risk__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "risk__title"
  }, r.title), /*#__PURE__*/React.createElement(window.Status, {
    status: r.severity === 'high' ? 'high' : r.severity
  }, window.SEV_LABEL[r.severity])), /*#__PURE__*/React.createElement("div", {
    className: "risk__detail"
  }, r.detail), /*#__PURE__*/React.createElement("div", {
    className: "risk__area"
  }, "\xC1rea: ", r.area)))))), tab === 'dist' && /*#__PURE__*/React.createElement("div", {
    className: "grid2"
  }, /*#__PURE__*/React.createElement(window.EffortChart, {
    data: b.effort
  }), /*#__PURE__*/React.createElement(window.Card, null, /*#__PURE__*/React.createElement(window.CardH, {
    title: "Pontos-Chave do Per\xEDodo",
    desc: "Insights do agente sobre aloca\xE7\xE3o"
  }), /*#__PURE__*/React.createElement("div", {
    className: "card__b",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, [{
    c: '#b45309',
    t: `Período concentrou 48% do esforço em Features, com cycle time de ${b.dora.cycleTime.value}.`
  }, {
    c: '#dc2626',
    t: '1 risco crítico e 1 alto detectados — exigem ação no próximo ciclo.'
  }, {
    c: '#b45309',
    t: `Bus factor 1 (${b.dora.busFactor.topContributor} = ${b.dora.busFactor.topContributorPercentage}%) somado a toil de ${b.dora.toil.value}.`
  }].map((x, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 8,
      fontSize: 13,
      color: 'var(--foreground)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: x.c
    }
  }, "\u2022"), /*#__PURE__*/React.createElement("span", null, x.t)))))), tab === 'md' && /*#__PURE__*/React.createElement(window.Card, null, /*#__PURE__*/React.createElement("div", {
    className: "card__b",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      lineHeight: 1.7,
      color: 'var(--foreground)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, "# Mapeamento de Atividades \u2014 ", project.name), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--muted-foreground)',
      marginTop: 8
    }
  }, "## Resumo Executivo"), b.summary.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginTop: 4
    }
  }, "- ", s)), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--muted-foreground)',
      marginTop: 12
    }
  }, "## M\xE9tricas DORA"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, "- Cycle time: ", /*#__PURE__*/React.createElement("b", null, b.dora.cycleTime.value), " \xB7 Deploy: ", /*#__PURE__*/React.createElement("b", null, b.dora.deployFrequency.value), " \xB7 Toil: ", /*#__PURE__*/React.createElement("b", null, b.dora.toil.value)))));
}
Object.assign(window, {
  ProjectDashboard,
  BriefingDetail,
  Kpi,
  KpiStrip,
  fmtDate
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/src/screens.jsx", error: String((e && e.message) || e) }); }

// export/src/settings.jsx
try { (() => {
// ── Commit Briefing UI kit — settings & notifications ──────────────
function ApiKeyField({
  label,
  placeholder,
  hint
}) {
  const [show, setShow] = React.useState(false);
  const [val, setVal] = React.useState('');
  return /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "input input--mono",
    type: show ? 'text' : 'password',
    placeholder: placeholder,
    value: val,
    onChange: e => setVal(e.target.value),
    style: {
      paddingRight: 38
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShow(!show),
    style: {
      position: 'absolute',
      right: 10,
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--muted-foreground)'
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: show ? 'eye-off' : 'eye',
    size: 16
  }))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--muted-foreground)'
    }
  }, hint));
}
function SettingsScreen() {
  const [forge, setForge] = React.useState('github');
  const [pr, setPr] = React.useState(true);
  const [ci, setCi] = React.useState(true);
  const [tested, setTested] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "page page--narrow anim-up"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ph"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Configura\xE7\xF5es"), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, "Gerencie integra\xE7\xF5es, chaves de API e prefer\xEAncias"))), /*#__PURE__*/React.createElement(window.Card, null, /*#__PURE__*/React.createElement(window.CardH, {
    title: "Reposit\xF3rio",
    desc: "Fonte de c\xF3digo para an\xE1lise do briefing"
  }), /*#__PURE__*/React.createElement("div", {
    className: "card__b",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Plataforma"), /*#__PURE__*/React.createElement(window.Tabs, {
    value: forge,
    onChange: setForge
  }, /*#__PURE__*/React.createElement(window.TabsList, null, /*#__PURE__*/React.createElement(window.TabsT, {
    value: "github"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(window.Brand, {
    name: "github",
    size: 14
  }), "GitHub")), /*#__PURE__*/React.createElement(window.TabsT, {
    value: "azure"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(window.Brand, {
    name: "azuredevops",
    size: 14
  }), "Azure DevOps"))))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "URL do Reposit\xF3rio (clone HTTPS)"), /*#__PURE__*/React.createElement("input", {
    className: "input input--mono",
    defaultValue: forge === 'github' ? 'https://github.com/nicebyte/worc.git' : 'https://dev.azure.com/nicebyte/Worc/_git/worc'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Branch"), /*#__PURE__*/React.createElement("input", {
    className: "input",
    defaultValue: "main"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Stack"), /*#__PURE__*/React.createElement("div", {
    className: "input",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(window.Brand, {
    name: "dotnet",
    size: 16
  }), ".NET 8 + SQL Server"))), /*#__PURE__*/React.createElement(window.ApiKeyField, {
    label: "Personal Access Token (PAT)",
    placeholder: "ghp_...",
    hint: "Permiss\xF5es: repo, read:org."
  }), /*#__PURE__*/React.createElement("hr", {
    className: "sep"
  }), /*#__PURE__*/React.createElement("div", {
    className: "srow"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, "Enriquecimento de PRs"), /*#__PURE__*/React.createElement("div", {
    className: "d"
  }, "Inclui dados de Pull Requests na an\xE1lise")), /*#__PURE__*/React.createElement(window.Switch, {
    on: pr,
    onChange: setPr
  })), /*#__PURE__*/React.createElement("div", {
    className: "srow",
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, "Estat\xEDsticas de CI"), /*#__PURE__*/React.createElement("div", {
    className: "d"
  }, "Coleta m\xE9tricas de GitHub Actions")), /*#__PURE__*/React.createElement(window.Switch, {
    on: ci,
    onChange: setCi
  })))), /*#__PURE__*/React.createElement(window.Card, null, /*#__PURE__*/React.createElement(window.CardH, {
    title: "Configura\xE7\xE3o de LLM",
    desc: "Chaves de API para os modelos de linguagem"
  }), /*#__PURE__*/React.createElement("div", {
    className: "card__b",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(window.Brand, {
    name: "gemini",
    size: 20
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14
    }
  }, "Google Gemini"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--muted-foreground)'
    }
  }, "2.5 Flash \xB7 Recomendado"))), /*#__PURE__*/React.createElement(window.Badge, {
    variant: "secondary"
  }, "Principal")), /*#__PURE__*/React.createElement(window.ApiKeyField, {
    label: "API Key",
    placeholder: "AIza...",
    hint: "Obtenha em Google AI Studio."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(window.Btn, {
    variant: "outline",
    size: "sm",
    onClick: () => setTested(true)
  }, "Testar Conex\xE3o"), tested && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 5,
      alignItems: 'center',
      fontSize: 12,
      color: '#059669'
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "check",
    size: 14
  }), "Conectado"))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(window.Brand, {
    name: "openai",
    size: 20
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14
    }
  }, "OpenAI"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--muted-foreground)'
    }
  }, "GPT-4o \xB7 Fallback"))), /*#__PURE__*/React.createElement(window.ApiKeyField, {
    label: "API Key",
    placeholder: "sk-...",
    hint: "Obtenha em platform.openai.com."
  })))), /*#__PURE__*/React.createElement(window.Card, null, /*#__PURE__*/React.createElement(window.CardH, {
    title: "Integra\xE7\xF5es",
    desc: "Reposit\xF3rios e canais conectados"
  }), /*#__PURE__*/React.createElement("div", {
    className: "card__b",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "intg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "intg__logo",
    style: {
      background: 'var(--foreground)'
    }
  }, /*#__PURE__*/React.createElement(window.Brand, {
    name: "github",
    size: 20,
    white: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14
    }
  }, "GitHub"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--muted-foreground)'
    }
  }, "Conectado via Personal Access Token")), /*#__PURE__*/React.createElement(window.Status, {
    status: "good"
  }, "Conectado")), /*#__PURE__*/React.createElement("div", {
    className: "intg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "intg__logo",
    style: {
      background: '#611f69'
    }
  }, /*#__PURE__*/React.createElement(window.Brand, {
    name: "slack",
    size: 20,
    white: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14
    }
  }, "Slack"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--muted-foreground)'
    }
  }, "Receba alertas no seu canal")), /*#__PURE__*/React.createElement(window.Btn, {
    variant: "outline",
    size: "sm"
  }, "Conectar")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(window.Btn, {
    variant: "primary",
    icon: "check"
  }, "Salvar Altera\xE7\xF5es")));
}
const NOTIF_CFG = {
  briefing_done: {
    ic: 'circle-check-big',
    c: '#059669',
    bg: 'rgb(16 185 129/.1)'
  },
  risk_critical: {
    ic: 'alert-triangle',
    c: '#dc2626',
    bg: 'rgb(239 68 68/.1)'
  },
  risk_high: {
    ic: 'alert-triangle',
    c: '#b45309',
    bg: 'rgb(245 158 11/.1)'
  },
  toil_alert: {
    ic: 'zap',
    c: '#ea580c',
    bg: 'rgb(249 115 22/.1)'
  },
  info: {
    ic: 'info',
    c: '#2563eb',
    bg: 'rgb(59 130 246/.1)'
  }
};
function NotificationsScreen() {
  const [items, setItems] = React.useState(window.CB_DATA.notifications);
  const [prefs, setPrefs] = React.useState({
    briefing: true,
    risks: true,
    digest: false
  });
  const unread = items.filter(n => !n.read).length;
  const markRead = id => setItems(items.map(n => n.id === id ? {
    ...n,
    read: true
  } : n));
  const markAll = () => setItems(items.map(n => ({
    ...n,
    read: true
  })));
  return /*#__PURE__*/React.createElement("div", {
    className: "page page--narrow anim-up"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ph"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Notifica\xE7\xF5es"), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, unread > 0 ? `${unread} não lidas` : 'Tudo em dia')), unread > 0 && /*#__PURE__*/React.createElement(window.Btn, {
    variant: "outline",
    size: "sm",
    icon: "bell-off",
    onClick: markAll
  }, "Marcar todas como lidas")), /*#__PURE__*/React.createElement(window.Card, null, /*#__PURE__*/React.createElement(window.CardH, {
    title: /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        gap: 8,
        alignItems: 'center'
      }
    }, "Recentes"),
    right: unread > 0 ? /*#__PURE__*/React.createElement(window.Badge, {
      variant: "secondary"
    }, unread) : null
  }), /*#__PURE__*/React.createElement("div", {
    className: "card__b",
    style: {
      padding: 8
    }
  }, items.map(n => {
    const cfg = NOTIF_CFG[n.type] || NOTIF_CFG.info;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      className: "notif",
      "data-unread": !n.read,
      onClick: () => markRead(n.id)
    }, /*#__PURE__*/React.createElement("span", {
      className: "notif__ic",
      style: {
        background: cfg.bg,
        color: cfg.c
      }
    }, /*#__PURE__*/React.createElement(window.Icon, {
      name: cfg.ic,
      size: 16
    })), /*#__PURE__*/React.createElement("span", {
      className: "notif__body"
    }, /*#__PURE__*/React.createElement("span", {
      className: "notif__title",
      style: {
        color: n.read ? 'var(--muted-foreground)' : 'var(--foreground)'
      }
    }, n.title), /*#__PURE__*/React.createElement("span", {
      className: "notif__sub"
    }, n.body)), !n.read && /*#__PURE__*/React.createElement("span", {
      className: "notif__unread"
    }), /*#__PURE__*/React.createElement("span", {
      className: "notif__ago"
    }, n.ago));
  }))), /*#__PURE__*/React.createElement(window.Card, null, /*#__PURE__*/React.createElement(window.CardH, {
    title: "Prefer\xEAncias de e-mail",
    desc: "Controle quais notifica\xE7\xF5es voc\xEA recebe por e-mail."
  }), /*#__PURE__*/React.createElement("div", {
    className: "card__b",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, [{
    k: 'briefing',
    t: 'Briefing gerado',
    d: 'Receba o PDF quando um briefing for processado.'
  }, {
    k: 'risks',
    t: 'Riscos críticos',
    d: 'Alertas imediatos quando riscos críticos forem detectados.'
  }, {
    k: 'digest',
    t: 'Resumo semanal',
    d: 'Digest consolidado toda segunda-feira.'
  }].map(p => /*#__PURE__*/React.createElement("div", {
    className: "srow",
    key: p.k
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, p.t), /*#__PURE__*/React.createElement("div", {
    className: "d"
  }, p.d)), /*#__PURE__*/React.createElement(window.Switch, {
    on: prefs[p.k],
    onChange: v => setPrefs({
      ...prefs,
      [p.k]: v
    })
  }))))));
}
Object.assign(window, {
  SettingsScreen,
  NotificationsScreen,
  ApiKeyField
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/src/settings.jsx", error: String((e && e.message) || e) }); }

// export/src/ui.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// ── Commit Briefing UI kit — primitives ────────────────────────────
const {
  useState,
  useEffect,
  createContext,
  useContext
} = React;

// Icon: inline lucide SVG (inherits currentColor, no external DOM mutation)
function Icon({
  name,
  size = 16,
  className = '',
  style
}) {
  const inner = window.CB_ICONS && window.CB_ICONS[name] || '';
  return /*#__PURE__*/React.createElement("svg", {
    className: 'ico ' + className,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style,
    dangerouslySetInnerHTML: {
      __html: inner
    }
  });
}

// Brand/stack icon as <img> (inlined data-URI dictionary — bundle-safe)
function Brand({
  name,
  size = 18,
  white = false,
  style
}) {
  const key = name + (white ? '-white' : '');
  const src = window.CB_BRAND && window.CB_BRAND[key] || '';
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    width: size,
    height: size,
    style: style,
    alt: ""
  });
}
function Btn({
  variant = 'primary',
  size,
  icon,
  children,
  ...p
}) {
  const cls = ['btn', `btn--${variant}`, size === 'sm' ? 'btn--sm' : '', size === 'icon' ? 'btn--icon' : ''].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls
  }, p), icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 15
  }), children);
}
function Card({
  className = '',
  children,
  ...p
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: 'card ' + className
  }, p), children);
}
function CardH({
  title,
  desc,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "card__h",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, title), desc && /*#__PURE__*/React.createElement("p", null, desc)), right);
}
function Badge({
  variant = 'outline',
  mono,
  children,
  ...p
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['badge', `badge--${variant}`, mono ? 'badge--mono' : ''].filter(Boolean).join(' ')
  }, p), children);
}
function Status({
  status,
  dot = true,
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `status status--${status}`
  }, dot && /*#__PURE__*/React.createElement("span", {
    className: "d"
  }), children);
}
function Avatar({
  fallback,
  size
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: ['av', size ? `av--${size}` : ''].filter(Boolean).join(' ')
  }, fallback);
}
function Switch({
  on,
  onChange
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: "sw",
    "data-on": on ? 'true' : 'false',
    onClick: () => onChange(!on)
  }, /*#__PURE__*/React.createElement("span", {
    className: "thumb"
  }));
}

// Tabs
const TabCtx = createContext(null);
function Tabs({
  value,
  onChange,
  children
}) {
  return /*#__PURE__*/React.createElement(TabCtx.Provider, {
    value: {
      value,
      onChange
    }
  }, children);
}
function TabsList({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tabs__list"
  }, children);
}
function TabsT({
  value,
  children
}) {
  const ctx = useContext(TabCtx);
  return /*#__PURE__*/React.createElement("button", {
    className: "tabs__t",
    "data-active": ctx.value === value,
    onClick: () => ctx.onChange(value)
  }, children);
}
Object.assign(window, {
  Icon,
  Brand,
  Btn,
  Card,
  CardH,
  Badge,
  Status,
  Avatar,
  Switch,
  Tabs,
  TabsList,
  TabsT
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/src/ui.jsx", error: String((e && e.message) || e) }); }

// ui_kits/commit-briefing/app.jsx
try { (() => {
// ── Commit Briefing UI kit — app shell & routing ───────────────────
function App() {
  const D = window.CB_DATA;
  const [projectId, setProjectId] = React.useState('worc');
  const [route, setRoute] = React.useState('dashboard');
  const [toast, setToast] = React.useState(null);
  const project = D.projects.find(p => p.id === projectId);
  const unread = D.notifications.filter(n => !n.read).length;
  React.useEffect(() => {
    window.__nav = setRoute;
  }, []);
  const nav = r => setRoute(r);
  const selectProject = id => {
    setProjectId(id);
    setRoute('dashboard');
  };
  const generate = () => {
    setToast('Briefing em processamento. Você receberá o e-mail em breve.');
    setTimeout(() => setToast(null), 3200);
  };
  const crumb = route === 'dashboard' ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, project.name), " \xB7 Dashboard") : route === 'briefing' ? /*#__PURE__*/React.createElement("span", null, project.name, " \xB7 ", /*#__PURE__*/React.createElement("b", null, "Briefing")) : route === 'settings' ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Configura\xE7\xF5es")) : /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Notifica\xE7\xF5es"));
  return /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, /*#__PURE__*/React.createElement(window.Sidebar, {
    projectId: projectId,
    route: route,
    onSelectProject: selectProject,
    onNav: nav
  }), /*#__PURE__*/React.createElement("div", {
    className: "main"
  }, /*#__PURE__*/React.createElement(window.Header, {
    crumb: crumb,
    unread: unread,
    onBell: () => nav('notifications')
  }), /*#__PURE__*/React.createElement("div", {
    className: "scroll"
  }, route === 'dashboard' && /*#__PURE__*/React.createElement(window.ProjectDashboard, {
    project: project,
    onGenerate: generate,
    onOpenBriefing: () => nav('briefing')
  }), route === 'briefing' && /*#__PURE__*/React.createElement(window.BriefingDetail, {
    project: project,
    onBack: () => nav('dashboard')
  }), route === 'settings' && /*#__PURE__*/React.createElement(window.SettingsScreen, null), route === 'notifications' && /*#__PURE__*/React.createElement(window.NotificationsScreen, null))), toast && /*#__PURE__*/React.createElement("div", {
    className: "toast"
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "loader",
    size: 16,
    className: "cursor-blink"
  }), toast));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/commit-briefing/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/commit-briefing/data.js
try { (() => {
// ── Commit Briefing — UI kit mock data (nicebyte org) ──────────────
window.CB_DATA = {
  user: {
    name: 'Maria Andrade',
    email: 'maria@nicebyte.dev',
    role: 'Admin'
  },
  org: {
    name: 'nicebyte'
  },
  projects: [{
    id: 'worc',
    name: 'Worc',
    stack: '.NET 8 + SQL Server',
    stackIcon: 'dotnet',
    status: 'healthy'
  }, {
    id: 'atlas-app',
    name: 'Atlas App',
    stack: 'React Expo + Supabase',
    stackIcon: 'react',
    status: 'warning'
  }, {
    id: 'painel-web',
    name: 'Painel Web',
    stack: 'Next.js + Supabase',
    stackIcon: 'nextdotjs',
    status: 'healthy'
  }, {
    id: 'ingestor',
    name: 'Ingestor',
    stack: 'Python',
    stackIcon: 'python',
    status: 'critical'
  }],
  // Keyed by project id
  briefing: {
    worc: {
      id: 'br-worc-2406',
      period: {
        start: '2026-05-19',
        end: '2026-06-02'
      },
      previousPeriod: {
        start: '2026-05-05',
        end: '2026-05-19'
      },
      totalCommits: 142,
      totalTasks: 38,
      llmProvider: 'gemini-2.5-flash',
      dora: {
        cycleTime: {
          value: '2.4d',
          status: 'good',
          description: 'Tempo médio por task'
        },
        busFactor: {
          topContributor: 'M. Andrade',
          topContributorPercentage: 92,
          status: 'critical'
        },
        deployFrequency: {
          value: '7/sem',
          status: 'good'
        },
        toil: {
          value: '34%',
          category: 'Infra/DevOps',
          threshold: 25,
          status: 'warning'
        }
      },
      health: {
        score: 62,
        status: 'critical'
      },
      effort: [{
        name: 'Feature',
        value: 48
      }, {
        name: 'Infra/DevOps',
        value: 34
      }, {
        name: 'Tech Debt',
        value: 11
      }, {
        name: 'Bug Fix',
        value: 7
      }],
      comparison: [{
        name: 'Feature',
        cur: 48,
        prev: 61
      }, {
        name: 'Infra/DevOps',
        cur: 34,
        prev: 19
      }, {
        name: 'Tech Debt',
        cur: 11,
        prev: 14
      }, {
        name: 'Bug Fix',
        cur: 7,
        prev: 6
      }],
      summary: ['Cadência saudável: 142 commits distribuídos em 7 PRs mergeados no período.', 'Atenção: 92% dos commits concentrados em M. Andrade — bus factor 1.', 'Toil em 34%, acima do limite de 25% — automação de migrations devolveria tempo a Features.'],
      risks: [{
        id: 'r1',
        severity: 'critical',
        title: 'Bus factor 1 em módulo de billing',
        detail: '92% dos commits do core de cobrança vêm de um único autor. Saída impacta produção.',
        area: 'Conhecimento'
      }, {
        id: 'r2',
        severity: 'high',
        title: 'Toil acima do limite',
        detail: 'Infra/DevOps consumiu 34% do esforço (limite 25%). Migrations manuais recorrentes.',
        area: 'Operação'
      }, {
        id: 'r3',
        severity: 'medium',
        title: 'Cobertura de testes em queda',
        detail: 'PRs recentes adicionam endpoints sem testes de integração.',
        area: 'Qualidade'
      }, {
        id: 'r4',
        severity: 'low',
        title: 'Branch main sem proteção de CI obrigatório',
        detail: 'Merges possíveis sem checks verdes em alguns casos.',
        area: 'Processo'
      }],
      tasks: [{
        id: 'WRC-412',
        title: 'Endpoint de faturamento recorrente',
        category: 'Feature',
        author: 'M. Andrade',
        commits: 23
      }, {
        id: 'WRC-418',
        title: 'Migração de schema billing v3',
        category: 'Infra/DevOps',
        author: 'M. Andrade',
        commits: 17
      }, {
        id: 'WRC-401',
        title: 'Corrigir cálculo de impostos',
        category: 'Bug Fix',
        author: 'J. Pereira',
        commits: 6
      }, {
        id: 'WRC-420',
        title: 'Refatorar repositório de pedidos',
        category: 'Tech Debt',
        author: 'L. Souza',
        commits: 9
      }, {
        id: 'WRC-422',
        title: 'Webhook de status de pagamento',
        category: 'Feature',
        author: 'M. Andrade',
        commits: 14
      }, {
        id: 'WRC-415',
        title: 'Pipeline de deploy para staging',
        category: 'Infra/DevOps',
        author: 'L. Souza',
        commits: 11
      }]
    }
  },
  notifications: [{
    id: 'n1',
    type: 'briefing_done',
    title: 'Briefing gerado — Worc',
    body: 'Período 19/05 — 02/06 processado. PDF enviado por e-mail.',
    read: false,
    ago: 'há 12min'
  }, {
    id: 'n2',
    type: 'risk_critical',
    title: 'Risco crítico em Worc',
    body: 'Bus factor 1 detectado no módulo de billing.',
    read: false,
    ago: 'há 1h'
  }, {
    id: 'n3',
    type: 'toil_alert',
    title: 'Toil acima do limite — Worc',
    body: 'Infra/DevOps em 34% (limite 25%).',
    read: false,
    ago: 'há 1h'
  }, {
    id: 'n4',
    type: 'risk_high',
    title: 'Cobertura em queda — Atlas App',
    body: 'PRs recentes sem testes de integração.',
    read: true,
    ago: 'há 3h'
  }, {
    id: 'n5',
    type: 'briefing_done',
    title: 'Briefing gerado — Painel Web',
    body: 'Período 12/05 — 26/05 processado.',
    read: true,
    ago: 'ontem'
  }, {
    id: 'n6',
    type: 'info',
    title: 'Integração Slack disponível',
    body: 'Conecte um canal para receber alertas em tempo real.',
    read: true,
    ago: 'há 2d'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/commit-briefing/data.js", error: String((e && e.message) || e) }); }

// ui_kits/commit-briefing/features.jsx
try { (() => {
// ── Commit Briefing UI kit — feature widgets ───────────────────────
const EFFORT_COLORS = {
  'Feature': 'var(--chart-1)',
  'Infra/DevOps': 'var(--chart-2)',
  'Tech Debt': 'var(--chart-3)',
  'Bug Fix': 'var(--chart-4)'
};
function Sidebar({
  projectId,
  route,
  onSelectProject,
  onNav
}) {
  const D = window.CB_DATA;
  return /*#__PURE__*/React.createElement("aside", {
    className: "sb"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sb__brand"
  }, /*#__PURE__*/React.createElement("img", {
    className: "sb__mark",
    src: "../../assets/logo-mark.svg",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "sb__wm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, "Commit Briefing"), /*#__PURE__*/React.createElement("div", {
    className: "s"
  }, "DevOps Intelligence"))), /*#__PURE__*/React.createElement("div", {
    className: "sb__sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sb__label"
  }, "Projetos"), D.projects.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    className: "sb__item",
    "data-active": route === 'dashboard' && projectId === p.id,
    onClick: () => onSelectProject(p.id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico"
  }, /*#__PURE__*/React.createElement(window.Brand, {
    name: p.stackIcon,
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    className: "nm"
  }, p.name), /*#__PURE__*/React.createElement("span", {
    className: `sb__dot sb__dot--${p.status}`
  })))), /*#__PURE__*/React.createElement("div", {
    className: "sb__sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sb__label"
  }, "Conta"), /*#__PURE__*/React.createElement("button", {
    className: "sb__item",
    "data-active": route === 'notifications',
    onClick: () => onNav('notifications')
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "bell",
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    className: "nm"
  }, "Notifica\xE7\xF5es"), /*#__PURE__*/React.createElement("span", {
    className: "sb__dot sb__dot--critical"
  })), /*#__PURE__*/React.createElement("button", {
    className: "sb__item",
    "data-active": route === 'settings',
    onClick: () => onNav('settings')
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "settings",
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    className: "nm"
  }, "Configura\xE7\xF5es"))), /*#__PURE__*/React.createElement("div", {
    className: "sb__spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sb__user"
  }, /*#__PURE__*/React.createElement(window.Avatar, {
    fallback: "M"
  }), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, D.user.name), /*#__PURE__*/React.createElement("div", {
    className: "e"
  }, D.user.email))));
}
function Header({
  crumb,
  unread,
  onBell
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "hdr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hdr__crumb"
  }, crumb), /*#__PURE__*/React.createElement("div", {
    className: "hdr__spacer"
  }), /*#__PURE__*/React.createElement("button", {
    className: "hdr__icon",
    title: "Buscar"
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "search",
    size: 17
  })), /*#__PURE__*/React.createElement("button", {
    className: "hdr__icon",
    title: "Tema"
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "sun",
    size: 17
  })), /*#__PURE__*/React.createElement("button", {
    className: "hdr__icon",
    title: "Notifica\xE7\xF5es",
    onClick: onBell
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "bell",
    size: 17
  }), unread > 0 && /*#__PURE__*/React.createElement("span", {
    className: "hdr__badge"
  }, unread)));
}
function EffortChart({
  data
}) {
  return /*#__PURE__*/React.createElement(window.Card, null, /*#__PURE__*/React.createElement(window.CardH, {
    title: "Distribui\xE7\xE3o de Esfor\xE7o",
    desc: "Como o time investiu o per\xEDodo"
  }), /*#__PURE__*/React.createElement("div", {
    className: "card__b"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bars"
  }, data.map(d => /*#__PURE__*/React.createElement("div", {
    className: "barrow",
    key: d.name
  }, /*#__PURE__*/React.createElement("span", {
    className: "lab"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sw",
    style: {
      background: EFFORT_COLORS[d.name]
    }
  }), d.name), /*#__PURE__*/React.createElement("span", {
    className: "track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fill",
    style: {
      width: d.value + '%',
      background: EFFORT_COLORS[d.name]
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "pct"
  }, d.value, "%"))))));
}
function ComparisonChart({
  data
}) {
  return /*#__PURE__*/React.createElement(window.Card, null, /*#__PURE__*/React.createElement(window.CardH, {
    title: "Compara\xE7\xE3o com Per\xEDodo Anterior",
    desc: "Varia\xE7\xE3o na aloca\xE7\xE3o de esfor\xE7o"
  }), /*#__PURE__*/React.createElement("div", {
    className: "card__b"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cmp"
  }, data.map(d => {
    const delta = d.cur - d.prev;
    return /*#__PURE__*/React.createElement("div", {
      className: "cmprow",
      key: d.name
    }, /*#__PURE__*/React.createElement("div", {
      className: "top"
    }, /*#__PURE__*/React.createElement("span", null, d.name), /*#__PURE__*/React.createElement("span", {
      className: 'delta ' + (delta >= 0 ? 'delta--up' : 'delta--down')
    }, delta >= 0 ? '+' : '', delta, "pp")), /*#__PURE__*/React.createElement("div", {
      className: "dual"
    }, /*#__PURE__*/React.createElement("span", {
      className: "t"
    }, /*#__PURE__*/React.createElement("span", {
      className: "f",
      style: {
        width: d.prev + '%',
        background: 'var(--line)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      className: "t"
    }, /*#__PURE__*/React.createElement("span", {
      className: "f",
      style: {
        width: d.cur + '%',
        background: EFFORT_COLORS[d.name]
      }
    }))));
  }))));
}
const SEV_LABEL = {
  critical: 'Crítico',
  high: 'Alto',
  medium: 'Médio',
  low: 'Baixo'
};
function RiskRadar({
  risks,
  onOpen
}) {
  const counts = ['critical', 'high', 'medium', 'low'].map(s => ({
    s,
    n: risks.filter(r => r.severity === s).length
  }));
  return /*#__PURE__*/React.createElement(window.Card, null, /*#__PURE__*/React.createElement(window.CardH, {
    title: "Radar de Riscos",
    desc: `${risks.length} riscos detectados pelo agente`,
    right: /*#__PURE__*/React.createElement(window.Btn, {
      variant: "ghost",
      size: "sm",
      onClick: onOpen
    }, "Ver todos", /*#__PURE__*/React.createElement(window.Icon, {
      name: "chevron-right",
      size: 15
    }))
  }), /*#__PURE__*/React.createElement("div", {
    className: "card__b"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 14,
      flexWrap: 'wrap'
    }
  }, counts.map(c => /*#__PURE__*/React.createElement(window.Status, {
    key: c.s,
    status: c.s === 'high' ? 'high' : c.s,
    dot: true
  }, c.n, " ", SEV_LABEL[c.s]))), /*#__PURE__*/React.createElement("div", null, risks.slice(0, 3).map(r => /*#__PURE__*/React.createElement("div", {
    className: "risk",
    key: r.id
  }, /*#__PURE__*/React.createElement("span", {
    className: `risk__bar risk__bar--${r.severity}`
  }), /*#__PURE__*/React.createElement("div", {
    className: "risk__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "risk__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "risk__title"
  }, r.title)), /*#__PURE__*/React.createElement("div", {
    className: "risk__detail"
  }, r.detail)))))));
}
function AgentSummary({
  summary,
  provider,
  period
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "card terminal-warm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "term"
  }, /*#__PURE__*/React.createElement("div", {
    className: "term__h"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "Resumo do Agente"), /*#__PURE__*/React.createElement("span", {
    className: "prov"
  }, provider)), summary.map((line, i) => /*#__PURE__*/React.createElement("div", {
    className: "term__line",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "\u203A"), /*#__PURE__*/React.createElement("span", null, line, i === summary.length - 1 && /*#__PURE__*/React.createElement("span", {
    className: "term__cur cursor-blink"
  }))))));
}
Object.assign(window, {
  Sidebar,
  Header,
  EffortChart,
  ComparisonChart,
  RiskRadar,
  AgentSummary,
  SEV_LABEL,
  EFFORT_COLORS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/commit-briefing/features.jsx", error: String((e && e.message) || e) }); }

// ui_kits/commit-briefing/icons.js
try { (() => {
window.CB_ICONS = {
  "clock": "<circle cx=\"12\" cy=\"12\" r=\"10\" />\n  <path d=\"M12 6v6l4 2\" />",
  "users": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\" />\n  <path d=\"M16 3.128a4 4 0 0 1 0 7.744\" />\n  <path d=\"M22 21v-2a4 4 0 0 0-3-3.87\" />\n  <circle cx=\"9\" cy=\"7\" r=\"4\" />",
  "rocket": "<path d=\"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5\" />\n  <path d=\"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09\" />\n  <path d=\"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z\" />\n  <path d=\"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05\" />",
  "zap": "<path d=\"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z\" />",
  "shield": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\" />",
  "layout-grid": "<rect width=\"7\" height=\"7\" x=\"3\" y=\"3\" rx=\"1\" />\n  <rect width=\"7\" height=\"7\" x=\"14\" y=\"3\" rx=\"1\" />\n  <rect width=\"7\" height=\"7\" x=\"14\" y=\"14\" rx=\"1\" />\n  <rect width=\"7\" height=\"7\" x=\"3\" y=\"14\" rx=\"1\" />",
  "bell": "<path d=\"M10.268 21a2 2 0 0 0 3.464 0\" />\n  <path d=\"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326\" />",
  "bell-off": "<path d=\"M10.268 21a2 2 0 0 0 3.464 0\" />\n  <path d=\"M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742\" />\n  <path d=\"m2 2 20 20\" />\n  <path d=\"M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05\" />",
  "settings": "<path d=\"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915\" />\n  <circle cx=\"12\" cy=\"12\" r=\"3\" />",
  "user": "<path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\" />\n  <circle cx=\"12\" cy=\"7\" r=\"4\" />",
  "file-text": "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\" />\n  <path d=\"M14 2v5a1 1 0 0 0 1 1h5\" />\n  <path d=\"M10 9H8\" />\n  <path d=\"M16 13H8\" />\n  <path d=\"M16 17H8\" />",
  "chevron-right": "<path d=\"m9 18 6-6-6-6\" />",
  "chevron-down": "<path d=\"m6 9 6 6 6-6\" />",
  "arrow-left": "<path d=\"m12 19-7-7 7-7\" />\n  <path d=\"M19 12H5\" />",
  "plus": "<path d=\"M5 12h14\" />\n  <path d=\"M12 5v14\" />",
  "download": "<path d=\"M12 15V3\" />\n  <path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\" />\n  <path d=\"m7 10 5 5 5-5\" />",
  "share-2": "<circle cx=\"18\" cy=\"5\" r=\"3\" />\n  <circle cx=\"6\" cy=\"12\" r=\"3\" />\n  <circle cx=\"18\" cy=\"19\" r=\"3\" />\n  <line x1=\"8.59\" x2=\"15.42\" y1=\"13.51\" y2=\"17.49\" />\n  <line x1=\"15.41\" x2=\"8.59\" y1=\"6.51\" y2=\"10.49\" />",
  "calendar": "<path d=\"M8 2v4\" />\n  <path d=\"M16 2v4\" />\n  <rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\" />\n  <path d=\"M3 10h18\" />",
  "check": "<path d=\"M20 6 9 17l-5-5\" />",
  "check-check": "<path d=\"M18 6 7 17l-5-5\" />\n  <path d=\"m22 10-7.5 7.5L13 16\" />",
  "alert-triangle": "<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\" />\n  <path d=\"M12 9v4\" />\n  <path d=\"M12 17h.01\" />",
  "circle-check-big": "<path d=\"M21.801 10A10 10 0 1 1 17 3.335\" />\n  <path d=\"m9 11 3 3L22 4\" />",
  "info": "<circle cx=\"12\" cy=\"12\" r=\"10\" />\n  <path d=\"M12 16v-4\" />\n  <path d=\"M12 8h.01\" />",
  "mail": "<path d=\"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7\" />\n  <rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\" />",
  "message-square": "<path d=\"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z\" />",
  "eye": "<path d=\"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0\" />\n  <circle cx=\"12\" cy=\"12\" r=\"3\" />",
  "eye-off": "<path d=\"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49\" />\n  <path d=\"M14.084 14.158a3 3 0 0 1-4.242-4.242\" />\n  <path d=\"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143\" />\n  <path d=\"m2 2 20 20\" />",
  "trash-2": "<path d=\"M10 11v6\" />\n  <path d=\"M14 11v6\" />\n  <path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6\" />\n  <path d=\"M3 6h18\" />\n  <path d=\"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\" />",
  "search": "<path d=\"m21 21-4.34-4.34\" />\n  <circle cx=\"11\" cy=\"11\" r=\"8\" />",
  "sun": "<circle cx=\"12\" cy=\"12\" r=\"4\" />\n  <path d=\"M12 2v2\" />\n  <path d=\"M12 20v2\" />\n  <path d=\"m4.93 4.93 1.41 1.41\" />\n  <path d=\"m17.66 17.66 1.41 1.41\" />\n  <path d=\"M2 12h2\" />\n  <path d=\"M20 12h2\" />\n  <path d=\"m6.34 17.66-1.41 1.41\" />\n  <path d=\"m19.07 4.93-1.41 1.41\" />",
  "moon": "<path d=\"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401\" />",
  "external-link": "<path d=\"M15 3h6v6\" />\n  <path d=\"M10 14 21 3\" />\n  <path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\" />",
  "refresh-cw": "<path d=\"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8\" />\n  <path d=\"M21 3v5h-5\" />\n  <path d=\"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16\" />\n  <path d=\"M8 16H3v5\" />",
  "folder-git-2": "<path d=\"M18 19a5 5 0 0 1-5-5v8\" />\n  <path d=\"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5\" />\n  <circle cx=\"13\" cy=\"12\" r=\"2\" />\n  <circle cx=\"20\" cy=\"19\" r=\"2\" />",
  "git-pull-request": "<circle cx=\"18\" cy=\"18\" r=\"3\" />\n  <circle cx=\"6\" cy=\"6\" r=\"3\" />\n  <path d=\"M13 6h3a2 2 0 0 1 2 2v7\" />\n  <line x1=\"6\" x2=\"6\" y1=\"9\" y2=\"21\" />",
  "loader": "<path d=\"M12 2v4\" />\n  <path d=\"m16.2 7.8 2.9-2.9\" />\n  <path d=\"M18 12h4\" />\n  <path d=\"m16.2 16.2 2.9 2.9\" />\n  <path d=\"M12 18v4\" />\n  <path d=\"m4.9 19.1 2.9-2.9\" />\n  <path d=\"M2 12h4\" />\n  <path d=\"m4.9 4.9 2.9 2.9\" />"
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/commit-briefing/icons.js", error: String((e && e.message) || e) }); }

// ui_kits/commit-briefing/screens.jsx
try { (() => {
// ── Commit Briefing UI kit — screens ───────────────────────────────
function fmtDate(s) {
  const [y, m, d] = s.split('-');
  return `${d}/${m}/${y}`;
}
function Kpi({
  title,
  value,
  desc,
  status = 'neutral',
  icon,
  trend,
  trendValue,
  pulse
}) {
  const sm = ['good', 'warning', 'critical'].includes(status) ? status : '';
  const TG = {
    up: '▲',
    down: '▼',
    neutral: '—'
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "kpi"
  }, pulse && /*#__PURE__*/React.createElement("span", {
    className: "kpi__pulse"
  }), /*#__PURE__*/React.createElement("div", {
    className: "kpi__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kpi__title"
  }, title), /*#__PURE__*/React.createElement("span", {
    className: ['kpi__chip', sm ? `kpi__chip--${sm}` : ''].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: icon,
    size: 15
  }))), /*#__PURE__*/React.createElement("div", {
    className: ['kpi__val', sm ? `kpi__val--${sm}` : ''].filter(Boolean).join(' ')
  }, value), /*#__PURE__*/React.createElement("div", {
    className: "kpi__foot"
  }, trend && /*#__PURE__*/React.createElement("span", {
    className: `kpi__trend kpi__trend--${trend}`
  }, TG[trend], " ", trendValue), desc && /*#__PURE__*/React.createElement("span", {
    className: "kpi__desc"
  }, desc)));
}
function KpiStrip({
  b
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "kpis"
  }, /*#__PURE__*/React.createElement(Kpi, {
    title: "Velocidade de Entrega",
    value: b.dora.cycleTime.value,
    desc: b.dora.cycleTime.description,
    status: "good",
    icon: "clock",
    trend: "up",
    trendValue: "Est\xE1vel"
  }), /*#__PURE__*/React.createElement(Kpi, {
    title: "Risco de Pessoa-Chave",
    value: b.dora.busFactor.topContributorPercentage + '%',
    desc: `${b.dora.busFactor.topContributor}`,
    status: "critical",
    icon: "users"
  }), /*#__PURE__*/React.createElement(Kpi, {
    title: "Ritmo de Entregas",
    value: b.dora.deployFrequency.value,
    desc: "PRs mergeados",
    status: "good",
    icon: "rocket",
    trend: "up",
    trendValue: "Em dia"
  }), /*#__PURE__*/React.createElement(Kpi, {
    title: "Alerta de Toil",
    value: b.dora.toil.value,
    desc: `Esforço em ${b.dora.toil.category}`,
    status: "warning",
    icon: "zap"
  }), /*#__PURE__*/React.createElement(Kpi, {
    title: "Sa\xFAde do Projeto",
    value: b.health.score,
    desc: `${b.risks.filter(r => r.severity === 'critical').length} crítico · ${b.risks.filter(r => r.severity === 'high').length} alto`,
    status: "critical",
    icon: "shield",
    pulse: true
  }));
}
function ProjectDashboard({
  project,
  onGenerate,
  onOpenBriefing
}) {
  const b = window.CB_DATA.briefing.worc;
  const period = `${fmtDate(b.period.start)} — ${fmtDate(b.period.end)}`;
  return /*#__PURE__*/React.createElement("div", {
    className: "page anim-up"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ph"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, project.name, /*#__PURE__*/React.createElement(window.Badge, {
    variant: "outline",
    mono: true
  }, /*#__PURE__*/React.createElement(window.Brand, {
    name: project.stackIcon,
    size: 14
  }), project.stack)), /*#__PURE__*/React.createElement("p", {
    className: "sub mono"
  }, b.totalCommits, " commits \xB7 ", b.totalTasks, " tasks \xB7 ", period)), /*#__PURE__*/React.createElement("div", {
    className: "actions"
  }, /*#__PURE__*/React.createElement(window.Btn, {
    variant: "ghost",
    size: "sm",
    icon: "settings",
    onClick: () => window.__nav('settings')
  }, "Configura\xE7\xF5es"), /*#__PURE__*/React.createElement(window.Btn, {
    variant: "outline",
    size: "sm",
    icon: "refresh-cw",
    onClick: onGenerate
  }, "Gerar Briefing"), /*#__PURE__*/React.createElement(window.Btn, {
    variant: "primary",
    icon: "file-text",
    onClick: onOpenBriefing
  }, "Ver Briefing"))), /*#__PURE__*/React.createElement(KpiStrip, {
    b: b
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid2"
  }, /*#__PURE__*/React.createElement(window.EffortChart, {
    data: b.effort
  }), /*#__PURE__*/React.createElement(window.ComparisonChart, {
    data: b.comparison
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid2"
  }, /*#__PURE__*/React.createElement(window.RiskRadar, {
    risks: b.risks,
    onOpen: onOpenBriefing
  }), /*#__PURE__*/React.createElement(window.AgentSummary, {
    summary: b.summary,
    provider: b.llmProvider,
    period: period
  })));
}
function BriefingDetail({
  project,
  onBack
}) {
  const b = window.CB_DATA.briefing.worc;
  const [tab, setTab] = React.useState('tasks');
  const period = `${fmtDate(b.period.start)} — ${fmtDate(b.period.end)}`;
  const cats = {};
  b.tasks.forEach(t => {
    cats[t.category] = (cats[t.category] || 0) + 1;
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "page anim-up"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ph"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(window.Btn, {
    variant: "ghost",
    size: "icon",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "arrow-left",
    size: 17
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 22
    }
  }, "Mapeamento de Atividades \u2014 ", project.name), /*#__PURE__*/React.createElement("p", {
    className: "sub",
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 5,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "calendar",
    size: 14
  }), /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, period)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 5,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "file-text",
    size: 14
  }), b.totalTasks, " tasks \xB7 ", b.totalCommits, " commits")))), /*#__PURE__*/React.createElement("div", {
    className: "actions"
  }, /*#__PURE__*/React.createElement(window.Btn, {
    variant: "outline",
    size: "sm",
    icon: "share-2"
  }, "Compartilhar"), /*#__PURE__*/React.createElement(window.Btn, {
    variant: "outline",
    size: "sm",
    icon: "download"
  }, "Exportar"))), /*#__PURE__*/React.createElement(window.AgentSummary, {
    summary: b.summary,
    provider: b.llmProvider,
    period: period
  }), /*#__PURE__*/React.createElement(KpiStrip, {
    b: b
  }), /*#__PURE__*/React.createElement(window.Tabs, {
    value: tab,
    onChange: setTab
  }, /*#__PURE__*/React.createElement(window.TabsList, null, /*#__PURE__*/React.createElement(window.TabsT, {
    value: "tasks"
  }, "Vis\xE3o Consolidada"), /*#__PURE__*/React.createElement(window.TabsT, {
    value: "risks"
  }, "Riscos (", b.risks.length, ")"), /*#__PURE__*/React.createElement(window.TabsT, {
    value: "dist"
  }, "Distribui\xE7\xE3o"), /*#__PURE__*/React.createElement(window.TabsT, {
    value: "md"
  }, "Relat\xF3rio MD"))), tab === 'tasks' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid4"
  }, Object.entries(cats).map(([c, n]) => /*#__PURE__*/React.createElement(window.Card, {
    key: c
  }, /*#__PURE__*/React.createElement("div", {
    className: "card__b",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--muted-foreground)'
    }
  }, c), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--muted-foreground)',
      marginTop: 4
    }
  }, b.effort.find(e => e.name === c)?.value ?? 0, "% do esfor\xE7o")), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 26,
      fontWeight: 700
    }
  }, n))))), /*#__PURE__*/React.createElement(window.Card, null, /*#__PURE__*/React.createElement("div", {
    className: "card__b",
    style: {
      paddingTop: 6,
      paddingBottom: 6
    }
  }, /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Task"), /*#__PURE__*/React.createElement("th", null, "T\xEDtulo"), /*#__PURE__*/React.createElement("th", null, "Categoria"), /*#__PURE__*/React.createElement("th", null, "Autor"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "Commits"))), /*#__PURE__*/React.createElement("tbody", null, b.tasks.map(t => /*#__PURE__*/React.createElement("tr", {
    key: t.id
  }, /*#__PURE__*/React.createElement("td", {
    className: "id"
  }, t.id), /*#__PURE__*/React.createElement("td", null, t.title), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(window.Badge, {
    variant: "secondary"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 9,
      background: window.EFFORT_COLORS[t.category]
    }
  }), t.category)), /*#__PURE__*/React.createElement("td", {
    style: {
      color: 'var(--muted-foreground)'
    }
  }, t.author), /*#__PURE__*/React.createElement("td", {
    className: "mono",
    style: {
      textAlign: 'right'
    }
  }, t.commits)))))))), tab === 'risks' && /*#__PURE__*/React.createElement(window.Card, null, /*#__PURE__*/React.createElement("div", {
    className: "card__b"
  }, b.risks.map(r => /*#__PURE__*/React.createElement("div", {
    className: "risk",
    key: r.id
  }, /*#__PURE__*/React.createElement("span", {
    className: `risk__bar risk__bar--${r.severity}`
  }), /*#__PURE__*/React.createElement("div", {
    className: "risk__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "risk__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "risk__title"
  }, r.title), /*#__PURE__*/React.createElement(window.Status, {
    status: r.severity === 'high' ? 'high' : r.severity
  }, window.SEV_LABEL[r.severity])), /*#__PURE__*/React.createElement("div", {
    className: "risk__detail"
  }, r.detail), /*#__PURE__*/React.createElement("div", {
    className: "risk__area"
  }, "\xC1rea: ", r.area)))))), tab === 'dist' && /*#__PURE__*/React.createElement("div", {
    className: "grid2"
  }, /*#__PURE__*/React.createElement(window.EffortChart, {
    data: b.effort
  }), /*#__PURE__*/React.createElement(window.Card, null, /*#__PURE__*/React.createElement(window.CardH, {
    title: "Pontos-Chave do Per\xEDodo",
    desc: "Insights do agente sobre aloca\xE7\xE3o"
  }), /*#__PURE__*/React.createElement("div", {
    className: "card__b",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, [{
    c: '#b45309',
    t: `Período concentrou 48% do esforço em Features, com cycle time de ${b.dora.cycleTime.value}.`
  }, {
    c: '#dc2626',
    t: '1 risco crítico e 1 alto detectados — exigem ação no próximo ciclo.'
  }, {
    c: '#b45309',
    t: `Bus factor 1 (${b.dora.busFactor.topContributor} = ${b.dora.busFactor.topContributorPercentage}%) somado a toil de ${b.dora.toil.value}.`
  }].map((x, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 8,
      fontSize: 13,
      color: 'var(--foreground)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: x.c
    }
  }, "\u2022"), /*#__PURE__*/React.createElement("span", null, x.t)))))), tab === 'md' && /*#__PURE__*/React.createElement(window.Card, null, /*#__PURE__*/React.createElement("div", {
    className: "card__b",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      lineHeight: 1.7,
      color: 'var(--foreground)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, "# Mapeamento de Atividades \u2014 ", project.name), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--muted-foreground)',
      marginTop: 8
    }
  }, "## Resumo Executivo"), b.summary.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginTop: 4
    }
  }, "- ", s)), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--muted-foreground)',
      marginTop: 12
    }
  }, "## M\xE9tricas DORA"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, "- Cycle time: ", /*#__PURE__*/React.createElement("b", null, b.dora.cycleTime.value), " \xB7 Deploy: ", /*#__PURE__*/React.createElement("b", null, b.dora.deployFrequency.value), " \xB7 Toil: ", /*#__PURE__*/React.createElement("b", null, b.dora.toil.value)))));
}
Object.assign(window, {
  ProjectDashboard,
  BriefingDetail,
  Kpi,
  KpiStrip,
  fmtDate
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/commit-briefing/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/commit-briefing/settings.jsx
try { (() => {
// ── Commit Briefing UI kit — settings & notifications ──────────────
function ApiKeyField({
  label,
  placeholder,
  hint
}) {
  const [show, setShow] = React.useState(false);
  const [val, setVal] = React.useState('');
  return /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "input input--mono",
    type: show ? 'text' : 'password',
    placeholder: placeholder,
    value: val,
    onChange: e => setVal(e.target.value),
    style: {
      paddingRight: 38
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShow(!show),
    style: {
      position: 'absolute',
      right: 10,
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--muted-foreground)'
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: show ? 'eye-off' : 'eye',
    size: 16
  }))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--muted-foreground)'
    }
  }, hint));
}
function SettingsScreen() {
  const [forge, setForge] = React.useState('github');
  const [pr, setPr] = React.useState(true);
  const [ci, setCi] = React.useState(true);
  const [tested, setTested] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "page page--narrow anim-up"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ph"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Configura\xE7\xF5es"), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, "Gerencie integra\xE7\xF5es, chaves de API e prefer\xEAncias"))), /*#__PURE__*/React.createElement(window.Card, null, /*#__PURE__*/React.createElement(window.CardH, {
    title: "Reposit\xF3rio",
    desc: "Fonte de c\xF3digo para an\xE1lise do briefing"
  }), /*#__PURE__*/React.createElement("div", {
    className: "card__b",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Plataforma"), /*#__PURE__*/React.createElement(window.Tabs, {
    value: forge,
    onChange: setForge
  }, /*#__PURE__*/React.createElement(window.TabsList, null, /*#__PURE__*/React.createElement(window.TabsT, {
    value: "github"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(window.Brand, {
    name: "github",
    size: 14
  }), "GitHub")), /*#__PURE__*/React.createElement(window.TabsT, {
    value: "azure"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(window.Brand, {
    name: "azuredevops",
    size: 14
  }), "Azure DevOps"))))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "URL do Reposit\xF3rio (clone HTTPS)"), /*#__PURE__*/React.createElement("input", {
    className: "input input--mono",
    defaultValue: forge === 'github' ? 'https://github.com/nicebyte/worc.git' : 'https://dev.azure.com/nicebyte/Worc/_git/worc'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Branch"), /*#__PURE__*/React.createElement("input", {
    className: "input",
    defaultValue: "main"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Stack"), /*#__PURE__*/React.createElement("div", {
    className: "input",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(window.Brand, {
    name: "dotnet",
    size: 16
  }), ".NET 8 + SQL Server"))), /*#__PURE__*/React.createElement(window.ApiKeyField, {
    label: "Personal Access Token (PAT)",
    placeholder: "ghp_...",
    hint: "Permiss\xF5es: repo, read:org."
  }), /*#__PURE__*/React.createElement("hr", {
    className: "sep"
  }), /*#__PURE__*/React.createElement("div", {
    className: "srow"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, "Enriquecimento de PRs"), /*#__PURE__*/React.createElement("div", {
    className: "d"
  }, "Inclui dados de Pull Requests na an\xE1lise")), /*#__PURE__*/React.createElement(window.Switch, {
    on: pr,
    onChange: setPr
  })), /*#__PURE__*/React.createElement("div", {
    className: "srow",
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, "Estat\xEDsticas de CI"), /*#__PURE__*/React.createElement("div", {
    className: "d"
  }, "Coleta m\xE9tricas de GitHub Actions")), /*#__PURE__*/React.createElement(window.Switch, {
    on: ci,
    onChange: setCi
  })))), /*#__PURE__*/React.createElement(window.Card, null, /*#__PURE__*/React.createElement(window.CardH, {
    title: "Configura\xE7\xE3o de LLM",
    desc: "Chaves de API para os modelos de linguagem"
  }), /*#__PURE__*/React.createElement("div", {
    className: "card__b",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(window.Brand, {
    name: "gemini",
    size: 20
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14
    }
  }, "Google Gemini"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--muted-foreground)'
    }
  }, "2.5 Flash \xB7 Recomendado"))), /*#__PURE__*/React.createElement(window.Badge, {
    variant: "secondary"
  }, "Principal")), /*#__PURE__*/React.createElement(window.ApiKeyField, {
    label: "API Key",
    placeholder: "AIza...",
    hint: "Obtenha em Google AI Studio."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(window.Btn, {
    variant: "outline",
    size: "sm",
    onClick: () => setTested(true)
  }, "Testar Conex\xE3o"), tested && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 5,
      alignItems: 'center',
      fontSize: 12,
      color: '#059669'
    }
  }, /*#__PURE__*/React.createElement(window.Icon, {
    name: "check",
    size: 14
  }), "Conectado"))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(window.Brand, {
    name: "openai",
    size: 20
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14
    }
  }, "OpenAI"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--muted-foreground)'
    }
  }, "GPT-4o \xB7 Fallback"))), /*#__PURE__*/React.createElement(window.ApiKeyField, {
    label: "API Key",
    placeholder: "sk-...",
    hint: "Obtenha em platform.openai.com."
  })))), /*#__PURE__*/React.createElement(window.Card, null, /*#__PURE__*/React.createElement(window.CardH, {
    title: "Integra\xE7\xF5es",
    desc: "Reposit\xF3rios e canais conectados"
  }), /*#__PURE__*/React.createElement("div", {
    className: "card__b",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "intg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "intg__logo",
    style: {
      background: 'var(--foreground)'
    }
  }, /*#__PURE__*/React.createElement(window.Brand, {
    name: "github",
    size: 20,
    white: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14
    }
  }, "GitHub"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--muted-foreground)'
    }
  }, "Conectado via Personal Access Token")), /*#__PURE__*/React.createElement(window.Status, {
    status: "good"
  }, "Conectado")), /*#__PURE__*/React.createElement("div", {
    className: "intg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "intg__logo",
    style: {
      background: '#611f69'
    }
  }, /*#__PURE__*/React.createElement(window.Brand, {
    name: "slack",
    size: 20,
    white: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14
    }
  }, "Slack"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--muted-foreground)'
    }
  }, "Receba alertas no seu canal")), /*#__PURE__*/React.createElement(window.Btn, {
    variant: "outline",
    size: "sm"
  }, "Conectar")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(window.Btn, {
    variant: "primary",
    icon: "check"
  }, "Salvar Altera\xE7\xF5es")));
}
const NOTIF_CFG = {
  briefing_done: {
    ic: 'circle-check-big',
    c: '#059669',
    bg: 'rgb(16 185 129/.1)'
  },
  risk_critical: {
    ic: 'alert-triangle',
    c: '#dc2626',
    bg: 'rgb(239 68 68/.1)'
  },
  risk_high: {
    ic: 'alert-triangle',
    c: '#b45309',
    bg: 'rgb(245 158 11/.1)'
  },
  toil_alert: {
    ic: 'zap',
    c: '#ea580c',
    bg: 'rgb(249 115 22/.1)'
  },
  info: {
    ic: 'info',
    c: '#2563eb',
    bg: 'rgb(59 130 246/.1)'
  }
};
function NotificationsScreen() {
  const [items, setItems] = React.useState(window.CB_DATA.notifications);
  const [prefs, setPrefs] = React.useState({
    briefing: true,
    risks: true,
    digest: false
  });
  const unread = items.filter(n => !n.read).length;
  const markRead = id => setItems(items.map(n => n.id === id ? {
    ...n,
    read: true
  } : n));
  const markAll = () => setItems(items.map(n => ({
    ...n,
    read: true
  })));
  return /*#__PURE__*/React.createElement("div", {
    className: "page page--narrow anim-up"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ph"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Notifica\xE7\xF5es"), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, unread > 0 ? `${unread} não lidas` : 'Tudo em dia')), unread > 0 && /*#__PURE__*/React.createElement(window.Btn, {
    variant: "outline",
    size: "sm",
    icon: "bell-off",
    onClick: markAll
  }, "Marcar todas como lidas")), /*#__PURE__*/React.createElement(window.Card, null, /*#__PURE__*/React.createElement(window.CardH, {
    title: /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        gap: 8,
        alignItems: 'center'
      }
    }, "Recentes"),
    right: unread > 0 ? /*#__PURE__*/React.createElement(window.Badge, {
      variant: "secondary"
    }, unread) : null
  }), /*#__PURE__*/React.createElement("div", {
    className: "card__b",
    style: {
      padding: 8
    }
  }, items.map(n => {
    const cfg = NOTIF_CFG[n.type] || NOTIF_CFG.info;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      className: "notif",
      "data-unread": !n.read,
      onClick: () => markRead(n.id)
    }, /*#__PURE__*/React.createElement("span", {
      className: "notif__ic",
      style: {
        background: cfg.bg,
        color: cfg.c
      }
    }, /*#__PURE__*/React.createElement(window.Icon, {
      name: cfg.ic,
      size: 16
    })), /*#__PURE__*/React.createElement("span", {
      className: "notif__body"
    }, /*#__PURE__*/React.createElement("span", {
      className: "notif__title",
      style: {
        color: n.read ? 'var(--muted-foreground)' : 'var(--foreground)'
      }
    }, n.title), /*#__PURE__*/React.createElement("span", {
      className: "notif__sub"
    }, n.body)), !n.read && /*#__PURE__*/React.createElement("span", {
      className: "notif__unread"
    }), /*#__PURE__*/React.createElement("span", {
      className: "notif__ago"
    }, n.ago));
  }))), /*#__PURE__*/React.createElement(window.Card, null, /*#__PURE__*/React.createElement(window.CardH, {
    title: "Prefer\xEAncias de e-mail",
    desc: "Controle quais notifica\xE7\xF5es voc\xEA recebe por e-mail."
  }), /*#__PURE__*/React.createElement("div", {
    className: "card__b",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, [{
    k: 'briefing',
    t: 'Briefing gerado',
    d: 'Receba o PDF quando um briefing for processado.'
  }, {
    k: 'risks',
    t: 'Riscos críticos',
    d: 'Alertas imediatos quando riscos críticos forem detectados.'
  }, {
    k: 'digest',
    t: 'Resumo semanal',
    d: 'Digest consolidado toda segunda-feira.'
  }].map(p => /*#__PURE__*/React.createElement("div", {
    className: "srow",
    key: p.k
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, p.t), /*#__PURE__*/React.createElement("div", {
    className: "d"
  }, p.d)), /*#__PURE__*/React.createElement(window.Switch, {
    on: prefs[p.k],
    onChange: v => setPrefs({
      ...prefs,
      [p.k]: v
    })
  }))))));
}
Object.assign(window, {
  SettingsScreen,
  NotificationsScreen,
  ApiKeyField
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/commit-briefing/settings.jsx", error: String((e && e.message) || e) }); }

// ui_kits/commit-briefing/ui.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// ── Commit Briefing UI kit — primitives ────────────────────────────
const {
  useState,
  useEffect,
  createContext,
  useContext
} = React;

// Icon: inline lucide SVG (inherits currentColor, no external DOM mutation)
function Icon({
  name,
  size = 16,
  className = '',
  style
}) {
  const inner = window.CB_ICONS && window.CB_ICONS[name] || '';
  return /*#__PURE__*/React.createElement("svg", {
    className: 'ico ' + className,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style,
    dangerouslySetInnerHTML: {
      __html: inner
    }
  });
}

// Brand/stack icon as <img>
function Brand({
  name,
  size = 18,
  white = false,
  style
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: `../../assets/brand-icons/${name}${white ? '-white' : ''}.svg`,
    width: size,
    height: size,
    style: style,
    alt: ""
  });
}
function Btn({
  variant = 'primary',
  size,
  icon,
  children,
  ...p
}) {
  const cls = ['btn', `btn--${variant}`, size === 'sm' ? 'btn--sm' : '', size === 'icon' ? 'btn--icon' : ''].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls
  }, p), icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 15
  }), children);
}
function Card({
  className = '',
  children,
  ...p
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: 'card ' + className
  }, p), children);
}
function CardH({
  title,
  desc,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "card__h",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, title), desc && /*#__PURE__*/React.createElement("p", null, desc)), right);
}
function Badge({
  variant = 'outline',
  mono,
  children,
  ...p
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['badge', `badge--${variant}`, mono ? 'badge--mono' : ''].filter(Boolean).join(' ')
  }, p), children);
}
function Status({
  status,
  dot = true,
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `status status--${status}`
  }, dot && /*#__PURE__*/React.createElement("span", {
    className: "d"
  }), children);
}
function Avatar({
  fallback,
  size
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: ['av', size ? `av--${size}` : ''].filter(Boolean).join(' ')
  }, fallback);
}
function Switch({
  on,
  onChange
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: "sw",
    "data-on": on ? 'true' : 'false',
    onClick: () => onChange(!on)
  }, /*#__PURE__*/React.createElement("span", {
    className: "thumb"
  }));
}

// Tabs
const TabCtx = createContext(null);
function Tabs({
  value,
  onChange,
  children
}) {
  return /*#__PURE__*/React.createElement(TabCtx.Provider, {
    value: {
      value,
      onChange
    }
  }, children);
}
function TabsList({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tabs__list"
  }, children);
}
function TabsT({
  value,
  children
}) {
  const ctx = useContext(TabCtx);
  return /*#__PURE__*/React.createElement("button", {
    className: "tabs__t",
    "data-active": ctx.value === value,
    onClick: () => ctx.onChange(value)
  }, children);
}
Object.assign(window, {
  Icon,
  Brand,
  Btn,
  Card,
  CardH,
  Badge,
  Status,
  Avatar,
  Switch,
  Tabs,
  TabsList,
  TabsT
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/commit-briefing/ui.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.KpiCard = __ds_scope.KpiCard;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.CardTitle = __ds_scope.CardTitle;

__ds_ns.CardDescription = __ds_scope.CardDescription;

__ds_ns.CardContent = __ds_scope.CardContent;

__ds_ns.CardFooter = __ds_scope.CardFooter;

__ds_ns.Separator = __ds_scope.Separator;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TabsList = __ds_scope.TabsList;

__ds_ns.TabsTrigger = __ds_scope.TabsTrigger;

__ds_ns.TabsContent = __ds_scope.TabsContent;

})();

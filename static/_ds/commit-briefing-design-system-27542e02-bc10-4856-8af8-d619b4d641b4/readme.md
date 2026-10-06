# Commit Briefing — Design System

A warm, editorial design system for **Commit Briefing**, a DevOps Intelligence product by the **nicebyte** organization. Commit Briefing connects to a team's Git forge (GitHub or Azure DevOps), analyzes commit + PR activity for a period, and generates an AI **briefing**: DORA-style delivery metrics, a risk radar, effort distribution charts, and an executive summary written by an LLM agent. The product is primarily in **Brazilian Portuguese (pt-BR)**.

This repository is the brand's single source of truth for color, type, spacing, iconography, reusable React primitives, and full-screen UI-kit recreations.

---

## Sources

- **Codebase:** Next.js App Router app, mounted at `app/` (read-only). Routes under `app/dashboard/**` (project dashboard, briefing detail, settings, profile, notifications) and API routes under `app/api/**`. Global theme extracted from `app/globals.css`.
- ⚠️ **Partial mount:** only the `app/` directory was attached. The product's `components/` (shadcn/ui + custom dashboard widgets), `lib/` (Supabase queries, mock data, `utils.ts`), and `public/` (logo/icon assets) folders were **not** accessible. Component APIs here were reconstructed faithfully from their usage in the page files; the wordmark is a placeholder. See **Caveats**.
- Original product metadata: `title: "Commit Briefing"`, `description: "DevOps Intelligence — Visualize métricas DORA, acompanhe entregas e identifique riscos automaticamente."`

---

## Content fundamentals

**Language & voice.** All product copy is **Brazilian Portuguese**. The tone is **professional, calm, and operational** — it speaks like a competent engineering-ops tool, never playful or salesy. It addresses the user implicitly (imperative/infinitive: "Gerencie seus projetos", "Selecionar branch", "Salvar Alterações") rather than with "você" pronouns. No first person.

**Casing.** Sentence case everywhere — page titles ("Mapeamento de Atividades", "Configurações do Projeto"), buttons ("Ver Briefing", "Salvar Alterações"), labels. Title Case appears only in proper product nouns. Tiny uppercase is reserved for micro-badges (`text-2xs`, wide tracking).

**Numbers & units.** Numbers are first-class — always set in JetBrains Mono with tabular figures and a slashed zero. Metrics carry compact units inline: `2.4d`, `7/sem` (per week), `92%`, dates as `dd/mm/aaaa`.

**Terminology.** Domain words stay in English where they're industry standard: *commit, branch, PR, merge, deploy, cycle time, bus factor, toil, stack, briefing*. Everything framing them is Portuguese. KPI names are translated to plain language: "Velocidade de Entrega" (cycle time), "Risco de Pessoa-Chave" (bus factor), "Ritmo de Entregas" (deploy frequency), "Alerta de Toil", "Saúde do Projeto".

**Microcopy patterns.** Helper text under inputs is one short sentence, often with a "Como gerar ↗" external link. Empty states are encouraging and instructive ("Nenhum briefing encontrado… Gere o primeiro briefing para visualizar métricas e insights."). Status confirmations are terse with a check ("Configurações salvas", "Conectado").

**Emoji:** none. The product never uses emoji. Signal is carried by colored Lucide icons and status badges.

---

## Visual foundations

**Overall vibe.** "Paper & espresso." Warm, analog, editorial — the antithesis of the cold blue SaaS dashboard. Unbleached-cream paper surfaces, walnut/caramel browns, and a permanently-dark warm-charcoal sidebar that anchors every screen. It feels like a well-printed operations report.

**Color.** Backgrounds are warm cream (`--background #f5f1e6`), cards a hair lighter (`--card #fffcf5`). Text is dark walnut (`--foreground #4a3f35`), never pure black. The brand is caramel (`--primary #a67c52`) with **copper `#c4956a`** as the app-wide accent (active nav, avatars, unread dots, KPI badges) — copper "glows" against the dark sidebar. Signal colors (emerald/amber/red/orange/blue) are used sparingly and only for status. The data-viz ramp is a single sequential walnut ramp (chart-1…5), not a rainbow.

**Type.** Inter for all UI (tight `-0.02em` tracking on headings, 14px body default). JetBrains Mono for every number, metric, code snippet, and monospace badge (tabular + slashed zero). Lora is a reserved serif accent for occasional editorial/quote moments. Weights: 400/500/600/700; 600 (semibold) is the heading weight, bold reserved for metric numerals.

**Spacing & layout.** 4px grid. `space-6` (24px) is the default card padding and vertical stack gap. Content columns are capped — dashboards ~80rem, forms/settings ~42rem (`max-w-2xl`). Fixed app chrome: a 256px dark sidebar + a 56px header; content scrolls beneath.

**Radius.** Tight and sharp — base radius is just **4px**. Inputs ~2px, buttons 4px, cards 8px, modals 12px. Pills/avatars/status-dots are fully round. The product reads precise, not bubbly.

**Borders.** Hairline, warm (`--border #dbd0ba`), often expressed as a `0 0 0 1px` inset ring rather than a drawn border. Dashed borders mark "connect me" / empty affordances.

**Elevation / shadows.** Soft, low-opacity, **espresso-tinted** (never gray). The signature is the **premium card**: a layered drop shadow *plus* a warm hairline ring (`--shadow-card`); on hover the ring shifts to copper and the card lifts 1px (`--shadow-card-hover`). No hard or neon shadows.

**Signature surfaces.** (1) `.card-premium` — the metric/content card described above. (2) `.terminal-warm` — the AI **AgentSummary** panel: a near-black espresso gradient with a copper inner-glow gradient border and a blinking copper cursor, evoking a friendly terminal.

**Backgrounds.** Flat warm color — **no** photographic imagery, no big gradients, no illustration washes, no repeating texture. The warmth lives in the palette, not in decoration.

**Motion.** Restrained and quick. `fade-up` (10px rise + fade, 0.4s, `cubic-bezier(0.22,1,0.36,1)`) for entering content; 0.22s ease for hover color/shadow; a slow `blink` only on the terminal cursor. All animation is disabled under `prefers-reduced-motion`.

**States.** Hover lightens/tints to `--muted` (ghost/outline) or shifts the fill one step (`--primary-hover`); cards lift + copper ring. Active/press nudges down ~0.5px. Focus is a 2px `--ring` (caramel) outline at 2px offset. Disabled is 50% opacity, no pointer.

**Iconography.** See below. The look is warm, flat, two-tone — colored Lucide line icons in tinted square chips for status; brand glyphs for integrations and stacks.

---

## Iconography

- **Primary UI icon set:** **Lucide** (`lucide-react` in the product). Clean 1.5–2px stroke line icons, used at 14–20px (`h-3.5`–`h-5`). Examples in use: `Clock, Users, Rocket, Zap, Shield, FileText, Settings, ChevronRight, ArrowLeft, Bell, Mail, Save, Check, Trash2, Plus, Loader2, AlertTriangle, CheckCircle2, Info`. In the UI kit these are loaded from the **Lucide CDN** (`lucide@latest`) — documented as a substitute for the bundled `lucide-react`, but identical glyphs.
- **Settings screen icons:** the product additionally uses **Remix Icon** (`@remixicon/react`) for a few settings rows (`RiKey2Line, RiRobot2Line, RiEyeLine`…). Treated as interchangeable line icons; the UI kit maps these to the closest Lucide equivalents.
- **Status icons** are placed inside small tinted square chips (`rounded-lg`, `bg-<color>/10`, `text-<color>`) — e.g. a red `AlertTriangle` on `bg-red-500/10`.
- **Brand / integration glyphs:** GitHub, Azure DevOps, Google Gemini, OpenAI, Slack, Supabase, plus stack glyphs (.NET, React, Expo, Next.js, Node.js, Python). The product ships these as custom brand SVGs in `components/icons/brands`. ⚠️ Those source files weren't accessible, so this system substitutes **Simple Icons** glyphs (matched per-brand color), stored in `assets/brand-icons/` with both colored and `-white` variants. Visually equivalent; flagged as a substitution.
- **Emoji / unicode:** none used as iconography. The only non-icon glyphs are bullet `•` separators and `›` chevrons in text.
- **Logo:** ⚠️ no logo asset was accessible. `assets/logo-mark.svg` is a **placeholder** git-commit mark (line–ring–line) paired with an Inter wordmark. Replace with the real asset when available.

---

## Index — what's in here

**Foundations**
- `styles.css` — global entry point (consumers link this). `@import`s only.
- `tokens/colors.css` · `tokens/typography.css` · `tokens/spacing.css` · `tokens/fonts.css` · `tokens/base.css`
- `guidelines/*.card.html` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `assets/fonts/` — Inter, JetBrains Mono, Lora (woff2). `assets/brand-icons/` — brand + stack SVGs. `assets/logo-mark.svg`.

**Components** (React; `window.CommitBriefingDesignSystem_27542e.<Name>`)
- `components/buttons/` — **Button**
- `components/badges/` — **Badge**, **StatusBadge**
- `components/forms/` — **Input**, **Switch**
- `components/data-display/` — **Card** (+ Header/Title/Description/Content/Footer), **Avatar**, **Separator**
- `components/navigation/` — **Tabs** (+ TabsList/TabsTrigger/TabsContent)
- `components/dashboard/` — **KpiCard**

**UI kits**
- `ui_kits/commit-briefing/` — interactive recreation of the Commit Briefing dashboard (sidebar shell, project dashboard, briefing detail, settings).

**Other**
- `SKILL.md` — Agent-Skill manifest for using this system in Claude Code.

---

## Caveats

1. **Partial codebase mount** — only `app/` was attached. `components/`, `lib/`, and `public/` were not reachable. Component visuals/APIs were reconstructed from page-level usage (high confidence) but not copied verbatim. Re-attach the repo root for byte-accurate primitives.
2. **Logo is a placeholder.** No brand logo file was available.
3. **Brand icons are Simple Icons substitutes** for the product's custom `brands` SVGs.
4. **Fonts** are the genuine open-source families (Inter / JetBrains Mono / Lora), self-hosted from Google Fonts — matching the product's `next/font` setup.

# Morah — Design System

**Morah** is the brand for an **NR1 psychosocial-risk assessment platform** used by Brazilian *técnicos de segurança do trabalho* (occupational-safety technicians). The técnico registers companies (*empresas*), structures them by *setor* and *cargo*, runs anonymized psychosocial evaluations (Copsoq II / HSE-IT instruments), and produces interpretation reports graded **Crítico / Atenção / Adequado**.

This repository is the **visual foundation** for that product: brand identity, design tokens, reusable React components, and a high-fidelity recreation of the técnico admin panel. It exists so design agents can produce on-brand Morah screens, mocks, and decks quickly. The backend is wired separately — this is the visual layer for stakeholder review.

> **Brand origin.** *Morah* plays on **amora** (Portuguese for blackberry). The chosen logo (provided by the founders, `uploads/pasted-1781211599704-0.png`) is a **circuit amora**: a blackberry outlined in deep plum whose inner drupelets form a **circuit-board trace with nodes** — fruit + technology/data. The wordmark is **MORAH** in widely-tracked uppercase. Logo ink is `--brand-ink #4B244D`.

---

## Sources used to build this system

- **Base app screenshots** — the técnico ("technician") version of the platform, currently white-labeled as *"Avalia NR1"* (deep-navy theme). Morah rebrands this surface to the blackberry identity. Screens captured: Visão Geral (dashboard), Termos Aceito, Empresas, Setor, Cargos, Campanhas, Relatórios, Link de Avaliação, Comparar Relatórios, Modelos de Apresentação.
- **GitHub — `4Him-Technology/Morah`** (https://github.com/4Him-Technology/Morah) — the product repo. It was **empty** at build time; the brand and system here were created from scratch per the brief. Re-explore it as it fills in.
- **GitHub — `4Him-Technology/oliveira`** (https://github.com/4Him-Technology/oliveira) — a sibling 4Him product (the *Oliveira* medical-services site). Useful only as parent-company context: it confirmed the house preference for **Plus Jakarta Sans + Manrope** typography, which Morah adopts.

> Readers with access can explore those repositories to build more accurately as the product evolves.

---

## Content fundamentals

The product UI is written in **Brazilian Portuguese**, in a **clear, institutional, reassuring** register — this is a compliance tool that handles sensitive mental-health data, so copy is precise and calm, never playful.

- **Tone:** professional, direct, supportive. Short labels; full-sentence helper text. Example empty state: *"Selecione uma empresa específica no dropdown acima para visualizar os relatórios salvos."*
- **Voice:** addresses the técnico in the imperative/neutral third person ("Selecione…", "Gerencie todas as empresas do sistema"). It does **not** use casual first person.
- **Casing:** Section titles are **Title Case** or sentence case ("Empresas Cadastradas", "Histórico de Avaliações"). Eyebrows and KPI labels are **UPPERCASE** with wide tracking ("TOTAL DE EMPRESAS"). Nav-group headers are uppercase ("NAVEGAÇÃO", "FERRAMENTAS").
- **Numbers & codes:** CNPJ, dates, and score ranges render in **monospace** (e.g. `12.811.039/0001-78`, `2.6 – 3.9`). Result bands always pair a label with its numeric range.
- **No emoji.** Iconography is line-based (Lucide). Status is communicated with the Crítico/Atenção/Adequado color language, never emoji.
- **Reassurance footer:** report surfaces close with *"Dados anônimos e agregados"* — anonymity is a recurring, deliberate message.

---

## Visual foundations

**Palette.** Primary is **blackberry purple** (`--berry-500 #A4459C`), deepening to near-black plum (`--berry-950 #1F0B20`) for the sidebar and header. The accent is **leaf green** (`--leaf-500 #3E9B63`) — the berry's calyx — reserved for confirmations, "online" dots, and positive emphasis. Neutrals are **plum-tinted grays** (a hint of purple in every gray) so the whole UI feels of-a-piece. Status uses three NR1 bands: **Crítico** (red `#E23D3D`), **Atenção** (amber `#F5B12E`), **Adequado** (green `#2EA86A`), plus an **info** blue for links/neutral states.

**Type.** Display = **Plus Jakarta Sans** (700–800) for headings, KPIs, and the wordmark — geometric and confident. Body/UI = **Manrope** (400–700). Data/codes = **JetBrains Mono**. Headings use tight tracking (`-0.02 to -0.04em`); uppercase eyebrows use wide tracking (`0.08em`).

**Backgrounds.** App canvas is a near-white plum-gray (`--gray-50`). The two signature surfaces are **dark**: the sidebar (vertical plum gradient `--gradient-sidebar`) and the page header (diagonal plum gradient `--gradient-header`) which has **rounded bottom corners** and a soft radial berry glow in the top-right. No photography in-app; the brand imagery is the berry mark itself.

**Cards.** White, `--radius-lg` (16px) corners, hairline `--border-subtle` border, and a soft **plum-tinted shadow** (`--shadow-card` — shadows carry `rgba(31,11,32,…)`, never neutral black). Interactive list/grid cards **lift 2px** and deepen their shadow on hover. KPI tiles drop the border for a **soft tint fill** (berry/blue/green/amber) with a faded watermark icon and a sparkline.

**Borders & radii.** Radii scale 6 → 28px; controls use 8–12px, cards 16px, the header 28px, chips/pills fully round. Borders are 1px and low-contrast; emphasis comes from fill and shadow, not heavy outlines.

**Buttons & states.** Primary = berry **gradient** fill. `dark` = deep plum (used for download/resource rows, matching the base app). `secondary` = white + border. `danger` = red. Hover **brightens** (`brightness(1.06)`); press **scales to 0.97**. Focus rings are a 3px berry-tinted halo (`--ring-focus`).

**Motion.** Quiet and quick. `--dur-fast 120ms` for hover/press, `--dur-base 200ms` for surfaces, easing `--ease-out cubic-bezier(.22,1,.36,1)`. No bounces, no infinite loops. Active sidebar items glow with a berry glass highlight + a 3px leading accent bar.

**Transparency & blur.** Used sparingly on dark surfaces — the company switcher and bell on the header are `rgba(255,255,255,0.06)` glass with a hairline white border. Sidebar active state layers translucent berry over the plum gradient.

---

## Iconography

- **Icon set: [Lucide](https://lucide.dev)** — loaded from CDN (`unpkg.com/lucide`). In React, ALWAYS render icons with the bundled `<Icon name="…" />` component — never call `lucide.createIcons()` inside a React tree (it mutates React-owned DOM and crashes re-renders). The base app's line icons (building, layers, briefcase, bar-chart, link, clipboard, bell) match Lucide's 2px-stroke geometric style almost exactly, so Lucide is the canonical set. *(Substitution flagged: the original app's exact icon font wasn't available; Lucide is the closest faithful match.)*
- **Usage:** 18px in nav and inline, ~17px inside buttons, 24px in empty-state rings, 76px as faded KPI watermarks. Stroke weight 2 (2.4 when a nav item is active). Render with `lucide.createIcons()` after React mounts and on every re-render.
- **No emoji, no custom hand-drawn SVG icons.** The single bespoke vector is the **brand mark** (`assets/morah-mark.png`) — the circuit amora.
- **Color:** icons inherit text color or use `--berry-500` for brand emphasis; status icons use the band colors.

---

## Repository index

**Foundations**
- `styles.css` — entry point (consumers link this). `@import`s everything below.
- `tokens/colors.css` · `typography.css` · `spacing.css` · `fonts.css` · `base.css`

**Assets**
- `assets/morah-mark.png` / `morah-mark-white.png` — the circuit-amora logomark (plum ink / white, transparent bg).
- `assets/morah-wordmark.png` / `morah-wordmark-white.png` — the MORAH wordmark.
- `assets/morah-logo-full.png` / `morah-logo-full-white.png` — full vertical lockup.

**Components** (`window.MorahDesignSystem_32f810.*`)
- `components/core/` — **Button, Badge, Avatar, Card, Icon** (React-safe Lucide renderer)
- `components/forms/` — **Input, Select**
- `components/data/` — **StatCard** (KPI tile + sparkline), **ResultBand** (NR1 band)
- `components/navigation/` — **Tabs, NavItem**

**UI kit**
- `ui_kits/tecnico/` — **Painel do Técnico**, an interactive recreation of the admin panel (Visão Geral, Empresas, Relatórios, Comparar, Modelos, Termos, + select-a-company empties). `index.html` is the entry; logic split across `Sidebar.jsx`, `Header.jsx`, `Screens.jsx`, `App.jsx`, `data.js`.

**Specimen cards** — `guidelines/*.card.html` populate the Design System tab (Brand, Colors, Type, Spacing).

**`SKILL.md`** — makes this system usable as a downloadable Claude Skill.

---

## Caveats

- **Fonts load from Google Fonts CDN**, not self-hosted binaries (see `tokens/fonts.css`). Swap for local `@font-face` woff2 in production.
- **The app is a rebrand of the técnico surface** seen in screenshots; the *empresa* (company-facing) version does not exist yet.

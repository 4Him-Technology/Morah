---
name: morah-design
description: Use this skill to generate well-branded interfaces and assets for Morah, the NR1 psychosocial-risk assessment platform for occupational-safety technicians, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, the amora (blackberry) brand identity, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick map
- **Brand & rules:** `readme.md` (content fundamentals, visual foundations, iconography).
- **Tokens:** `styles.css` → `tokens/` (colors, typography, spacing, fonts). Primary brand = `--berry-500`; accent = `--leaf-500`; NR1 bands = critical/warning/success.
- **Logo:** `assets/morah-mark.png` (+ `-white`), `assets/morah-wordmark.png`, `assets/morah-logo-full.png` — the circuit-amora mark chosen by the founders. Logo ink = `--brand-ink #4B244D`.
- **Components:** `components/**` — React (`window.MorahDesignSystem_32f810.*`): Button, Badge, Avatar, Card, Icon, Input, Select, StatCard, ResultBand, Tabs, NavItem.
- **Full screen reference:** `ui_kits/tecnico/` — the técnico admin panel, interactive.
- **Specimens:** `guidelines/*.card.html`.

## Working notes
- Icons are **Lucide** (CDN). 2px stroke, no emoji. In React always use the bundled `<Icon name="…" />` component; never `lucide.createIcons()`.
- The shell is **light and flat**: white sidebar + slim translucent top bar over near-white `--gray-50`, white hairline-bordered cards, near-flat plum-tinted shadows. Berry is an **accent** (active pills, primary buttons, chart fills), never a full surface costume.
- **Two shell themes** via `data-theme` on `<html>` (tokens `--sidebar-*`/`--nav-*`): default light, and `plum` — sidebar in the logo's deep plum ink with white-glass active states, content stays light. The técnico panel has a moon/sun toggle in the top bar (persisted in `localStorage['morah-theme']`).
- Copy is Brazilian Portuguese, institutional and calm. KPI/eyebrow labels are UPPERCASE; CNPJ/scores are monospace.
- Result reporting always uses the Crítico (≤2.5) / Atenção (2.6–3.9) / Adequado (≥4.0) language and colors.

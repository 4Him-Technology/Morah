Morah's primary action button — use for any clickable action; the berry gradient marks the main affordance on a screen.

```jsx
<Button variant="primary" iconLeft="plus">Nova Empresa</Button>
<Button variant="dark" iconLeft="download">Acessar Modelo</Button>
<Button variant="secondary" iconLeft="upload">Importar em Lote</Button>
```

Variants: `primary` (berry gradient, main CTA), `secondary` (white, bordered), `ghost` (text-only), `dark` (deep plum, used for download/resource rows), `danger` (delete), `leaf` (green confirm). Sizes `sm | md | lg`. `iconLeft`/`iconRight` take a Lucide icon name; call `lucide.createIcons()` after render.

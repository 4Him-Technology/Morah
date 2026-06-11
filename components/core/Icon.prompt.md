The only sanctioned way to render a Lucide icon inside React — `lucide.createIcons()` mutates React-owned DOM and crashes re-renders.

```jsx
<Icon name="building-2" size={18} />
<Icon name="bell" size={18} color="var(--berry-500)" strokeWidth={2.4} />
```

Requires the lucide UMD `<script>` (window.lucide) on the page. Kebab-case names.

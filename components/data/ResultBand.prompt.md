The NR1 interpretation band — the heart of Morah's reporting. Pass a `score` (1–5) and it picks the band, or set `level` explicitly.

```jsx
<ResultBand score={2.1} showRange />   // Crítico · 2.1 (1.0 – 2.5)
<ResultBand level="atencao" showRange />
<ResultBand score={4.4} />
```
Bands: `critico` (≤2.5, red), `atencao` (2.6–3.9, amber), `adequado` (≥4.0, green).

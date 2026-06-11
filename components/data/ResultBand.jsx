import React from 'react';

/**
 * NR1 result band indicator. Maps an average score (1–5) or an explicit
 * level to Morah's Crítico / Atenção / Adequado palette.
 */
export function ResultBand({ level = null, score = null, showRange = false, style = {} }) {
  const resolve = () => {
    if (level) return level;
    if (score == null) return 'adequado';
    if (score <= 2.5) return 'critico';
    if (score <= 3.9) return 'atencao';
    return 'adequado';
  };
  const lv = resolve();
  const map = {
    critico:  { label: 'Crítico',  range: '1.0 – 2.5', bg: 'var(--critical-50)', dot: 'var(--critical-500)', fg: 'var(--critical-700)', bd: 'var(--critical-100)' },
    atencao:  { label: 'Atenção',  range: '2.6 – 3.9', bg: 'var(--warning-50)',  dot: 'var(--warning-500)',  fg: 'var(--warning-700)',  bd: 'var(--warning-100)' },
    adequado: { label: 'Adequado', range: '4.0 – 5.0', bg: 'var(--success-50)',  dot: 'var(--success-500)',  fg: 'var(--success-700)',  bd: 'var(--success-100)' },
  };
  const c = map[lv] || map.adequado;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '8px',
      padding: '7px 14px', borderRadius: 'var(--radius-md)',
      background: c.bg, border: `1px solid ${c.bd}`,
      fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-bold)',
      color: c.fg, ...style,
    }}>
      <span style={{ width: 10, height: 10, borderRadius: 3, background: c.dot, flexShrink: 0 }}></span>
      {c.label}{score != null ? ` · ${Number(score).toFixed(1)}` : ''}
      {showRange && <span style={{ fontWeight: 'var(--weight-medium)', opacity: 0.7 }}>({c.range})</span>}
    </span>
  );
}

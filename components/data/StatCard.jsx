import React from 'react';
import { Icon } from '../core/Icon';

/**
 * Dashboard metric tile — flat white card, hairline border, a tinted
 * icon chip and a quiet sparkline. The number is the hero.
 */
export function StatCard({ label, value, icon = 'bar-chart-3', tone = 'berry', data = [], style = {} }) {
  const tones = {
    berry: { chip: 'var(--berry-50)',   ink: 'var(--berry-600)',  line: 'var(--berry-500)' },
    blue:  { chip: 'var(--info-50)',    ink: 'var(--info-500)',   line: 'var(--info-500)' },
    green: { chip: 'var(--success-50)', ink: 'var(--success-500)',line: 'var(--success-500)' },
    amber: { chip: 'var(--warning-50)', ink: 'var(--warning-700)',line: 'var(--warning-500)' },
  };
  const t = tones[tone] || tones.berry;
  const pts = data.length ? data : [4, 6, 5, 8, 7, 11, 13];
  const max = Math.max(...pts), min = Math.min(...pts);
  const W = 220, H = 44, n = pts.length;
  const norm = (v) => H - 5 - ((v - min) / (max - min || 1)) * (H - 12);
  const coords = pts.map((v, i) => [ (i / (n - 1)) * W, norm(v) ]);
  const linePath = coords.map((c, i) => `${i ? 'L' : 'M'}${c[0].toFixed(1)},${c[1].toFixed(1)}`).join(' ');
  const areaPath = `${linePath} L${W},${H} L0,${H} Z`;
  const gid = `spark-${tone}`;

  return (
    <div style={{
      background: 'var(--surface-card)', border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xs)',
      padding: 'var(--space-5)', minHeight: 148,
      display: 'flex', flexDirection: 'column', gap: 10, ...style,
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10 }}>
        <span style={{
          fontFamily: 'var(--font-body)', fontSize: 'var(--text-2xs)', fontWeight: 'var(--weight-bold)',
          letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-muted)',
          paddingTop: 8, lineHeight: 1.45,
        }}>{label}</span>
        <span style={{
          width: 32, height: 32, borderRadius: 'var(--radius-sm)', background: t.chip,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: t.ink, flexShrink: 0,
        }}>
          <Icon name={icon} size={16} />
        </span>
      </div>
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: 'var(--weight-extra)',
        color: 'var(--text-strong)', lineHeight: 1, letterSpacing: 'var(--tracking-tight)',
      }}>{value}</div>
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{ width: '100%', height: 36, marginTop: 'auto', display: 'block' }}>
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={t.line} stopOpacity="0.13" />
            <stop offset="1" stopColor={t.line} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill={`url(#${gid})`} />
        <path d={linePath} fill="none" stroke={t.line} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

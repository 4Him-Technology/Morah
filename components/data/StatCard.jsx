import React from 'react';
import { Icon } from '../core/Icon';

/**
 * Dashboard metric tile — soft tint background, faded watermark icon,
 * and a sparkline. Mirrors the Morah "Visão Geral" cards.
 */
export function StatCard({ label, value, icon = 'bar-chart-3', tone = 'berry', data = [], style = {} }) {
  const tones = {
    berry: { bg: 'var(--tint-berry)', line: 'var(--berry-500)', ink: 'var(--berry-800)' },
    blue:  { bg: 'var(--tint-blue)',  line: 'var(--info-500)',  ink: 'var(--info-700)' },
    green: { bg: 'var(--tint-green)', line: 'var(--success-500)', ink: 'var(--success-700)' },
    amber: { bg: 'var(--tint-amber)', line: 'var(--warning-500)', ink: 'var(--warning-700)' },
  };
  const t = tones[tone] || tones.berry;
  const pts = data.length ? data : [4, 6, 5, 8, 7, 11, 13];
  const max = Math.max(...pts), min = Math.min(...pts);
  const W = 260, H = 64, n = pts.length;
  const norm = (v) => H - 8 - ((v - min) / (max - min || 1)) * (H - 20);
  const coords = pts.map((v, i) => [ (i / (n - 1)) * W, norm(v) ]);
  const linePath = coords.map((c, i) => `${i ? 'L' : 'M'}${c[0].toFixed(1)},${c[1].toFixed(1)}`).join(' ');
  const areaPath = `${linePath} L${W},${H} L0,${H} Z`;
  const gid = `spark-${tone}`;

  return (
    <div style={{
      position: 'relative', overflow: 'hidden',
      background: t.bg, borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-5) var(--space-5) 0',
      boxShadow: 'var(--shadow-card)', minHeight: 150,
      display: 'flex', flexDirection: 'column', ...style,
    }}>
      <Icon name={icon} size={76} strokeWidth={1.4} color={t.ink} style={{
        position: 'absolute', right: 14, top: 14, opacity: 0.12,
      }} />
      <div style={{
        fontFamily: 'var(--font-body)', fontSize: 'var(--text-2xs)', fontWeight: 'var(--weight-bold)',
        letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: t.ink, opacity: 0.85,
      }}>{label}</div>
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', fontWeight: 'var(--weight-extra)',
        color: 'var(--text-strong)', lineHeight: 1.05, marginTop: 6,
      }}>{value}</div>
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{ width: '100%', height: 56, marginTop: 'auto' }}>
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={t.line} stopOpacity="0.28" />
            <stop offset="1" stopColor={t.line} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill={`url(#${gid})`} />
        <path d={linePath} fill="none" stroke={t.line} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {coords.map((c, i) => <circle key={i} cx={c[0]} cy={c[1]} r="2.6" fill="#fff" stroke={t.line} strokeWidth="2" />)}
      </svg>
    </div>
  );
}

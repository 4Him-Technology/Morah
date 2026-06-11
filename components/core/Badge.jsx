import React from 'react';

/**
 * Small label chip. Tones map to Morah's neutral + status palette.
 * Used for company classifications (SETOR, GHE, GES) and report bands.
 */
export function Badge({ children, tone = 'neutral', solid = false, style = {}, ...rest }) {
  const tones = {
    neutral: { soft: { bg: 'var(--gray-100)', fg: 'var(--gray-600)' }, solid: { bg: 'var(--berry-950)', fg: '#fff' } },
    berry:   { soft: { bg: 'var(--berry-100)', fg: 'var(--berry-700)' }, solid: { bg: 'var(--berry-600)', fg: '#fff' } },
    leaf:    { soft: { bg: 'var(--leaf-100)', fg: 'var(--leaf-700)' }, solid: { bg: 'var(--leaf-600)', fg: '#fff' } },
    critical:{ soft: { bg: 'var(--critical-50)', fg: 'var(--critical-700)' }, solid: { bg: 'var(--critical-500)', fg: '#fff' } },
    warning: { soft: { bg: 'var(--warning-50)', fg: 'var(--warning-700)' }, solid: { bg: 'var(--warning-500)', fg: '#fff' } },
    success: { soft: { bg: 'var(--success-50)', fg: 'var(--success-700)' }, solid: { bg: 'var(--success-500)', fg: '#fff' } },
    info:    { soft: { bg: 'var(--info-50)', fg: 'var(--info-700)' }, solid: { bg: 'var(--info-500)', fg: '#fff' } },
  };
  const t = (tones[tone] || tones.neutral)[solid ? 'solid' : 'soft'];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '5px',
      padding: '3px 9px', borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)', fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase', lineHeight: 1.4,
      background: t.bg, color: t.fg, ...style,
    }} {...rest}>{children}</span>
  );
}

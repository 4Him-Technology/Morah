import React from 'react';

/** Circular user/company avatar with initials fallback. */
export function Avatar({ name = '', src = null, size = 40, tone = 'berry', style = {}, ...rest }) {
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase() || '?';
  const tones = {
    berry: 'var(--gradient-brand)',
    leaf: 'var(--gradient-leaf)',
    dark: 'var(--berry-950)',
  };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: size, height: size, borderRadius: 'var(--radius-pill)',
      background: src ? 'transparent' : (tones[tone] || tones.berry),
      color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)',
      fontSize: size * 0.38, overflow: 'hidden', flexShrink: 0,
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.12)', ...style,
    }} {...rest}>
      {src ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initials}
    </span>
  );
}

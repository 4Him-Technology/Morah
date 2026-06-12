import React from 'react';
import { Icon } from './Icon';

/**
 * Morah action button. Flat, solid fills — the berry is an accent,
 * not a costume. Quiet secondary, ghost, dark and danger variants.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '7px 13px', fontSize: 'var(--text-sm)', radius: 'var(--radius-sm)', gap: '6px', icon: 15 },
    md: { padding: '9px 16px', fontSize: 'var(--text-base)', radius: 'var(--radius-control)', gap: '8px', icon: 16 },
    lg: { padding: '12px 22px', fontSize: 'var(--text-md)', radius: 'var(--radius-control)', gap: '9px', icon: 18 },
  };
  const s = sizes[size] || sizes.md;

  const variants = {
    primary: { background: 'var(--berry-600)', color: '#fff', border: '1px solid transparent', boxShadow: 'var(--shadow-xs)' },
    secondary: { background: 'var(--surface-card)', color: 'var(--text-body)', border: '1px solid var(--border-default)', boxShadow: 'var(--shadow-xs)' },
    ghost: { background: 'transparent', color: 'var(--text-muted)', border: '1px solid transparent', boxShadow: 'none' },
    dark: { background: 'var(--gray-900)', color: '#fff', border: '1px solid transparent', boxShadow: 'var(--shadow-xs)' },
    danger: { background: 'var(--critical-500)', color: '#fff', border: '1px solid transparent', boxShadow: 'var(--shadow-xs)' },
    leaf: { background: 'var(--leaf-600)', color: '#fff', border: '1px solid transparent', boxShadow: 'var(--shadow-xs)' },
  };
  const v = variants[variant] || variants.primary;

  return (
    <button
      disabled={disabled}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        gap: s.gap, padding: s.padding, fontSize: s.fontSize,
        fontFamily: 'var(--font-body)', fontWeight: 'var(--weight-semibold)',
        lineHeight: 1, letterSpacing: 'var(--tracking-snug)',
        borderRadius: s.radius, cursor: disabled ? 'not-allowed' : 'pointer',
        width: fullWidth ? '100%' : 'auto',
        opacity: disabled ? 0.5 : 1,
        transition: 'transform var(--dur-fast) var(--ease-out), filter var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
        ...v, ...style,
      }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'scale(0.97)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.filter = 'none'; }}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.filter = 'brightness(0.96)'; }}
      {...rest}
    >
      {iconLeft && <Icon name={iconLeft} size={s.icon} />}
      {children}
      {iconRight && <Icon name={iconRight} size={s.icon} />}
    </button>
  );
}

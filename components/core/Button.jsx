import React from 'react';
import { Icon } from './Icon';

/**
 * Morah primary action button. Berry-forward, with quiet secondary,
 * ghost, dark and danger variants to match the admin panel.
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
    sm: { padding: '7px 14px', fontSize: 'var(--text-sm)', radius: 'var(--radius-sm)', gap: '6px', icon: 15 },
    md: { padding: '10px 18px', fontSize: 'var(--text-base)', radius: 'var(--radius-md)', gap: '8px', icon: 17 },
    lg: { padding: '13px 24px', fontSize: 'var(--text-md)', radius: 'var(--radius-md)', gap: '9px', icon: 19 },
  };
  const s = sizes[size] || sizes.md;

  const variants = {
    primary: { background: 'var(--gradient-brand)', color: '#fff', border: '1px solid transparent', boxShadow: 'var(--shadow-sm)' },
    secondary: { background: 'var(--surface-card)', color: 'var(--berry-700)', border: '1px solid var(--border-default)', boxShadow: 'var(--shadow-xs)' },
    ghost: { background: 'transparent', color: 'var(--text-body)', border: '1px solid transparent', boxShadow: 'none' },
    dark: { background: 'var(--berry-950)', color: '#fff', border: '1px solid transparent', boxShadow: 'var(--shadow-sm)' },
    danger: { background: 'var(--critical-500)', color: '#fff', border: '1px solid transparent', boxShadow: 'var(--shadow-xs)' },
    leaf: { background: 'var(--gradient-leaf)', color: '#fff', border: '1px solid transparent', boxShadow: 'var(--shadow-sm)' },
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
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.filter = 'brightness(1.06)'; }}
      {...rest}
    >
      {iconLeft && <Icon name={iconLeft} size={s.icon} />}
      {children}
      {iconRight && <Icon name={iconRight} size={s.icon} />}
    </button>
  );
}

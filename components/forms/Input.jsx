import React from 'react';
import { Icon } from '../core/Icon';

/** Text input with optional leading Lucide icon. */
export function Input({ icon = null, label = null, hint = null, style = {}, wrapStyle = {}, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', ...wrapStyle }}>
      {label && <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-body)' }}>{label}</span>}
      <span style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        background: 'var(--surface-card)',
        border: `1px solid ${focus ? 'var(--berry-500)' : 'var(--border-default)'}`,
        borderRadius: 'var(--radius-md)', padding: '0 12px',
        boxShadow: focus ? 'var(--shadow-focus)' : 'none',
        transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      }}>
        {icon && <Icon name={icon} size={17} color="var(--text-muted)" />}
        <input
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            flex: 1, border: 'none', outline: 'none', background: 'transparent',
            padding: '10px 0', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)',
            color: 'var(--text-strong)', ...style,
          }}
          {...rest}
        />
      </span>
      {hint && <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{hint}</span>}
    </label>
  );
}

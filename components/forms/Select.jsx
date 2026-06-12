import React from 'react';
import { Icon } from '../core/Icon';

/** Styled native select matching Morah inputs. `dark` renders glass on dark surfaces. */
export function Select({ options = [], label = null, dark = false, style = {}, wrapStyle = {}, ...rest }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', ...wrapStyle }}>
      {label && <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: dark ? 'var(--text-on-dark)' : 'var(--text-body)' }}>{label}</span>}
      <span style={{ position: 'relative', display: 'inline-flex' }}>
        <select
          style={{
            appearance: 'none', WebkitAppearance: 'none',
            width: '100%', padding: '9px 34px 9px 12px',
            fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', fontWeight: 'var(--weight-medium)',
            color: dark ? '#fff' : 'var(--text-strong)',
            background: dark ? 'rgba(255,255,255,0.06)' : 'var(--surface-card)',
            border: `1px solid ${dark ? 'var(--border-on-dark)' : 'var(--border-subtle)'}`,
            borderRadius: 'var(--radius-control)', cursor: 'pointer', outline: 'none',
            boxShadow: dark ? 'none' : 'var(--shadow-xs)',
            ...style,
          }}
          {...rest}
        >
          {options.map((o, i) => {
            const val = typeof o === 'string' ? o : o.value;
            const lbl = typeof o === 'string' ? o : o.label;
            return <option key={i} value={val}>{lbl}</option>;
          })}
        </select>
        <Icon name="chevrons-up-down" size={14} color={dark ? 'var(--text-on-dark-muted)' : 'var(--text-faint)'} style={{
          position: 'absolute', right: 11, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none',
        }} />
      </span>
    </label>
  );
}

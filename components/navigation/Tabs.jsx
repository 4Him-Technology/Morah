import React from 'react';

/** Underline tab bar — quiet hairline rail, berry underline on the active tab. */
export function Tabs({ tabs = [], active = 0, onChange = () => {}, style = {} }) {
  return (
    <div style={{
      display: 'flex', gap: '24px',
      borderBottom: '1px solid var(--border-subtle)', ...style,
    }}>
      {tabs.map((t, i) => {
        const on = i === active;
        return (
          <button key={i} onClick={() => onChange(i)} style={{
            padding: '10px 2px 12px', border: 'none', cursor: 'pointer',
            background: 'transparent',
            color: on ? 'var(--berry-700)' : 'var(--text-muted)',
            fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)',
            fontWeight: on ? 'var(--weight-bold)' : 'var(--weight-medium)',
            boxShadow: on ? 'inset 0 -2px 0 var(--berry-600)' : 'none',
            transition: 'color var(--dur-fast), box-shadow var(--dur-fast)',
          }}>{t}</button>
        );
      })}
    </div>
  );
}

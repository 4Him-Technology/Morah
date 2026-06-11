import React from 'react';

/** Segmented tab bar — the underline/pill style from Morah's Relatórios view. */
export function Tabs({ tabs = [], active = 0, onChange = () => {}, style = {} }) {
  return (
    <div style={{
      display: 'flex', gap: '4px', padding: '5px',
      background: 'var(--surface-sunken)', borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-subtle)', ...style,
    }}>
      {tabs.map((t, i) => {
        const on = i === active;
        return (
          <button key={i} onClick={() => onChange(i)} style={{
            flex: 1, padding: '9px 16px', border: 'none', cursor: 'pointer',
            borderRadius: 'var(--radius-sm)',
            background: on ? 'var(--surface-card)' : 'transparent',
            color: on ? 'var(--berry-700)' : 'var(--text-muted)',
            fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)',
            fontWeight: on ? 'var(--weight-bold)' : 'var(--weight-medium)',
            boxShadow: on ? 'var(--shadow-xs)' : 'none',
            transition: 'all var(--dur-fast) var(--ease-out)',
          }}>{t}</button>
        );
      })}
    </div>
  );
}

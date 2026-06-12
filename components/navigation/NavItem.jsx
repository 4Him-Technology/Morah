import React from 'react';
import { Icon } from '../core/Icon';

/**
 * Sidebar navigation row for the Morah admin panel.
 * Colors come from the --nav-* shell tokens, so the same component
 * works on the light shell and on the plum sidebar (data-theme="plum").
 */
export function NavItem({ icon, label, active = false, dot = false, onClick = () => {}, style = {} }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative', display: 'flex', alignItems: 'center', gap: '11px',
        width: '100%', padding: '9px 12px', border: 'none', cursor: 'pointer',
        borderRadius: 'var(--radius-control)', textAlign: 'left',
        background: active ? 'var(--nav-active-bg)' : (hover ? 'var(--nav-hover-bg)' : 'transparent'),
        color: active ? 'var(--nav-active-fg)' : (hover ? 'var(--nav-hover-fg)' : 'var(--nav-fg)'),
        fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)',
        fontWeight: active ? 'var(--weight-bold)' : 'var(--weight-medium)',
        transition: 'background var(--dur-fast), color var(--dur-fast)',
        ...style,
      }}
    >
      <Icon name={icon} size={17} strokeWidth={active ? 2.3 : 2} color={active ? 'var(--nav-active-icon)' : 'currentColor'} />
      <span style={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{label}</span>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--nav-dot)', flexShrink: 0 }}></span>}
    </button>
  );
}

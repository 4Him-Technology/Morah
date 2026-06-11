import React from 'react';
import { Icon } from '../core/Icon';

/**
 * Sidebar navigation row for the Morah admin panel.
 * Active state uses a berry-tinted glass highlight + leading accent.
 */
export function NavItem({ icon, label, active = false, dot = false, onClick = () => {}, style = {} }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative', display: 'flex', alignItems: 'center', gap: '12px',
        width: '100%', padding: '11px 14px', border: 'none', cursor: 'pointer',
        borderRadius: 'var(--radius-md)', textAlign: 'left',
        background: active
          ? 'linear-gradient(100deg, rgba(164,69,156,0.30), rgba(164,69,156,0.08))'
          : (hover ? 'rgba(255,255,255,0.05)' : 'transparent'),
        boxShadow: active ? 'inset 0 0 0 1px rgba(189,111,186,0.35)' : 'none',
        color: active ? '#fff' : 'var(--text-on-dark-muted)',
        fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)',
        fontWeight: active ? 'var(--weight-bold)' : 'var(--weight-medium)',
        transition: 'background var(--dur-fast), color var(--dur-fast)',
      }}
    >
      {active && <span style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', width: 3, height: 20, borderRadius: 3, background: 'var(--berry-400)' }}></span>}
      <Icon name={icon} size={18} strokeWidth={active ? 2.4 : 2} />
      <span style={{ flex: 1 }}>{label}</span>
      {dot && <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--berry-400)', boxShadow: '0 0 8px var(--berry-400)' }}></span>}
    </button>
  );
}

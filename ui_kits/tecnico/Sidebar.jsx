// Morah técnico — Sidebar (dark plum). Composes NavItem from the bundle.
const { NavItem: DsNavItem, Avatar: DsAvatar, Icon: DsIcon } = window.MorahDesignSystem_32f810;

function Sidebar({ active, onNavigate }) {
  const D = window.MORAH;
  const Section = ({ label }) => (
    <div style={{
      padding: '0 14px', marginBottom: 8,
      fontFamily: 'var(--font-body)', fontSize: 'var(--text-2xs)', fontWeight: 800,
      letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase',
      color: 'var(--text-on-dark-faint)',
    }}>{label}</div>
  );

  return (
    <aside style={{
      width: 'var(--sidebar-width)', flexShrink: 0, height: '100%',
      background: 'var(--gradient-sidebar)', display: 'flex', flexDirection: 'column',
      borderRight: '1px solid rgba(255,255,255,0.05)',
    }}>
      {/* Brand */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '20px 20px 18px' }}>
        <img src="../../assets/morah-mark-white.png" alt="" style={{ width: 32, height: 'auto' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5, lineHeight: 1 }}>
          <img src="../../assets/morah-wordmark-white.png" alt="Morah" style={{ width: 92, height: 'auto', display: 'block' }} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 9.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-on-dark-faint)' }}>Segurança · NR1</span>
        </div>
      </div>

      <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', margin: '0 20px 18px' }}></div>

      {/* Nav */}
      <nav style={{ flex: 1, overflowY: 'auto', padding: '0 12px' }}>
        <Section label="Navegação" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 3, marginBottom: 22 }}>
          {D.nav.navegacao.map((it) => (
            <DsNavItem key={it.id} icon={it.icon} label={it.label}
              active={active === it.id} dot={active === it.id}
              onClick={() => onNavigate(it.id)} />
          ))}
        </div>
        <Section label="Ferramentas" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {D.nav.ferramentas.map((it) => (
            <DsNavItem key={it.id} icon={it.icon} label={it.label}
              active={active === it.id} dot={active === it.id}
              onClick={() => onNavigate(it.id)} />
          ))}
        </div>
      </nav>

      {/* User card */}
      <div style={{ padding: 12 }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px',
          background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}>
          <DsAvatar name={D.tenant.tech} size={34} tone="berry" />
          <div style={{ flex: 1, minWidth: 0, lineHeight: 1.25 }}>
            <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-sm)', color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{D.tenant.tech}</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-2xs)', color: 'var(--text-on-dark-muted)' }}>{D.tenant.role}</div>
          </div>
          <DsIcon name="chevron-up" size={16} color="var(--text-on-dark-muted)" />
        </div>
      </div>
    </aside>
  );
}
window.Sidebar = Sidebar;

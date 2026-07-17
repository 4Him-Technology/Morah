// Morah técnico — Sidebar. Theme-aware via the --sidebar-*/--nav-* tokens:
// light shell by default, deep plum when <html data-theme="plum">.
const { NavItem: DsNavItem, Avatar: DsAvatar, Icon: DsIcon } = window.MorahDesignSystem_32f810;

function Sidebar({ active, onNavigate, nav, tenant }) {
  const D = window.MORAH;
  const N = nav || D.perfis.rh.nav;
  const T = tenant || D.perfis.rh.tenant;
  const Section = ({ label }) => (
    <div style={{
      padding: '0 12px', marginBottom: 8,
      fontFamily: 'var(--font-body)', fontSize: 10.5, fontWeight: 800,
      letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase',
      color: 'var(--sidebar-section-fg)',
    }}>{label}</div>
  );

  return (
    <aside style={{
      width: 'var(--sidebar-width)', flexShrink: 0, height: '100%',
      background: 'var(--sidebar-bg)', display: 'flex', flexDirection: 'column',
      borderRight: '1px solid var(--sidebar-border)',
      transition: 'background var(--dur-slow) var(--ease-out)',
    }}>
      {/* Brand — both lockups rendered; base.css shows one per theme */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '22px 20px 20px' }}>
        <img className="morah-logo-light" src="../../assets/morah-mark.png" alt="" style={{ width: 30, height: 'auto' }} />
        <img className="morah-logo-light" src="../../assets/morah-wordmark.png" alt="Moorah" style={{ width: 86, height: 'auto' }} />
        <img className="morah-logo-dark" src="../../assets/morah-mark-white.png" alt="" style={{ width: 30, height: 'auto' }} />
        <img className="morah-logo-dark" src="../../assets/morah-wordmark-white.png" alt="Moorah" style={{ width: 86, height: 'auto' }} />
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, overflowY: 'auto', padding: '4px 12px 12px' }}>
        <Section label="Navegação" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 24 }}>
          {N.navegacao.map((it) => (
            <DsNavItem key={it.id} icon={it.icon} label={it.label}
              active={active === it.id}
              onClick={() => onNavigate(it.id)} />
          ))}
        </div>
        {N.ferramentas.length > 0 && <Section label="Ferramentas" />}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {N.ferramentas.map((it) => (
            <DsNavItem key={it.id} icon={it.icon} label={it.label}
              active={active === it.id}
              onClick={() => onNavigate(it.id)} />
          ))}
        </div>
      </nav>

      {/* User card */}
      <div style={{ padding: 12, borderTop: '1px solid var(--sidebar-divider)' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10, padding: '9px 10px',
          background: 'var(--sidebar-user-bg)', borderRadius: 'var(--radius-md)',
          border: '1px solid var(--sidebar-user-border)', cursor: 'pointer',
        }}>
          <DsAvatar name={T.tech} size={32} tone="berry" />
          <div style={{ flex: 1, minWidth: 0, lineHeight: 1.3 }}>
            <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--sidebar-user-name)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{T.tech}</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-2xs)', color: 'var(--sidebar-user-role)' }}>{T.role}</div>
          </div>
          <DsIcon name="chevrons-up-down" size={15} color="var(--sidebar-user-role)" />
        </div>
      </div>
    </aside>
  );
}
window.Sidebar = Sidebar;

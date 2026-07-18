// Morah técnico — slim top bar (light, hairline divider, soft blur).
const { Select: DsSelect, Icon: HdrIcon } = window.MorahDesignSystem_32f810;

function Header({ screen, theme, onToggleTheme, rotulo, tenantName, empresaAberta, onTrocarEmpresa }) {
  const D = window.MORAH;
  const iconBtn = {
    width: 38, height: 38, borderRadius: 'var(--radius-control)', cursor: 'pointer',
    background: 'var(--surface-card)', border: '1px solid var(--border-subtle)',
    color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    boxShadow: 'var(--shadow-xs)',
  };
  return (
    <header style={{
      height: 'var(--topbar-height)', flexShrink: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
      padding: '0 28px',
      background: 'rgba(255,255,255,0.82)',
      backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-subtle)',
      position: 'relative', zIndex: 10,
    }}>
      {/* Workspace context */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--leaf-500)', boxShadow: '0 0 0 3px var(--leaf-50)', flexShrink: 0 }}></span>
        <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--text-strong)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{tenantName || D.tenant.name}</span>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', fontWeight: 500,
          color: 'var(--text-faint)', border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-xs)', padding: '2px 7px', letterSpacing: '0.06em', flexShrink: 0,
        }}>{rotulo || 'TÉCNICO'}</span>
      </div>

      {/* Global actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
        {/* Empresa aberta: contexto TRAVADO — para trocar, volta à tela Empresas */}
        {empresaAberta && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            background: 'var(--berry-50)', border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-control)', padding: '6px 8px 6px 12px', maxWidth: 340,
          }}>
            <HdrIcon name="building-2" size={15} color="var(--berry-600)" />
            <span style={{
              fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-sm)',
              color: 'var(--berry-700)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
            }}>{empresaAberta}</span>
            <button onClick={onTrocarEmpresa} title="Voltar para a tela Empresas" style={{
              cursor: 'pointer', border: '1px solid var(--border-subtle)', background: 'var(--surface-card)',
              borderRadius: 'var(--radius-xs)', padding: '4px 10px', flexShrink: 0,
              fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-2xs)', color: 'var(--text-body)',
            }}>Trocar</button>
          </div>
        )}
        <button aria-label="Alternar tema do painel" title="Alternar tema" onClick={onToggleTheme} style={iconBtn}>
          <HdrIcon name={theme === 'plum' ? 'sun' : 'moon'} size={17} />
        </button>
        <button aria-label="Notificações" style={iconBtn}>
          <HdrIcon name="bell" size={17} />
        </button>
        <button aria-label="Sair" title="Sair" onClick={() => {
          try { window.MorahAuth.signOut(); } catch (e) {}
          window.location.replace(window.MORAH_AUTH_CONFIG ? window.MORAH_AUTH_CONFIG.loginUrl : '../../login/index.html');
        }} style={iconBtn}>
          <HdrIcon name="log-out" size={17} />
        </button>
      </div>
    </header>
  );
}
window.Header = Header;

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

/* ============================================================
   Drill-down (admin/técnico dentro de uma empresa):
   SidebarRail  — menu principal recolhido em trilho de ícones (expansível)
   SidebarEmpresa — menu contextual da empresa aberta
   ============================================================ */

// Botão circular de recolher/expandir — CANTO INFERIOR DIREITO do menu, na borda.
// Padrão: branco com borda cinza VISÍVEL (--border-default) + chevron berry.
// (O bug antigo era usar --sidebar-border, um branco quase transparente do tema
// escuro, que sumia sobre o menu claro.) `style` permite o override roxo do menu
// da empresa.
function ToggleFab({ exp, onClick, style }) {
  return (
    <button onClick={onClick} title={exp ? 'Recolher menu' : 'Expandir menu'} style={{
      position: 'absolute', bottom: 16, right: -13, zIndex: 40,
      width: 26, height: 26, cursor: 'pointer', padding: 0,
      border: '1px solid var(--border-default)', borderRadius: '50%',
      background: 'var(--surface-card)', color: 'var(--berry-600)',
      boxShadow: 'var(--shadow-sm)',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      ...style,
    }}>
      <DsIcon name={exp ? 'chevron-left' : 'chevron-right'} size={15} />
    </button>
  );
}

// Item de seção do menu da empresa (fundo CLARO). Cores próprias (--text-body/--berry)
// em vez do NavItem, que usa os tokens --nav-* do fundo ESCURO da sidebar e ficaria
// invisível (texto claro no card claro) no tema plum.
function SecaoItem({ s, active, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      display: 'flex', alignItems: 'center', gap: 10, width: '100%', cursor: 'pointer', textAlign: 'left',
      padding: '9px 11px', border: 'none', borderRadius: 'var(--radius-md)',
      background: active ? 'var(--berry-50)' : (hover ? 'var(--gray-50)' : 'transparent'),
      color: active ? 'var(--berry-700)' : 'var(--text-body)',
      fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-sm)',
    }}>
      <DsIcon name={s.icon} size={17} color={active ? 'var(--berry-600)' : 'var(--text-muted)'} />
      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.label}</span>
    </button>
  );
}

function SidebarRail({ nav, active, onNavigate }) {
  const [exp, setExp] = React.useState(() => {
    try { return localStorage.getItem('morah-rail-exp') === '1'; } catch (e) { return false; }
  });
  const toggle = () => {
    const v = !exp; setExp(v);
    try { localStorage.setItem('morah-rail-exp', v ? '1' : '0'); } catch (e) {}
  };
  const itens = [...nav.navegacao, ...nav.ferramentas];
  const W = exp ? 200 : 64;

  return (
    <aside style={{
      position: 'relative', width: W, flexShrink: 0, height: '100%', zIndex: 30,
      background: 'var(--sidebar-bg)', display: 'flex', flexDirection: 'column',
      borderRight: '1px solid var(--sidebar-border)', alignItems: 'stretch',
      transition: 'width var(--dur-base) var(--ease-out)',
    }}>
      {/* Botão de recolher no canto inferior direito do trilho. zIndex do aside
          faz ele aparecer por cima do menu da empresa. */}
      <ToggleFab exp={exp} onClick={toggle} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: exp ? 'flex-start' : 'center', padding: exp ? '22px 16px 20px' : '22px 0 20px' }}>
        {/* Logo Moorah: amora sempre; wordmark MOORAH quando expandido. */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9 }}>
          <img className="morah-logo-light" src="../../assets/morah-mark.png" alt="" style={{ width: 30, height: 'auto' }} />
          <img className="morah-logo-dark" src="../../assets/morah-mark-white.png" alt="" style={{ width: 30, height: 'auto' }} />
          {exp && <img className="morah-logo-light" src="../../assets/morah-wordmark.png" alt="Moorah" style={{ width: 92, height: 'auto' }} />}
          {exp && <img className="morah-logo-dark" src="../../assets/morah-wordmark-white.png" alt="Moorah" style={{ width: 92, height: 'auto' }} />}
        </div>
      </div>
      <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4, padding: '4px 10px' }}>
        {itens.map((it) => {
          const ativo = active === it.id;
          return (
            <button key={it.id} title={it.label} onClick={() => onNavigate(it.id)} style={{
              display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer',
              justifyContent: exp ? 'flex-start' : 'center',
              padding: exp ? '10px 12px' : '10px 0', border: 'none', borderRadius: 'var(--radius-md)',
              background: ativo ? 'var(--berry-50)' : 'transparent',
              color: ativo ? 'var(--berry-700)' : 'var(--text-muted)',
              fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-sm)', whiteSpace: 'nowrap',
            }}>
              <DsIcon name={it.icon} size={18} />
              {exp && <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{it.label}</span>}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
window.SidebarRail = SidebarRail;

function SidebarEmpresa({ empresaNome, secoes, active, onNavigate, onVoltar, tenant }) {
  const [exp, setExp] = React.useState(() => {
    try { return localStorage.getItem('morah-emp-exp') !== '0'; } catch (e) { return true; }
  });
  const toggle = () => {
    const v = !exp; setExp(v);
    try { localStorage.setItem('morah-emp-exp', v ? '1' : '0'); } catch (e) {}
  };
  const W = exp ? 236 : 64;

  return (
    <aside style={{
      position: 'relative', width: W, flexShrink: 0, height: '100%', zIndex: 20,
      background: 'var(--surface-card)', display: 'flex', flexDirection: 'column',
      borderRight: '1px solid var(--sidebar-border)',
      transition: 'width var(--dur-base) var(--ease-out)',
    }}>
      {/* Botão de recolher no canto inferior direito do menu da empresa.
          ROXO (berry) para diferenciar do trilho e ficar bem visível. */}
      <ToggleFab exp={exp} onClick={toggle} style={{ background: 'var(--berry-600)', color: '#fff', border: '1px solid var(--berry-700)' }} />

      {exp ? (
        <div style={{ padding: '18px 16px 12px', borderBottom: '1px solid var(--gray-100)' }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 10.5, fontWeight: 800, letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 5 }}>Empresa</div>
          <div style={{ fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 'var(--text-base)', color: 'var(--text-strong)', lineHeight: 1.35 }}>{empresaNome}</div>
          <button onClick={onVoltar} style={{
            marginTop: 10, display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'pointer',
            border: '1px solid var(--border-subtle)', background: 'var(--gray-50)',
            borderRadius: 'var(--radius-control)', padding: '6px 11px',
            fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-2xs)', color: 'var(--text-body)',
          }}>
            <DsIcon name="arrow-left" size={13} /> Voltar para Empresas
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px 0 12px', borderBottom: '1px solid var(--gray-100)' }}>
          <button onClick={onVoltar} title={'Voltar para Empresas · ' + empresaNome} style={{
            width: 38, height: 38, cursor: 'pointer', border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)', background: 'var(--berry-50)', color: 'var(--berry-600)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <DsIcon name="building-2" size={18} />
          </button>
        </div>
      )}

      <nav style={{ flex: 1, overflowY: 'auto', padding: exp ? '10px 12px' : '10px 0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: exp ? 'stretch' : 'center' }}>
          {secoes.map((s) => (
            exp
              ? <SecaoItem key={s.id} s={s} active={active === s.id} onClick={() => onNavigate(s.id)} />
              : <button key={s.id} title={s.label} onClick={() => onNavigate(s.id)} style={{
                  width: 44, height: 40, cursor: 'pointer', border: 'none', borderRadius: 'var(--radius-md)',
                  background: active === s.id ? 'var(--berry-50)' : 'transparent',
                  color: active === s.id ? 'var(--berry-700)' : 'var(--text-muted)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                }}><DsIcon name={s.icon} size={18} /></button>
          ))}
        </div>
      </nav>

      {exp && (
        <div style={{ padding: 12, borderTop: '1px solid var(--sidebar-divider)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', background: 'var(--sidebar-user-bg)', borderRadius: 'var(--radius-md)', border: '1px solid var(--sidebar-user-border)' }}>
            <DsAvatar name={tenant.tech} size={30} tone="berry" />
            <div style={{ flex: 1, minWidth: 0, lineHeight: 1.3 }}>
              <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--sidebar-user-name)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{tenant.tech}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-2xs)', color: 'var(--sidebar-user-role)' }}>{tenant.role}</div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
window.SidebarEmpresa = SidebarEmpresa;

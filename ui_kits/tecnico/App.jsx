// Morah técnico — app shell composition.
// O shell se adapta ao perfil do usuário logado (admin | rh | colaborador):
// navegação, tela inicial, rótulo e seletor de empresas vêm de D.perfis[perfil].
function App() {
  const D = window.MORAH;
  const [user, setUser] = React.useState(window.MORAH_USER || null);
  const [screen, setScreen] = React.useState(null); // null → tela inicial do perfil
  const [company, setCompany] = React.useState('Todas as empresas');
  const [theme, setTheme] = React.useState(() => {
    try { return localStorage.getItem('morah-theme') || 'light'; } catch (e) { return 'light'; }
  });

  // Usuário resolvido pela guarda de rota (assíncrona) do index.html
  React.useEffect(() => {
    if (!user && window.MORAH_USER_PROMISE) {
      window.MORAH_USER_PROMISE.then((u) => { if (u) setUser(u); });
    }
  }, []);

  // Sessão real: /me traz a empresa (RH) ou a carteira de empresas (técnico);
  // admin busca a lista completa para o seletor global.
  const [me, setMe] = React.useState(null);
  const [empresasAdmin, setEmpresasAdmin] = React.useState(null);
  React.useEffect(() => {
    (async () => {
      try {
        if (!window.MorahApi) return;
        const m = await window.MorahApi.chamar('GET', '/me');
        setMe(m);
        if (m.papel === 'moorah-admin') {
          try { setEmpresasAdmin(await window.MorahApi.chamar('GET', '/empresas')); } catch (e) {}
        }
      } catch (e) {}
    })();
  }, []);

  // Navegação pós-seleção de empresa (ex.: "Gerenciar" na tela Empresas)
  React.useEffect(() => {
    try {
      const destino = sessionStorage.getItem('morah-ir-para');
      if (destino) { sessionStorage.removeItem('morah-ir-para'); setScreen(destino); }
    } catch (e) {}
  }, []);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('morah-theme', theme); } catch (e) {}
  }, [theme]);

  const perfil = user && user.perfil && D.perfis[user.perfil] ? user.perfil : 'rh';
  const P = D.perfis[perfil];
  const tenant = Object.assign({}, P.tenant, user ? { tech: user.name } : {});
  // ===== Drill-down por empresa (técnico e admin) =====
  // Fora da empresa: hub (Empresas + Cobrança). "Gerenciar" abre a empresa:
  // a sidebar troca para o contexto dela e o topo TRAVA (sem seletor).
  // Para trocar de empresa: botão "Trocar" → volta à tela Empresas.
  const selecionaveis = (me && me.empresas) || empresasAdmin || null;
  const empresaAtivaId = (() => { try { return localStorage.getItem('morah-empresa-id'); } catch (e) { return null; } })();
  const empresaAberta = (() => {
    if (!empresaAtivaId) return null;
    if (selecionaveis) {
      const e = selecionaveis.find((x) => x.id === empresaAtivaId);
      if (e) return e.razao_social;
    }
    try {
      const locais = JSON.parse(localStorage.getItem('morah-empresas') || '[]');
      const e = locais.find((x) => x.id === empresaAtivaId);
      if (e) return e.razao_social;
    } catch (e) {}
    // Fallback: nome gravado no "Gerenciar" (cobre o intervalo antes do /me
    // responder no modo API e qualquer divergência de listas no demo)
    try { return localStorage.getItem('morah-empresa-nome') || null; } catch (e) { return null; }
  })();
  const drillDown = !!P.navEmpresa; // admin e técnico
  const nav = drillDown && empresaAberta ? P.navEmpresa : P.nav;
  const sairEmpresa = () => {
    try {
      localStorage.removeItem('morah-empresa-id');
      localStorage.removeItem('morah-empresa-nome');
      sessionStorage.setItem('morah-ir-para', 'empresas');
    } catch (e) {}
    window.location.reload();
  };

  // Telas escopadas só existem com empresa aberta (nos perfis drill-down)
  const ESCOPADAS = ['overview', 'link', 'campanhas', 'relatorios', 'comparar', 'plano', 'denuncias', 'unidades', 'setor', 'departamentos', 'cargos'];
  let atual = screen || (drillDown && empresaAberta ? 'overview' : P.inicio);
  if (drillDown && !empresaAberta && ESCOPADAS.indexOf(atual) !== -1) atual = 'empresas';

  const tenantName = empresaAberta || (me && me.empresa ? me.empresa.razao_social : P.tenant.name);
  const empresaContexto = empresaAberta || (me && me.empresa ? me.empresa.razao_social : (perfil === 'rh' ? P.tenant.name : null));

  const Screen = window.Screens[atual] || window.Screens.overview;
  const t = D.titles[atual] || D.titles.overview;

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: 'var(--bg-app)' }}>
      <Sidebar active={atual} onNavigate={setScreen} nav={nav} tenant={tenant} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Header screen={atual}
          rotulo={P.rotulo} tenantName={tenantName}
          empresaAberta={drillDown ? empresaAberta : null} onTrocarEmpresa={sairEmpresa}
          theme={theme} onToggleTheme={() => setTheme(tm => tm === 'plum' ? 'light' : 'plum')} />
        <main style={{ flex: 1, overflowY: 'auto' }}>
          <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: '28px 32px 56px' }}>
            {/* Page header lives in the content column — the chrome stays quiet */}
            <div style={{ marginBottom: 'var(--space-6)' }}>
              <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, color: 'var(--text-strong)', letterSpacing: 'var(--tracking-tight)' }}>{t.h}</h1>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--text-muted)', margin: '6px 0 0' }}>{t.sub}</p>
              {ESCOPADAS.indexOf(atual) !== -1 && empresaContexto && (
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 7, marginTop: 10,
                  padding: '5px 12px', borderRadius: 'var(--radius-control)',
                  background: 'var(--berry-50)',
                  border: '1px solid var(--berry-100, var(--border-subtle))',
                  fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 700,
                  color: 'var(--berry-700)',
                }}>
                  <window.MorahDesignSystem_32f810.Icon name="building-2" size={14} />
                  {empresaContexto}
                </div>
              )}
            </div>
            <Screen />
          </div>
        </main>
      </div>
    </div>
  );
}
window.App = App;

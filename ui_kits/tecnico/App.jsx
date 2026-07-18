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
  const atual = screen || P.inicio;

  // Empresa real (modo API): RH → a própria; técnico → carteira; admin → todas
  const selecionaveis = (me && me.empresas) || empresasAdmin || null;
  const empresaAtivaId = (() => { try { return localStorage.getItem('morah-empresa-id'); } catch (e) { return null; } })();
  const empresaAtiva = selecionaveis
    ? (selecionaveis.find((e) => e.id === empresaAtivaId) || (perfil === 'admin' ? null : selecionaveis[0] || null))
    : null;
  const tenantName = me && me.empresa ? me.empresa.razao_social : P.tenant.name;
  const opcoesEmpresas = selecionaveis
    ? (perfil === 'admin' ? ['Todas as empresas'] : []).concat(selecionaveis.map((e) => e.razao_social))
    : null; // null → Header usa a lista mock (demo)
  const trocarEmpresa = (nome) => {
    if (selecionaveis) {
      if (nome === 'Todas as empresas') {
        try { localStorage.removeItem('morah-empresa-id'); } catch (e) {}
        window.location.reload(); return;
      }
      const alvo = selecionaveis.find((e) => e.razao_social === nome);
      if (alvo) { try { localStorage.setItem('morah-empresa-id', alvo.id); } catch (e) {} window.location.reload(); }
      return;
    }
    // Demo: tenta achar a empresa local para escopar os dados locais
    try {
      const locais = JSON.parse(localStorage.getItem('morah-empresas') || '[]');
      const alvo = locais.find((e) => e.razao_social === nome);
      if (alvo) { localStorage.setItem('morah-empresa-id', alvo.id); window.location.reload(); return; }
      if (nome === 'Todas as empresas') { localStorage.removeItem('morah-empresa-id'); window.location.reload(); return; }
    } catch (e) {}
    setCompany(nome);
  };

  // Contexto exibido nas telas escopadas por empresa
  const ESCOPADAS = ['overview', 'link', 'campanhas', 'relatorios', 'comparar', 'plano', 'denuncias', 'cobranca', 'unidades', 'setor', 'departamentos', 'cargos'];
  const empresaContexto = (() => {
    if (empresaAtiva) return empresaAtiva.razao_social;
    if (me && me.empresa) return me.empresa.razao_social;            // RH real
    if (perfil === 'rh') return P.tenant.name;                       // RH demo
    // demo técnico/admin: empresa local selecionada
    try {
      const locais = JSON.parse(localStorage.getItem('morah-empresas') || '[]');
      const alvo = locais.find((e) => e.id === empresaAtivaId);
      if (alvo) return alvo.razao_social;
    } catch (e) {}
    return null;
  })();

  const Screen = window.Screens[atual] || window.Screens.overview;
  const t = D.titles[atual] || D.titles.overview;

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: 'var(--bg-app)' }}>
      <Sidebar active={atual} onNavigate={setScreen} nav={P.nav} tenant={tenant} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Header screen={atual} company={empresaAtiva ? empresaAtiva.razao_social : company} onCompany={trocarEmpresa}
          rotulo={P.rotulo} tenantName={tenantName} seletorEmpresas={P.seletorEmpresas}
          opcoesEmpresas={opcoesEmpresas}
          theme={theme} onToggleTheme={() => setTheme(tm => tm === 'plum' ? 'light' : 'plum')} />
        <main style={{ flex: 1, overflowY: 'auto' }}>
          <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: '28px 32px 56px' }}>
            {/* Page header lives in the content column — the chrome stays quiet */}
            <div style={{ marginBottom: 'var(--space-6)' }}>
              <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, color: 'var(--text-strong)', letterSpacing: 'var(--tracking-tight)' }}>{t.h}</h1>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--text-muted)', margin: '6px 0 0' }}>{t.sub}</p>
              {ESCOPADAS.indexOf(atual) !== -1 && (
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 7, marginTop: 10,
                  padding: '5px 12px', borderRadius: 'var(--radius-control)',
                  background: empresaContexto ? 'var(--berry-50)' : 'var(--warning-50)',
                  border: '1px solid ' + (empresaContexto ? 'var(--berry-100, var(--border-subtle))' : 'var(--warning-100)'),
                  fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 700,
                  color: empresaContexto ? 'var(--berry-700)' : 'var(--warning-700)',
                }}>
                  <window.MorahDesignSystem_32f810.Icon name="building-2" size={14} />
                  {empresaContexto
                    || (perfil === 'admin' ? 'Todas as empresas — selecione uma no topo para operar' : 'Nenhuma empresa selecionada — escolha na tela Empresas')}
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

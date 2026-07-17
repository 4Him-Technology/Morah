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

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('morah-theme', theme); } catch (e) {}
  }, [theme]);

  const perfil = user && user.perfil && D.perfis[user.perfil] ? user.perfil : 'rh';
  const P = D.perfis[perfil];
  const tenant = Object.assign({}, P.tenant, user ? { tech: user.name } : {});
  const atual = screen || P.inicio;

  const Screen = window.Screens[atual] || window.Screens.overview;
  const t = D.titles[atual] || D.titles.overview;

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: 'var(--bg-app)' }}>
      <Sidebar active={atual} onNavigate={setScreen} nav={P.nav} tenant={tenant} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Header screen={atual} company={company} onCompany={setCompany}
          rotulo={P.rotulo} tenantName={P.tenant.name} seletorEmpresas={P.seletorEmpresas}
          theme={theme} onToggleTheme={() => setTheme(tm => tm === 'plum' ? 'light' : 'plum')} />
        <main style={{ flex: 1, overflowY: 'auto' }}>
          <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto', padding: '28px 32px 56px' }}>
            {/* Page header lives in the content column — the chrome stays quiet */}
            <div style={{ marginBottom: 'var(--space-6)' }}>
              <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, color: 'var(--text-strong)', letterSpacing: 'var(--tracking-tight)' }}>{t.h}</h1>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--text-muted)', margin: '6px 0 0' }}>{t.sub}</p>
            </div>
            <Screen />
          </div>
        </main>
      </div>
    </div>
  );
}
window.App = App;

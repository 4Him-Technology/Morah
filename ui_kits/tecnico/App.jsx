// Morah técnico — app shell composition.
function App() {
  const [screen, setScreen] = React.useState('overview');
  const [company, setCompany] = React.useState('Todas as empresas');
  const [theme, setTheme] = React.useState(() => {
    try { return localStorage.getItem('morah-theme') || 'light'; } catch (e) { return 'light'; }
  });
  const D = window.MORAH;

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('morah-theme', theme); } catch (e) {}
  }, [theme]);

  const Screen = window.Screens[screen] || window.Screens.overview;
  const t = D.titles[screen] || D.titles.overview;

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: 'var(--bg-app)' }}>
      <Sidebar active={screen} onNavigate={setScreen} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Header screen={screen} company={company} onCompany={setCompany}
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

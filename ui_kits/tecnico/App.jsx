// Morah técnico — app shell composition.
function App() {
  const [screen, setScreen] = React.useState('overview');
  const [company, setCompany] = React.useState('Todas as empresas');

  const Screen = window.Screens[screen] || window.Screens.overview;

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: 'var(--bg-app)' }}>
      <Sidebar active={screen} onNavigate={setScreen} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <div style={{ padding: '0 0 0 0' }}>
          <Header screen={screen} company={company} onCompany={setCompany} />
        </div>
        <main style={{ flex: 1, overflowY: 'auto', padding: 'var(--space-6) var(--space-8) var(--space-10)' }}>
          <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
            <Screen />
          </div>
        </main>
      </div>
    </div>
  );
}
window.App = App;

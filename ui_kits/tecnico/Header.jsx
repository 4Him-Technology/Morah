// Morah técnico — Header bar (deep plum gradient, rounded bottom).
const { Select: DsSelect, Icon: HdrIcon } = window.MorahDesignSystem_32f810;

function Header({ screen, company, onCompany }) {
  const D = window.MORAH;
  const t = D.titles[screen] || D.titles.overview;
  return (
    <header style={{
      position: 'relative', background: 'var(--gradient-header)',
      borderRadius: '0 0 var(--radius-2xl) var(--radius-2xl)',
      padding: '22px 28px 26px', color: '#fff', overflow: 'hidden',
      boxShadow: 'var(--shadow-md)',
    }}>
      {/* subtle berry glow */}
      <div style={{ position: 'absolute', top: -120, right: -60, width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(189,111,186,0.28), transparent 70%)', pointerEvents: 'none' }}></div>

      <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 24 }}>
        <div>
          <h1 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em' }}>{t.h}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8, fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--text-on-dark)', fontWeight: 600 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--leaf-400)', boxShadow: '0 0 8px var(--leaf-400)' }}></span>
              {D.tenant.name}
            </span>
            <span style={{ color: 'var(--text-on-dark-faint)' }}>·</span>
            <span style={{ color: 'var(--text-on-dark-muted)' }}>{t.sub}</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
          <div style={{ width: 230 }}>
            <DsSelect dark value={company} onChange={(e) => onCompany(e.target.value)}
              options={['Todas as empresas', ...window.MORAH.companies.map(c => c.name)]} />
          </div>
          <button style={{
            width: 42, height: 42, borderRadius: 'var(--radius-md)', cursor: 'pointer',
            background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border-on-dark)',
            color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <HdrIcon name="bell" size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
window.Header = Header;

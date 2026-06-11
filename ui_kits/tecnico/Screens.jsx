// Morah técnico — screen content. Composes bundle primitives.
const M = window.MorahDesignSystem_32f810;
const { StatCard, Card, Button, Badge, Tabs, Input, Select, ResultBand, Icon } = M;

/* ---------- shared bits ---------- */
function PanelCard({ children, style }) {
  return (
    <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-card)', padding: 'var(--space-6)', ...style }}>{children}</div>
  );
}

function EmptyState({ icon = 'info', title, sub, tone = 'info' }) {
  const ring = { info: 'var(--info-500)', berry: 'var(--berry-500)' }[tone] || 'var(--info-500)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '64px 24px', gap: 10 }}>
      <span style={{ width: 52, height: 52, borderRadius: '50%', border: `2px solid ${ring}`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: ring }}>
        <Icon name={icon} size={24} />
      </span>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-xl)', color: 'var(--text-strong)', marginTop: 6 }}>{title}</div>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--text-muted)', maxWidth: 360 }}>{sub}</div>
    </div>
  );
}

function SectionTitle({ title, sub }) {
  return (
    <div style={{ marginBottom: 'var(--space-5)' }}>
      <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, color: 'var(--text-strong)', letterSpacing: '-0.02em' }}>{title}</h2>
      {sub && <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--text-muted)', marginTop: 4 }}>{sub}</p>}
    </div>
  );
}

/* ---------- Bar chart (Histórico de Avaliações) ---------- */
function BarChart({ chart }) {
  const W = 1040, H = 300, padL = 44, padB = 34, padT = 14;
  const innerH = H - padB - padT, innerW = W - padL - 16;
  const n = chart.values.length;
  const bw = 26;
  const yticks = [0, 4, 8, 12, 16];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 320 }}>
      {yticks.map((v) => {
        const y = padT + innerH - (v / chart.max) * innerH;
        return (
          <g key={v}>
            <line x1={padL} y1={y} x2={W - 16} y2={y} stroke="var(--border-subtle)" strokeWidth="1" />
            <text x={padL - 12} y={y + 4} textAnchor="end" fontFamily="var(--font-mono)" fontSize="12" fill="var(--text-faint)">{v}</text>
          </g>
        );
      })}
      {chart.values.map((v, i) => {
        const cx = padL + (innerW / n) * (i + 0.5);
        const bh = (v / chart.max) * innerH;
        const y = padT + innerH - bh;
        return (
          <g key={i}>
            {v > 0 && <rect x={cx - bw / 2} y={y} width={bw} height={bh} rx="6" fill="url(#barg)" />}
            <text x={cx} y={H - 12} textAnchor="middle" fontFamily="var(--font-body)" fontSize="12" fill="var(--text-muted)">{chart.labels[i]}/2026</text>
          </g>
        );
      })}
      <defs>
        <linearGradient id="barg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#BD6FBA" />
          <stop offset="1" stopColor="#8A2F82" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ---------- Overview ---------- */
function OverviewScreen() {
  const D = window.MORAH;
  const [range, setRange] = React.useState('Últimos 6 meses');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-5)' }}>
        {D.kpis.map((k) => <StatCard key={k.id} label={k.label} value={k.value} icon={k.icon} tone={k.tone} data={k.data} />)}
      </div>
      <PanelCard>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--text-strong)' }}>Histórico de Avaliações</h3>
          <div style={{ width: 168 }}><Select value={range} onChange={(e) => setRange(e.target.value)} options={['Últimos 6 meses', 'Últimos 12 meses', 'Este ano']} /></div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8, marginBottom: 4 }}>
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--berry-500)' }}></span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>Avaliações Realizadas</span>
        </div>
        <BarChart chart={D.chart} />
      </PanelCard>
    </div>
  );
}

/* ---------- Empresas ---------- */
function EmpresasScreen() {
  const D = window.MORAH;
  const [q, setQ] = React.useState('');
  const list = D.companies.filter(c => c.name.toLowerCase().includes(q.toLowerCase()) || c.cnpj.includes(q));
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 'var(--space-5)' }}>
        <SectionTitle title="Empresas Cadastradas" sub="Gerencie todas as empresas do sistema" />
        <div style={{ display: 'flex', gap: 10 }}>
          <Button variant="secondary" iconLeft="upload">Importar em Lote</Button>
          <Button variant="dark" iconLeft="plus">Nova Empresa</Button>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 14, marginBottom: 'var(--space-5)' }}>
        <div style={{ flex: 1, maxWidth: 360 }}>
          <Input icon="search" placeholder="Buscar por nome, documento ou descrição" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <div style={{ width: 150 }}><Select label="Itens por página" options={['5', '10', '25']} /></div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)' }}>
        {list.map((c, i) => (
          <Card key={i} interactive padding="var(--space-5)">
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 14 }}>
              <Icon name="building-2" size={18} color="var(--berry-500)" style={{ marginTop: 2 }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-md)', color: 'var(--text-strong)', lineHeight: 1.3 }}>{c.name}</span>
                  <Badge tone={c.tone}>{c.tag}</Badge>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginTop: 6 }}>CNPJ: {c.cnpj}</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <Button size="sm" variant="secondary" iconLeft="pencil">Editar</Button>
              <Button size="sm" variant="ghost" iconLeft="trash-2" style={{ color: 'var(--critical-500)' }}>Excluir</Button>
            </div>
          </Card>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'var(--space-5)' }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>Mostrando 1 a {list.length} de {D.companies.length} empresas</span>
        <div style={{ display: 'flex', gap: 6 }}>
          <Button size="sm" variant="ghost" iconLeft="chevron-left">Anterior</Button>
          {[1, 2, 3].map(p => (
            <button key={p} style={{ width: 34, height: 34, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-default)', cursor: 'pointer', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-sm)', background: p === 1 ? 'var(--gradient-brand)' : 'var(--surface-card)', color: p === 1 ? '#fff' : 'var(--text-body)', borderColor: p === 1 ? 'transparent' : 'var(--border-default)' }}>{p}</button>
          ))}
          <Button size="sm" variant="ghost" iconRight="chevron-right">Próximo</Button>
        </div>
      </div>
    </div>
  );
}

/* ---------- Relatórios ---------- */
function RelatoriosScreen() {
  const [tab, setTab] = React.useState(0);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
      <Tabs tabs={['Relatórios Salvos', 'Filtros de Relatório', 'Individuais']} active={tab} onChange={setTab} />
      <PanelCard style={{ padding: 0 }}>
        <EmptyState icon="alert-circle" title="Selecione uma empresa" sub="Selecione uma empresa específica no dropdown acima para visualizar os relatórios salvos." />
      </PanelCard>
    </div>
  );
}

/* ---------- Comparar Relatórios ---------- */
function CompararScreen() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
      <PanelCard>
        <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--text-strong)', marginBottom: 8 }}>Selecione os Relatórios para Comparação</h3>
        <EmptyState icon="building-2" title="Selecione uma empresa" sub="Para comparar relatórios, você precisa selecionar uma empresa específica no dashboard." />
      </PanelCard>
      <PanelCard>
        <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--text-strong)', marginBottom: 14 }}>Legenda de Interpretação dos Resultados</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)' }}>
          {[
            { lv: 'critico', desc: 'Necessita de intervenção imediata.' },
            { lv: 'atencao', desc: 'Requer atenção e melhorias.' },
            { lv: 'adequado', desc: 'Situação adequada.' },
          ].map((b, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <ResultBand level={b.lv} showRange />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)', paddingLeft: 2 }}>{b.desc}</span>
            </div>
          ))}
        </div>
      </PanelCard>
      <div style={{ textAlign: 'center', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--text-faint)', lineHeight: 1.7 }}>
        Relatório gerado pela plataforma Morah · Ferramenta de Indicador de Estresse<br />
        Dados anônimos e agregados — 11/06/2026 às 13:37:29
      </div>
    </div>
  );
}

/* ---------- Modelos de Apresentação ---------- */
function ModelosScreen() {
  const D = window.MORAH;
  return (
    <PanelCard>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 'var(--space-5)' }}>
        <SectionTitle title="Modelos de apresentação" sub="Gerencie os modelos disponíveis para download" />
        <div style={{ display: 'flex', gap: 6 }}>
          <button style={{ width: 38, height: 38, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-default)', background: 'var(--surface-card)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}><Icon name="list" size={16} /></button>
          <button style={{ width: 38, height: 38, borderRadius: 'var(--radius-sm)', border: '1px solid var(--berry-300)', background: 'var(--berry-50)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--berry-600)' }}><Icon name="layout-grid" size={16} /></button>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        {D.models.map((m, i) => (
          <div key={i} style={{ border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-4)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 14 }}>
              <span style={{ width: 40, height: 40, borderRadius: 'var(--radius-sm)', background: 'var(--info-50)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--info-500)', flexShrink: 0 }}>
                <Icon name="clipboard-list" size={19} />
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-md)', color: 'var(--text-strong)' }}>{m.t}</span>
                  <Badge tone="info">{m.kind}</Badge>
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--text-faint)', marginTop: 4 }}>{m.d}</div>
              </div>
            </div>
            <Button variant="dark" iconLeft="download" fullWidth>Acessar Modelo</Button>
          </div>
        ))}
      </div>
    </PanelCard>
  );
}

/* ---------- Termos ---------- */
function TermosScreen() {
  const D = window.MORAH;
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <PanelCard style={{ maxWidth: 560, width: '100%' }}>
        <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--text-strong)', marginBottom: 12 }}>Termos de Aceite</h3>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 14 }}>
          Usuário: {D.tenant.tech} ({D.tenant.email})<br />
          Status: <span style={{ color: 'var(--success-700)', fontWeight: 700 }}>Aceito</span><br />
          Aceito em: 06/05/2026, 18:14:13
        </div>
        <div style={{ background: 'var(--gray-50)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-4)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 1.7, height: 220, overflow: 'auto' }}>
          <strong>TERMOS DE USO DA PLATAFORMA MORAH — LICENCIAMENTO PARA REVENDA E APLICAÇÃO</strong>
          <p>1. ACEITAÇÃO DOS TERMOS</p>
          <p>Ao utilizar a plataforma "Morah" o USUÁRIO concorda integralmente com as condições de uso, captura e tratamento de dados psicossociais conforme a NR-1, garantindo a anonimização e agregação dos resultados.</p>
          <p>2. LICENÇA DE USO. A licença concede ao técnico de segurança do trabalho o direito de aplicar avaliações, gerar relatórios e gerenciar empresas vinculadas à sua conta.</p>
        </div>
        <div style={{ marginTop: 16 }}><Button variant="primary" iconLeft="file-text">Visualizar PDF</Button></div>
      </PanelCard>
    </div>
  );
}

function SelectCompanyScreen({ what }) {
  return (
    <PanelCard style={{ padding: 0 }}>
      <EmptyState icon="info" title="Selecione uma empresa" sub={`Para gerenciar ${what}, selecione uma empresa no dropdown acima.`} />
    </PanelCard>
  );
}

window.Screens = {
  overview: OverviewScreen,
  empresas: EmpresasScreen,
  relatorios: RelatoriosScreen,
  comparar: CompararScreen,
  modelos: ModelosScreen,
  termos: TermosScreen,
  setor: () => <SelectCompanyScreen what="setores" />,
  cargos: () => <SelectCompanyScreen what="cargos" />,
  campanhas: () => <SelectCompanyScreen what="campanhas" />,
  link: () => <SelectCompanyScreen what="o link de avaliação" />,
};

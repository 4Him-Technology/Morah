// Morah técnico — screen content. Composes bundle primitives.
const M = window.MorahDesignSystem_32f810;
const { StatCard, Card, Button, Badge, Tabs, Input, Select, ResultBand, Icon } = M;

/* ---------- shared bits ---------- */
function PanelCard({ children, style }) {
  return (
    <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-card)', padding: 'var(--space-6)', ...style }}>{children}</div>
  );
}

function EmptyState({ icon = 'info', title, sub, tone = 'neutral' }) {
  const tones = {
    neutral: { bg: 'var(--gray-100)',  fg: 'var(--text-muted)' },
    info:    { bg: 'var(--info-50)',   fg: 'var(--info-500)' },
    berry:   { bg: 'var(--berry-50)',  fg: 'var(--berry-600)' },
  };
  const t = tones[tone] || tones.neutral;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '56px 24px', gap: 8 }}>
      <span style={{ width: 46, height: 46, borderRadius: 'var(--radius-md)', background: t.bg, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: t.fg, marginBottom: 6 }}>
        <Icon name={icon} size={21} />
      </span>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-lg)', color: 'var(--text-strong)' }}>{title}</div>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)', maxWidth: 380, lineHeight: 1.6 }}>{sub}</div>
    </div>
  );
}

function PanelTitle({ title, sub, right }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 'var(--space-5)' }}>
      <div>
        <h3 style={{ fontSize: 'var(--text-md)', fontWeight: 700, color: 'var(--text-strong)' }}>{title}</h3>
        {sub && <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)', margin: '4px 0 0' }}>{sub}</p>}
      </div>
      {right}
    </div>
  );
}

/* ---------- Bar chart (Histórico de Avaliações) ---------- */
function BarChart({ chart }) {
  const W = 1040, H = 280, padL = 40, padB = 30, padT = 18;
  const innerH = H - padB - padT, innerW = W - padL - 12;
  const n = chart.values.length;
  const bw = 22;
  const yticks = [0, 4, 8, 12, 16];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 300 }}>
      {yticks.map((v) => {
        const y = padT + innerH - (v / chart.max) * innerH;
        return (
          <g key={v}>
            <line x1={padL} y1={y} x2={W - 12} y2={y} stroke="var(--gray-100)" strokeWidth="1" />
            <text x={padL - 12} y={y + 4} textAnchor="end" fontFamily="var(--font-mono)" fontSize="11" fill="var(--text-faint)">{v}</text>
          </g>
        );
      })}
      {chart.values.map((v, i) => {
        const cx = padL + (innerW / n) * (i + 0.5);
        const bh = (v / chart.max) * innerH;
        const y = padT + innerH - bh;
        return (
          <g key={i}>
            {v > 0 && <rect x={cx - bw / 2} y={y} width={bw} height={bh} rx="5" fill="var(--berry-500)" />}
            {v > 0 && <text x={cx} y={y - 8} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="var(--text-muted)">{v}</text>}
            {v === 0 && <line x1={cx - bw / 2} y1={padT + innerH} x2={cx + bw / 2} y2={padT + innerH} stroke="var(--gray-300)" strokeWidth="2" strokeLinecap="round" />}
            <text x={cx} y={H - 8} textAnchor="middle" fontFamily="var(--font-body)" fontSize="11.5" fill="var(--text-muted)">{chart.labels[i]}/2026</text>
          </g>
        );
      })}
    </svg>
  );
}

/* ---------- Overview ---------- */
function OverviewScreen() {
  const D = window.MORAH;
  const [range, setRange] = React.useState('Últimos 6 meses');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-4)' }}>
        {D.kpis.map((k) => <StatCard key={k.id} label={k.label} value={k.value} icon={k.icon} tone={k.tone} data={k.data} />)}
      </div>
      <PanelCard>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 16 }}>
          <h3 style={{ fontSize: 'var(--text-md)', fontWeight: 700, color: 'var(--text-strong)' }}>Histórico de Avaliações</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
              <span style={{ width: 8, height: 8, borderRadius: 2, background: 'var(--berry-500)' }}></span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>Avaliações Realizadas</span>
            </span>
            <div style={{ width: 168 }}><Select value={range} onChange={(e) => setRange(e.target.value)} options={['Últimos 6 meses', 'Últimos 12 meses', 'Este ano']} /></div>
          </div>
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
      {/* Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 'var(--space-5)', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 240, maxWidth: 360 }}>
          <Input icon="search" placeholder="Buscar por nome ou CNPJ" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <div style={{ width: 86 }}><Select options={['10', '5', '25']} /></div>
        <div style={{ flex: 1 }}></div>
        <Button variant="secondary" iconLeft="upload">Importar em Lote</Button>
        <Button variant="primary" iconLeft="plus">Nova Empresa</Button>
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)' }}>
        {list.map((c, i) => (
          <Card key={i} interactive padding="var(--space-5)" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, flex: 1 }}>
              <span style={{ width: 36, height: 36, borderRadius: 'var(--radius-sm)', background: 'var(--berry-50)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--berry-600)', flexShrink: 0 }}>
                <Icon name="building-2" size={17} />
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <span style={{ flex: 1, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-base)', color: 'var(--text-strong)', lineHeight: 1.35 }}>{c.name}</span>
                  <Badge tone={c.tone}>{c.tag}</Badge>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginTop: 7 }}>{c.cnpj}</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 4, marginTop: 'auto', paddingTop: 10, borderTop: '1px solid var(--gray-100)' }}>
              <Button size="sm" variant="ghost" iconLeft="pencil" style={{ color: 'var(--text-body)' }}>Editar</Button>
              <Button size="sm" variant="ghost" iconLeft="trash-2" style={{ color: 'var(--critical-500)' }}>Excluir</Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'var(--space-5)' }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>Mostrando 1 a {list.length} de {D.companies.length} empresas</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <Button size="sm" variant="ghost" iconLeft="chevron-left">Anterior</Button>
          {[1, 2, 3].map(p => (
            <button key={p} style={{
              width: 32, height: 32, borderRadius: 'var(--radius-sm)', cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-sm)',
              background: p === 1 ? 'var(--berry-600)' : 'var(--surface-card)',
              color: p === 1 ? '#fff' : 'var(--text-body)',
              border: p === 1 ? '1px solid transparent' : '1px solid var(--border-subtle)',
            }}>{p}</button>
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
        <EmptyState icon="info" title="Selecione uma empresa" sub="Selecione uma empresa específica no seletor de empresas, no topo da página, para visualizar os relatórios salvos." />
      </PanelCard>
    </div>
  );
}

/* ---------- Comparar Relatórios ---------- */
function CompararScreen() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
      <PanelCard>
        <PanelTitle title="Selecione os Relatórios para Comparação" />
        <EmptyState icon="building-2" title="Selecione uma empresa" sub="Para comparar relatórios, selecione uma empresa específica no seletor de empresas, no topo da página." />
      </PanelCard>
      <PanelCard>
        <PanelTitle title="Legenda de Interpretação dos Resultados" />
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
        Relatório gerado pela plataforma Moorah · Ferramenta de Indicador de Estresse<br />
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
      <PanelTitle
        title="Biblioteca de Modelos"
        sub={`${D.models.length} itens`}
        right={
          <div style={{ display: 'flex', gap: 6 }}>
            <button aria-label="Ver em lista" style={{ width: 34, height: 34, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', background: 'var(--surface-card)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-faint)' }}><Icon name="list" size={15} /></button>
            <button aria-label="Ver em grade" style={{ width: 34, height: 34, borderRadius: 'var(--radius-sm)', border: '1px solid var(--berry-200)', background: 'var(--berry-50)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--berry-600)' }}><Icon name="layout-grid" size={15} /></button>
          </div>
        }
      />
      <div>
        {D.models.map((m, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 14, padding: '14px 2px',
            borderBottom: i < D.models.length - 1 ? '1px solid var(--gray-100)' : 'none',
          }}>
            <span style={{ width: 38, height: 38, borderRadius: 'var(--radius-sm)', background: 'var(--berry-50)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--berry-600)', flexShrink: 0 }}>
              <Icon name={m.kind === 'Vídeo' ? 'play' : m.kind === 'Slides' ? 'presentation' : 'file-text'} size={17} />
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-base)', color: 'var(--text-strong)', lineHeight: 1.35 }}>{m.t}</span>
                <Badge tone="info">{m.kind}</Badge>
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--text-faint)', marginTop: 3 }}>Adicionado em {m.d}</div>
            </div>
            <Button size="sm" variant="secondary" iconLeft={m.kind === 'Vídeo' ? 'play' : 'download'} style={{ flexShrink: 0 }}>{m.kind === 'Vídeo' ? 'Assistir' : 'Baixar'}</Button>
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
    <PanelCard style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 6 }}>
        <div>
          <h3 style={{ fontSize: 'var(--text-md)', fontWeight: 700, color: 'var(--text-strong)' }}>Termos de Uso da Plataforma</h3>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 1.8, marginTop: 6 }}>
            Usuário: {D.tenant.tech} ({D.tenant.email}) · Aceito em: <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-body)' }}>06/05/2026, 18:14:13</span>
          </div>
        </div>
        <Badge tone="success" style={{ marginTop: 3 }}>Aceito</Badge>
      </div>
      <div style={{
        background: 'var(--gray-50)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)',
        padding: 'var(--space-6) var(--space-8)', marginTop: 14,
        fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 1.75,
        height: 'calc(100vh - 440px)', minHeight: 320, overflow: 'auto',
      }}>
        <strong>TERMOS DE USO DA PLATAFORMA MOORAH — LICENCIAMENTO PARA REVENDA E APLICAÇÃO</strong>
        <p><strong>1. ACEITAÇÃO DOS TERMOS.</strong> Ao utilizar a plataforma "Moorah" o USUÁRIO concorda integralmente com as condições de uso, captura e tratamento de dados psicossociais conforme a NR-1, garantindo a anonimização e agregação dos resultados.</p>
        <p><strong>2. LICENÇA DE USO.</strong> A licença concede ao técnico de segurança do trabalho o direito de aplicar avaliações, gerar relatórios e gerenciar empresas vinculadas à sua conta, dentro do limite de avaliações contratado.</p>
        <p><strong>3. PROTEÇÃO DE DADOS (LGPD).</strong> O tratamento de dados pessoais observa a Lei nº 13.709/2018. As respostas individuais são anonimizadas na coleta e apresentadas exclusivamente de forma agregada; a plataforma não permite a identificação de respondentes nos relatórios, painéis ou exportações.</p>
        <p><strong>4. RESPONSABILIDADES DO USUÁRIO.</strong> O USUÁRIO compromete-se a aplicar os instrumentos de avaliação conforme as orientações técnicas da plataforma, a manter sigilo sobre suas credenciais de acesso e a utilizar os resultados unicamente para fins de gestão de riscos psicossociais no âmbito do PGR.</p>
        <p><strong>5. PROPRIEDADE INTELECTUAL.</strong> Os instrumentos, metodologias de interpretação, marca e materiais de apoio disponibilizados são de titularidade da Moorah, sendo vedada a reprodução ou redistribuição fora do escopo da licença contratada.</p>
        <p><strong>6. VIGÊNCIA E RESCISÃO.</strong> Estes termos vigoram enquanto durar a relação contratual. O descumprimento das cláusulas acima autoriza a suspensão imediata do acesso, sem prejuízo das demais medidas cabíveis.</p>
        <p><strong>7. DISPOSIÇÕES GERAIS.</strong> Dúvidas sobre estes termos ou sobre o tratamento de dados podem ser encaminhadas ao encarregado de dados indicado no contrato de licenciamento.</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 16 }}>
        <Button variant="primary" iconLeft="file-text">Visualizar PDF</Button>
        <Button variant="secondary" iconLeft="download">Baixar PDF</Button>
      </div>
    </PanelCard>
  );
}

function SelectCompanyScreen({ what }) {
  return (
    <PanelCard style={{ padding: 0 }}>
      <EmptyState icon="info" title="Selecione uma empresa" sub={`Para gerenciar ${what}, selecione uma empresa no seletor de empresas, no topo da página.`} />
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

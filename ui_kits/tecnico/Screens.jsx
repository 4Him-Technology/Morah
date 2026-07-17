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
  const lerAvaliacoes = () => { try { return JSON.parse(localStorage.getItem('morah-avaliacoes') || '[]'); } catch (e) { return []; } };
  const [avaliacoes, setAvaliacoes] = React.useState(lerAvaliacoes);
  const [recorte, setRecorte] = React.useState('Todos os setores');

  const M = window.MorahMotor;
  const agg = React.useMemo(() => M.calcular(avaliacoes), [avaliacoes]);

  const gerarDemo = () => {
    const demo = M.gerarDemo();
    const tudo = [...avaliacoes, ...demo];
    try { localStorage.setItem('morah-avaliacoes', JSON.stringify(tudo)); } catch (e) {}
    setAvaliacoes(tudo);
  };
  const limparDemo = () => {
    const reais = avaliacoes.filter((a) => !a.demo);
    try { localStorage.setItem('morah-avaliacoes', JSON.stringify(reais)); } catch (e) {}
    setAvaliacoes(reais);
    setRecorte('Todos os setores');
  };

  if (!agg.n) {
    return (
      <PanelCard style={{ padding: 0 }}>
        <EmptyState icon="bar-chart-3" title="Ainda não há respostas" sub="Envie o questionário aos colaboradores para gerar o diagnóstico — ou gere dados de demonstração para conhecer o relatório." />
        <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 'var(--space-6)' }}>
          <Button variant="secondary" iconLeft="sparkles" onClick={gerarDemo}>Gerar dados de demonstração</Button>
        </div>
      </PanelCard>
    );
  }

  // Recorte selecionado (k-anonimato aplicado pelo motor)
  const opcoes = ['Todos os setores', ...agg.recortes.map((r) => r.setor + (r.suficiente ? '' : ' (n<' + agg.kAnonimato + ' — oculto)'))];
  const recSel = agg.recortes.find((r) => recorte.indexOf(r.setor) === 0);
  const bloqueado = recSel && !recSel.suficiente;
  const res = recSel && recSel.suficiente ? recSel.resultado : agg.global;
  const nExibido = recSel && recSel.suficiente ? recSel.n : agg.n;

  const temDemo = avaliacoes.some((a) => a.demo);
  const totalBandeiras = res ? res.bandeiras.length : 0;

  const NivelRow = ({ nome, detalhe, nivel }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 4px', borderTop: '1px solid var(--gray-100)' }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-base)', color: 'var(--text-strong)' }}>{nome}</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', color: 'var(--text-muted)' }}>{detalhe}</div>
      </div>
      {nivel ? <ResultBand level={nivel} /> : <Badge tone="neutral">Sem dados</Badge>}
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
      {/* Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
        <div style={{ width: 260 }}>
          <Select value={recorte} onChange={(e) => setRecorte(e.target.value)} options={opcoes} />
        </div>
        <Badge tone="berry">{nExibido} resposta(s)</Badge>
        {!agg.amostraSuficiente && <Badge tone="warning" solid>Amostra &lt; {agg.kAnonimato} — modo de teste</Badge>}
        <div style={{ flex: 1 }}></div>
        <Button variant="primary" iconLeft="file-text" onClick={() => window.open('../../avaliacao/laudo.html', '_blank')}>Abrir laudo (PDF)</Button>
        {temDemo
          ? <Button variant="ghost" iconLeft="trash-2" onClick={limparDemo}>Limpar dados de teste</Button>
          : <Button variant="ghost" iconLeft="sparkles" onClick={gerarDemo}>Gerar dados de demonstração</Button>}
      </div>

      {bloqueado ? (
        <PanelCard style={{ padding: 0 }}>
          <EmptyState icon="lock" title="Recorte protegido por anonimato" sub={'Este setor tem menos de ' + agg.kAnonimato + ' respondentes. Para proteger o anonimato (k-anonimato), os resultados só são exibidos com ' + agg.kAnonimato + ' ou mais respostas.'} />
        </PanelCard>
      ) : (
        <React.Fragment>
          {/* KPIs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)' }}>
            <StatCard label="Respostas" value={String(nExibido)} icon="clipboard-list" tone="berry" />
            <StatCard label="Dimensões críticas" value={String(res.dimensoesCriticas)} icon="alert-triangle" tone={res.dimensoesCriticas ? 'amber' : 'green'} />
            <StatCard label="Bandeiras de alerta" value={String(totalBandeiras)} icon="flag" tone={totalBandeiras ? 'amber' : 'green'} />
          </div>

          {/* Bandeiras */}
          {totalBandeiras > 0 && (
            <PanelCard>
              <PanelTitle title="Bandeiras de alerta imediato" sub="Gatilhos que independem do score — tratar prioritariamente no plano de ação" />
              {res.bandeiras.map((b, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '10px 4px', borderTop: '1px solid var(--gray-100)', alignItems: 'flex-start' }}>
                  <span style={{ marginTop: 2, color: b.nivel === 'critico' ? 'var(--critical-500)' : 'var(--warning-500)' }}><Icon name="flag" size={16} /></span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-base)', color: 'var(--text-strong)' }}>{b.titulo}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)', margin: '2px 0' }}>{b.detalhe}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--berry-700)', fontWeight: 600 }}>Ação sugerida: {b.acao}</div>
                  </div>
                  <ResultBand level={b.nivel} />
                </div>
              ))}
            </PanelCard>
          )}

          {/* Núcleo COPSOQ */}
          <PanelCard>
            <PanelTitle title="Dimensões COPSOQ II-Br" sub="Núcleo validado — classificação por tercis da faixa teórica, respeitando a direção do risco" />
            {res.nucleo.map((d) => (
              <NivelRow key={d.id} nome={d.nome} nivel={d.nivel}
                detalhe={(d.media === null ? '—' : d.media + ' / ' + d.max) + ' · ' + (d.dir === 'risco' ? 'maior = pior' : 'maior = melhor')} />
            ))}
          </PanelCard>

          {/* Indicadores Moorah */}
          <PanelCard>
            <PanelTitle title="Indicadores Moorah" sub="Índice de risco 0–4 (itens de proteção invertidos) · cortes 1,33 / 2,67" />
            {res.moorah.map((m) => (
              <NivelRow key={m.id} nome={m.nome} nivel={m.nivel}
                detalhe={m.indice === null ? 'sem respostas aplicáveis' : 'índice ' + m.indice.toFixed(2) + ' / 4'} />
            ))}
          </PanelCard>

          {/* Exposições */}
          <PanelCard>
            <PanelTitle title="Comportamentos ofensivos e violência" sub="Últimos 12 meses — qualquer exposição gera acompanhamento" />
            {res.ofensivos.map((o) => (
              <div key={o.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '9px 4px', borderTop: '1px solid var(--gray-100)' }}>
                <div style={{ flex: 1, fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--text-strong)' }}>{o.nome}</div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{o.expostos} relato(s) · {o.pct}%</span>
                {o.expostos === 0 ? <Badge tone="success" solid>Sem relatos</Badge> : o.recorrentes > 0 ? <Badge tone="critical" solid>Recorrente</Badge> : <Badge tone="warning" solid>Pontual</Badge>}
              </div>
            ))}
          </PanelCard>

          {/* Voz do trabalhador */}
          {res.vozes.length > 0 && (
            <PanelCard>
              <PanelTitle title="Voz do trabalhador" sub="Relatos abertos, exibidos sem identificação" />
              {res.vozes.map((v, i) => (
                <div key={i} style={{ padding: '9px 4px', borderTop: '1px solid var(--gray-100)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-body)', fontStyle: 'italic' }}>
                  “{v.texto}”
                </div>
              ))}
            </PanelCard>
          )}

          <div style={{ textAlign: 'center', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--text-faint)', lineHeight: 1.7 }}>
            Relatório gerado pela plataforma Moorah · Questionário Moorah v1.0 (núcleo COPSOQ II-Br)<br />
            Dados anônimos e agregados — recortes exibidos apenas com n ≥ {agg.kAnonimato}
          </div>
        </React.Fragment>
      )}
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

function EstruturaScreen({ what }) {
  return (
    <PanelCard style={{ padding: 0 }}>
      <EmptyState icon="layers" title={`Gestão de ${what}`} sub={`Cadastre e organize ${what} da empresa. Esta funcionalidade será liberada com a integração ao banco de dados (em breve).`} />
    </PanelCard>
  );
}

/* ---------- Colaborador: Questionários Pendentes ---------- */
function PendentesScreen() {
  const [respondido, setRespondido] = React.useState(() => {
    try { return localStorage.getItem('morah-avaliacao-ok') === '1'; } catch (e) { return false; }
  });
  const url = new URL('../../avaliacao/', window.location.href).href;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
      <PanelCard>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
          <span style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'var(--berry-50)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--berry-600)', flexShrink: 0 }}>
            <Icon name="clipboard-list" size={20} />
          </span>
          <div style={{ flex: 1, minWidth: 220 }}>
            <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-md)', color: 'var(--text-strong)' }}>Avaliação Psicossocial — NR-1</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginTop: 2 }}>
              Questionário Moorah v1.0 · anônimo · 15 a 20 minutos
            </div>
          </div>
          {respondido
            ? <Badge tone="success" solid>Respondido</Badge>
            : <Badge tone="warning" solid>Pendente</Badge>}
          <Button variant={respondido ? 'secondary' : 'primary'} iconLeft="play-circle"
            onClick={() => window.open(url, '_blank')}>
            {respondido ? 'Responder novamente' : 'Responder agora'}
          </Button>
        </div>
      </PanelCard>
      <PanelCard>
        <PanelTitle title="Sobre a sua participação" />
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 1.7 }}>
          Suas respostas são <b>anônimas</b> — os resultados são calculados por grupos e nenhuma resposta
          individual pode ser identificada. A participação é voluntária e avalia as condições do ambiente
          de trabalho, não o seu desempenho. Recortes só são exibidos com 5 ou mais respondentes.
        </div>
      </PanelCard>
    </div>
  );
}

/* ---------- Colaborador: Canal de Denúncias (Lei 14.457/22) ---------- */
function DenunciaScreen() {
  const CATEGORIAS = ['Assédio moral', 'Assédio sexual', 'Discriminação', 'Violência ou ameaça', 'Sobrecarga ou condições de trabalho', 'Outro'];
  const [categoria, setCategoria] = React.useState(CATEGORIAS[0]);
  const [relato, setRelato] = React.useState('');
  const [erro, setErro] = React.useState('');
  const [protocolo, setProtocolo] = React.useState(null);

  const enviar = () => {
    if (relato.trim().length < 10) { setErro('Descreva a situação com um pouco mais de detalhe para que ela possa ser apurada.'); return; }
    const p = 'MD-' + Date.now().toString(36).toUpperCase();
    try {
      const arr = JSON.parse(localStorage.getItem('morah-denuncias') || '[]');
      arr.push({ protocolo: p, categoria, relato: relato.trim(), em: new Date().toISOString() });
      localStorage.setItem('morah-denuncias', JSON.stringify(arr));
    } catch (e) {}
    setProtocolo(p);
  };

  if (protocolo) {
    return (
      <PanelCard>
        <div style={{ textAlign: 'center', padding: 'var(--space-6) 0' }}>
          <span style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--success-50)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--success-500)', marginBottom: 14 }}>
            <Icon name="check" size={26} />
          </span>
          <div style={{ fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 'var(--text-xl)', color: 'var(--text-strong)' }}>Relato registrado com sigilo</div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)', margin: '8px auto 0', maxWidth: 480, lineHeight: 1.7 }}>
            Guarde o seu protocolo para acompanhamento:&nbsp;
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--berry-700)' }}>{protocolo}</span><br />
            O relato será tratado com confidencialidade e sem retaliação, conforme a Lei 14.457/22.
          </div>
          <div style={{ marginTop: 18 }}>
            <Button variant="secondary" onClick={() => { setProtocolo(null); setRelato(''); setErro(''); }}>Registrar outro relato</Button>
          </div>
        </div>
      </PanelCard>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
      <PanelCard>
        <PanelTitle title="Registrar relato" sub="Canal sigiloso e sem retaliação (Lei 14.457/22). Você não precisa se identificar." />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 640 }}>
          <div style={{ width: 320, maxWidth: '100%' }}>
            <Select value={categoria} onChange={(e) => setCategoria(e.target.value)} options={CATEGORIAS} />
          </div>
          <textarea value={relato} onChange={(e) => { setRelato(e.target.value); setErro(''); }}
            placeholder="Descreva a situação: o que aconteceu, onde, quando e com que frequência. Não é necessário se identificar."
            style={{
              width: '100%', minHeight: 140, resize: 'vertical', padding: '12px 14px',
              fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--text-strong)',
              background: 'var(--surface-card)', border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-control)', outline: 'none',
            }} />
          {erro && <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--critical-500)', fontWeight: 600 }}>{erro}</div>}
          <div>
            <Button variant="primary" iconLeft="send" onClick={enviar}>Enviar relato</Button>
          </div>
        </div>
      </PanelCard>
      <PanelCard>
        <PanelTitle title="Como o seu relato é tratado" />
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 1.7 }}>
          O relato chega apenas ao comitê responsável pela apuração, com registro de protocolo e prazo de retorno.
          A empresa é proibida de retaliar quem relata de boa-fé. Em situação de risco imediato, procure
          também a liderança direta, o RH ou os canais públicos (Disque 100 / 180).
        </div>
      </PanelCard>
    </div>
  );
}

/* ---------- Enviar Questionário ---------- */
function EnvioScreen() {
  const KEY = 'morah-colaboradores';
  const ler = () => { try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (e) { return []; } };
  const [lista, setLista] = React.useState(ler);
  const [form, setForm] = React.useState({ nome: '', email: '', fone: '', setor: '' });
  const [erro, setErro] = React.useState('');
  const baseUrl = new URL('../../avaliacao/', window.location.href).href;

  const salvar = (l) => { setLista(l); try { localStorage.setItem(KEY, JSON.stringify(l)); } catch (e) {} };
  const novoToken = () => Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 8);
  const linkDe = (c) => baseUrl + '?t=' + c.token;

  // Sincroniza status "respondido" a partir das respostas locais (demo; na AWS vem da API)
  React.useEffect(() => {
    try {
      const envios = JSON.parse(localStorage.getItem('morah-avaliacoes') || '[]');
      const toks = new Set(envios.map((e) => e.convite).filter(Boolean));
      if (toks.size && lista.some((c) => toks.has(c.token) && c.status !== 'resp')) {
        salvar(lista.map((c) => (toks.has(c.token) ? { ...c, status: 'resp' } : c)));
      }
    } catch (e) {}
  }, []);

  const adicionar = () => {
    if (!form.nome.trim()) { setErro('Informe o nome do colaborador.'); return; }
    if (!form.email.trim() && !form.fone.trim()) { setErro('Informe e-mail ou WhatsApp para o envio.'); return; }
    setErro('');
    salvar([...lista, {
      id: Date.now(), token: novoToken(), status: 'nao',
      nome: form.nome.trim(), email: form.email.trim(), fone: form.fone.trim(), setor: form.setor.trim(),
    }]);
    setForm({ nome: '', email: '', fone: '', setor: '' });
  };
  const marcar = (c, status) => salvar(lista.map((x) => (x.id === c.id ? { ...x, status } : x)));
  const remover = (c) => salvar(lista.filter((x) => x.id !== c.id));

  const mensagem = (c) => 'Olá, ' + c.nome.split(' ')[0] + '! Você foi convidado(a) a responder a Avaliação do Ambiente de Trabalho da sua empresa. É anônima e leva cerca de 15 minutos. Acesse: ' + linkDe(c);
  const viaWhats = (c) => {
    const d = c.fone.replace(/\D/g, '');
    const n = d.length <= 11 ? '55' + d : d;
    window.open('https://wa.me/' + n + '?text=' + encodeURIComponent(mensagem(c)), '_blank');
    if (c.status === 'nao') marcar(c, 'env');
  };
  const viaEmail = (c) => {
    window.open('mailto:' + c.email + '?subject=' + encodeURIComponent('Avaliação do Ambiente de Trabalho — sua participação é importante') + '&body=' + encodeURIComponent(mensagem(c)));
    if (c.status === 'nao') marcar(c, 'env');
  };
  const copiarLink = (c) => {
    navigator.clipboard.writeText(linkDe(c));
    if (c.status === 'nao') marcar(c, 'env');
  };

  const StatusBadge = ({ s }) => (
    s === 'resp' ? <Badge tone="success" solid>Respondido</Badge>
    : s === 'env' ? <Badge tone="info">Enviado</Badge>
    : <Badge tone="neutral">Não enviado</Badge>
  );

  const respondidos = lista.filter((c) => c.status === 'resp').length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
      <PanelCard>
        <PanelTitle title="Cadastrar colaborador" sub="O convite individual é gerado com um link único. O envio marca o status; as respostas continuam anônimas e desvinculadas da identidade." />
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.2fr 1fr 1fr auto', gap: 10, alignItems: 'center' }}>
          <Input placeholder="Nome completo" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} />
          <Input placeholder="E-mail" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <Input placeholder="WhatsApp (DDD + número)" value={form.fone} onChange={(e) => setForm({ ...form, fone: e.target.value })} />
          <Input placeholder="Setor" value={form.setor} onChange={(e) => setForm({ ...form, setor: e.target.value })} />
          <Button variant="primary" iconLeft="plus" onClick={adicionar}>Adicionar</Button>
        </div>
        {erro && <div style={{ marginTop: 8, fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--critical-500)', fontWeight: 600 }}>{erro}</div>}
      </PanelCard>

      <PanelCard>
        <PanelTitle title="Colaboradores" sub={lista.length + ' cadastrado(s) · ' + respondidos + ' respondido(s)'} />
        {lista.length === 0 ? (
          <EmptyState icon="users" title="Nenhum colaborador cadastrado" sub="Cadastre acima para enviar o questionário por e-mail ou WhatsApp." />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {lista.map((c) => (
              <div key={c.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 4px', borderTop: '1px solid var(--gray-100)' }}>
                <div style={{ flex: 1.4, minWidth: 0 }}>
                  <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-base)', color: 'var(--text-strong)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.nome}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {[c.email, c.fone, c.setor].filter(Boolean).join(' · ')}
                  </div>
                </div>
                <StatusBadge s={c.status} />
                {c.fone ? <Button size="sm" variant="leaf" iconLeft="message-circle" onClick={() => viaWhats(c)}>WhatsApp</Button> : null}
                {c.email ? <Button size="sm" variant="secondary" iconLeft="mail" onClick={() => viaEmail(c)}>E-mail</Button> : null}
                <Button size="sm" variant="ghost" iconLeft="copy" onClick={() => copiarLink(c)}>Link</Button>
                <Button size="sm" variant="ghost" iconLeft="trash-2" style={{ color: 'var(--critical-500)' }} onClick={() => remover(c)} />
              </div>
            ))}
          </div>
        )}
      </PanelCard>

      <PanelCard>
        <PanelTitle title="Como funciona o envio" />
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 1.7 }}>
          Cada colaborador recebe um <b>link único</b> (token de convite) que permite acompanhar quem já respondeu —
          sem nunca vincular a resposta à pessoa: os relatórios são sempre agregados (mínimo 5 respondentes por recorte).
          Nesta fase de teste, os botões abrem o WhatsApp/e-mail com a mensagem pronta; com a integração AWS,
          o disparo passa a ser automático (Amazon SES) e o status "Respondido" é atualizado em tempo real.
          Questionário Moorah v1.0 — 75 itens · núcleo COPSOQ II-Br + módulos Moorah · 15 a 20 minutos.
        </div>
      </PanelCard>
    </div>
  );
}

window.Screens = {
  overview: OverviewScreen,
  empresas: EmpresasScreen,
  relatorios: RelatoriosScreen,
  comparar: CompararScreen,
  modelos: ModelosScreen,
  termos: TermosScreen,
  setor: () => <EstruturaScreen what="os setores" />,
  cargos: () => <EstruturaScreen what="os cargos" />,
  unidades: () => <EstruturaScreen what="as unidades" />,
  departamentos: () => <EstruturaScreen what="os departamentos" />,
  campanhas: () => <EstruturaScreen what="as campanhas" />,
  link: EnvioScreen,
  pendentes: PendentesScreen,
  denuncia: DenunciaScreen,
};

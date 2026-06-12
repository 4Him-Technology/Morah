// Morah técnico — demo data (plain JS, loaded before the JSX scripts)
window.MORAH = {
  tenant: { name: 'Clínica Pedrosa', tech: 'Lucas C. Pedrosa Marques', email: 'tec.pedrosa@gmail.com', role: 'Administrador' },

  nav: {
    navegacao: [
      { id: 'overview',   icon: 'layout-grid', label: 'Visão Geral' },
      { id: 'termos',     icon: 'file-text',   label: 'Termos de Aceite' },
      { id: 'empresas',   icon: 'building-2',  label: 'Empresas' },
      { id: 'setor',      icon: 'layers',      label: 'Setores' },
      { id: 'cargos',     icon: 'briefcase',   label: 'Cargos' },
      { id: 'campanhas',  icon: 'calendar-range', label: 'Campanhas' },
      { id: 'relatorios', icon: 'bar-chart-3', label: 'Relatórios' },
    ],
    ferramentas: [
      { id: 'link',     icon: 'link-2',         label: 'Link de Avaliação' },
      { id: 'comparar', icon: 'arrow-left-right',label: 'Comparar Relatórios' },
      { id: 'modelos',  icon: 'clipboard-list', label: 'Modelos de Apresentação' },
    ],
  },

  titles: {
    overview:   { h: 'Visão Geral',            sub: 'Acompanhe os indicadores das suas avaliações' },
    termos:     { h: 'Termos de Aceite',       sub: 'Status do aceite dos termos de uso da plataforma' },
    empresas:   { h: 'Empresas',               sub: 'Gerencie as empresas vinculadas à sua conta' },
    setor:      { h: 'Setores',                sub: 'Estruture as empresas por setor' },
    cargos:     { h: 'Cargos',                 sub: 'Gerencie os cargos de cada setor' },
    campanhas:  { h: 'Campanhas',              sub: 'Organize os períodos de avaliação' },
    relatorios: { h: 'Relatórios',             sub: 'Resultados e interpretações das avaliações' },
    link:       { h: 'Link de Avaliação',      sub: 'Compartilhe o link anônimo com os colaboradores' },
    comparar:   { h: 'Comparar Relatórios',    sub: 'Evolução dos resultados entre períodos' },
    modelos:    { h: 'Modelos de Apresentação',sub: 'Materiais de apoio para download' },
  },

  companies: [
    { name: 'AUTO POSTO NOVA AÇAILANDIA LTDA', cnpj: '12.811.039/0001-78', tag: 'SETOR', tone: 'neutral' },
    { name: 'DG SPORTS', cnpj: '29.956.077/0001-11', tag: 'SETOR', tone: 'neutral' },
    { name: 'ESCOLA ARCO ÍRIS', cnpj: '41.534.414/0001-88', tag: 'SETOR', tone: 'neutral' },
    { name: 'F&S ASSESSORIA E CONSULTORIA - UNF MA', cnpj: '16.568.488/0001-98', tag: 'GHE', tone: 'berry' },
    { name: 'F&S ASSESSORIA E CONSULTORIA - UNF MS', cnpj: '16.568.488/0001-98', tag: 'GES', tone: 'info' },
    { name: 'TRANSPORTES VALE VERDE', cnpj: '33.402.118/0001-04', tag: 'SETOR', tone: 'neutral' },
  ],

  models: [
    { t: 'Vídeo Aula: Implementação da Plataforma (Como colocar no PGR)', d: '03/06/2026', kind: 'Vídeo' },
    { t: 'Interpretação das Perguntas (Copsoq II Versão Curta)', d: '28/05/2026', kind: 'PDF' },
    { t: 'Formulário de avaliação manual para impressão', d: '21/05/2026', kind: 'PDF' },
    { t: 'Manual de interpretação e aplicação do capítulo 1.5 da NR-1', d: '14/05/2026', kind: 'PDF' },
    { t: 'Modelo de Contrato de Canal de Denúncias', d: '09/05/2026', kind: 'DOC' },
    { t: 'Apresentação para os clientes', d: '02/05/2026', kind: 'Slides' },
  ],

  chart: { labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'], values: [0, 0, 0, 2, 13, 1], max: 16 },

  kpis: [
    { id: 'emp',  label: 'Total de Empresas',       value: 6,     icon: 'building-2',     tone: 'blue',  data: [1,2,2,3,4,5,6] },
    { id: 'rest', label: 'Avaliações Restantes',    value: '11.864', icon: 'clipboard-list', tone: 'green', data: [14,13,13,12,12,12,11] },
    { id: 'rel',  label: 'Relatórios Salvos',       value: 0,     icon: 'file-text',      tone: 'amber', data: [0,0,0,0,0,0,0] },
    { id: 'enc',  label: 'Avaliações Realizadas',   value: 16,    icon: 'message-circle', tone: 'berry', data: [2,4,6,8,10,13,16] },
  ],
};

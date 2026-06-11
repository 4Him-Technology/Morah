// Morah técnico — demo data (plain JS, loaded before the JSX scripts)
window.MORAH = {
  tenant: { name: 'Clínica Pedrosa', tech: 'Lucas C. Pedrosa Marques', email: 'tec.pedrosa@gmail.com', role: 'Administrador' },

  nav: {
    navegacao: [
      { id: 'overview',   icon: 'layout-grid', label: 'Visão Geral' },
      { id: 'termos',     icon: 'file-text',   label: 'Termos Aceito' },
      { id: 'empresas',   icon: 'building-2',  label: 'Empresas' },
      { id: 'setor',      icon: 'layers',      label: 'Setor' },
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
    overview:   { h: 'Painel Administrativo', sub: 'Visão geral dos dados' },
    termos:     { h: 'Painel Administrativo', sub: 'Visão geral dos dados' },
    empresas:   { h: 'Painel Administrativo', sub: 'Visão geral dos dados' },
    setor:      { h: 'Painel Administrativo', sub: 'Visão geral dos dados' },
    cargos:     { h: 'Painel Administrativo', sub: 'Visão geral dos dados' },
    campanhas:  { h: 'Painel Administrativo', sub: 'Visão geral dos dados' },
    relatorios: { h: 'Painel Administrativo', sub: 'Visão geral dos dados' },
    link:       { h: 'Painel Administrativo', sub: 'Visão geral dos dados' },
    comparar:   { h: 'Painel Administrativo', sub: 'Visão geral dos dados' },
    modelos:    { h: 'Painel Administrativo', sub: 'Visão geral dos dados' },
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
    { t: 'Interpretação das Perguntas (Copsoq II Versão Curta)', d: 'Guia', kind: 'PDF' },
    { t: 'Formulário de avaliação manual para impressão', d: 'Modelo', kind: 'PDF' },
    { t: 'Manual de interpretação e aplicação do capítulo 1.5 da NR-1', d: 'Guia', kind: 'PDF' },
    { t: 'Modelo de Contrato de Canal de Denúncias', d: 'Documento', kind: 'DOC' },
    { t: 'Apresentação para os clientes', d: 'Slides', kind: 'Slides' },
  ],

  chart: { labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'], values: [0, 0, 0, 2, 13, 1], max: 16 },

  kpis: [
    { id: 'emp',  label: 'Total de Empresas',       value: 13,    icon: 'building-2',     tone: 'blue',  data: [4,6,5,8,7,10,13] },
    { id: 'rest', label: 'Avaliações Restantes',    value: '11.864', icon: 'clipboard-list', tone: 'green', data: [3,4,5,6,7,9,11] },
    { id: 'rel',  label: 'Relatórios Salvos',       value: 0,     icon: 'file-text',      tone: 'amber', data: [1,2,2,3,4,5,7] },
    { id: 'enc',  label: 'Avaliações Encontradas',  value: 15,    icon: 'message-circle', tone: 'berry', data: [2,4,5,7,9,12,15] },
  ],
};

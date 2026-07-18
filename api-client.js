// Moorah — cliente da API do Mentask.
// Regra: com sessão REAL do Cognito, fala com a API (banco).
// No modo demonstração (sem JWT), lança SEM_JWT e as telas caem no localStorage.
(function () {
  'use strict';

  async function chamar(metodo, rota, corpo) {
    const base = window.MORAH_API;
    if (!base) throw Object.assign(new Error('API não configurada'), { code: 'SEM_API' });
    const token = window.MorahAuth ? await window.MorahAuth.idToken() : null;
    if (!token) throw Object.assign(new Error('sem sessão real (modo demo usa dados locais)'), { code: 'SEM_JWT' });
    const r = await fetch(base + rota, {
      method: metodo,
      headers: Object.assign(
        { authorization: 'Bearer ' + token },
        corpo ? { 'content-type': 'application/json' } : {}
      ),
      body: corpo ? JSON.stringify(corpo) : undefined,
    });
    if (r.status === 204) return null;
    const dados = await r.json().catch(function () { return {}; });
    if (!r.ok) throw Object.assign(new Error(dados.erro || ('HTTP ' + r.status)), { status: r.status });
    return dados;
  }

  // Rotas públicas do questionário (sem autenticação)
  async function publico(metodo, rota, corpo) {
    const base = window.MORAH_API;
    if (!base) throw Object.assign(new Error('API não configurada'), { code: 'SEM_API' });
    const r = await fetch(base + rota, {
      method: metodo,
      headers: corpo ? { 'content-type': 'application/json' } : {},
      body: corpo ? JSON.stringify(corpo) : undefined,
    });
    const dados = await r.json().catch(function () { return {}; });
    if (!r.ok) throw Object.assign(new Error(dados.erro || ('HTTP ' + r.status)), { status: r.status });
    return dados;
  }

  window.MorahApi = { chamar: chamar, publico: publico };
})();

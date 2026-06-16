/* Morah — camada de autenticação (Amazon Cognito).
 *
 * Site estático: usa amazon-cognito-identity-js (carregada via CDN antes deste
 * arquivo) para autenticar por SRP no próprio navegador — a senha nunca trafega
 * em texto puro e nenhum segredo de cliente fica no front.
 *
 * Os identificadores abaixo NÃO são segredos: o User Pool Id e o Client Id
 * público são feitos para viver no front-end. As credenciais sensíveis ficam
 * só no Cognito.
 */
window.MORAH_AUTH_CONFIG = {
  region: 'sa-east-1',
  UserPoolId: 'sa-east-1_Btl2myQUB',
  ClientId: '82f7e7sricqrifck9k70f783r',
  // Para onde ir depois de entrar / sair. Relativo à pasta da página atual.
  hubUrl: '../hub/index.html',
  loginUrl: '../login/index.html',
  // Login social (Google/Microsoft) via Hosted UI do Cognito.
  // Preencher quando o domínio do Hosted UI e os provedores estiverem configurados.
  // Ex.: 'morah-auth.auth.sa-east-1.amazoncognito.com'
  hostedUiDomain: '',
  oauthRedirect: '',          // ex.: 'https://4him-technology.github.io/Morah/hub/'
  oauthScopes: 'openid email profile',
};

(function () {
  const CFG = window.MORAH_AUTH_CONFIG;

  function pool() {
    if (!window.AmazonCognitoIdentity) {
      throw new Error('SDK do Cognito não carregado (amazon-cognito-identity-js).');
    }
    return new AmazonCognitoIdentity.CognitoUserPool({
      UserPoolId: CFG.UserPoolId,
      ClientId: CFG.ClientId,
    });
  }

  function cognitoUser(email) {
    return new AmazonCognitoIdentity.CognitoUser({ Username: email, Pool: pool() });
  }

  // Traduz as mensagens de erro do Cognito para PT-BR amigável.
  function friendly(err) {
    const code = (err && (err.code || err.name)) || '';
    const map = {
      NotAuthorizedException: 'E-mail ou senha incorretos.',
      UserNotFoundException: 'E-mail ou senha incorretos.',
      UserNotConfirmedException: 'Sua conta ainda não foi confirmada. Verifique o código enviado ao seu e-mail.',
      UsernameExistsException: 'Já existe uma conta com este e-mail.',
      CodeMismatchException: 'Código de verificação inválido.',
      ExpiredCodeException: 'O código expirou. Solicite um novo.',
      InvalidPasswordException: 'A senha não atende aos requisitos (mín. 8 caracteres, com maiúscula, minúscula e número).',
      InvalidParameterException: 'Verifique os dados informados.',
      LimitExceededException: 'Muitas tentativas. Aguarde alguns minutos e tente de novo.',
      TooManyRequestsException: 'Muitas tentativas. Aguarde um momento.',
      PasswordResetRequiredException: 'É necessário redefinir sua senha.',
    };
    return map[code] || (err && err.message) || 'Ocorreu um erro. Tente novamente.';
  }

  /* ---------- API pública ---------- */
  const Auth = {
    config: CFG,

    // Cadastro B2C: cria a conta e dispara o e-mail com o código de confirmação.
    signUp({ name, email, password }) {
      return new Promise((resolve, reject) => {
        const attrs = [];
        if (name) attrs.push(new AmazonCognitoIdentity.CognitoUserAttribute({ Name: 'name', Value: name }));
        pool().signUp(email, password, attrs, null, (err, res) => {
          if (err) return reject(new Error(friendly(err)));
          resolve(res);
        });
      });
    },

    // Confirma a conta com o código de 6 dígitos enviado por e-mail.
    confirm({ email, code }) {
      return new Promise((resolve, reject) => {
        cognitoUser(email).confirmRegistration(code, true, (err, res) => {
          if (err) return reject(new Error(friendly(err)));
          resolve(res);
        });
      });
    },

    resendCode({ email }) {
      return new Promise((resolve, reject) => {
        cognitoUser(email).resendConfirmationCode((err, res) => {
          if (err) return reject(new Error(friendly(err)));
          resolve(res);
        });
      });
    },

    // Login por SRP. Resolve com a sessão; rejeita com mensagem amigável.
    signIn({ email, password }) {
      return new Promise((resolve, reject) => {
        const user = cognitoUser(email);
        const details = new AmazonCognitoIdentity.AuthenticationDetails({
          Username: email, Password: password,
        });
        user.authenticateUser(details, {
          onSuccess: (session) => resolve(session),
          onFailure: (err) => reject(new Error(friendly(err))),
          // Primeiro login de usuário criado pelo admin (B2B) exige nova senha.
          newPasswordRequired: () => reject(Object.assign(new Error('NEW_PASSWORD_REQUIRED'), { code: 'NEW_PASSWORD_REQUIRED' })),
        });
      });
    },

    // Esqueci a senha: dispara o código.
    forgotPassword({ email }) {
      return new Promise((resolve, reject) => {
        cognitoUser(email).forgotPassword({
          onSuccess: resolve,
          onFailure: (err) => reject(new Error(friendly(err))),
        });
      });
    },

    // Confirma a nova senha com o código recebido.
    confirmForgotPassword({ email, code, password }) {
      return new Promise((resolve, reject) => {
        cognitoUser(email).confirmPassword(code, password, {
          onSuccess: resolve,
          onFailure: (err) => reject(new Error(friendly(err))),
        });
      });
    },

    // Sessão atual (ou null). Renova tokens automaticamente se possível.
    currentSession() {
      return new Promise((resolve) => {
        const user = pool().getCurrentUser();
        if (!user) return resolve(null);
        user.getSession((err, session) => {
          if (err || !session || !session.isValid()) return resolve(null);
          resolve(session);
        });
      });
    },

    // Dados do usuário logado a partir do ID token (nome, e-mail, grupos).
    async currentUser() {
      const session = await this.currentSession();
      if (!session) return null;
      const payload = session.getIdToken().decodePayload();
      return {
        email: payload.email || '',
        name: payload.name || (payload.email ? payload.email.split('@')[0] : ''),
        groups: payload['cognito:groups'] || [],
        sub: payload.sub,
      };
    },

    // O usuário tem acesso a um produto? (etiqueta/grupo)
    async hasProduct(productKey) {
      const u = await this.currentUser();
      return !!u && u.groups.indexOf(productKey) !== -1;
    },

    // Login social via Hosted UI do Cognito (Google / Microsoft).
    // provider: 'Google' | 'Microsoft' (nome do IdP configurado no User Pool).
    // Só funciona após configurar o domínio do Hosted UI + os provedores.
    federatedSignIn(provider) {
      if (!CFG.hostedUiDomain || !CFG.oauthRedirect) {
        const e = new Error('Login social ainda não configurado. Use e-mail e senha por enquanto.');
        e.code = 'SOCIAL_NOT_CONFIGURED';
        throw e;
      }
      const url = 'https://' + CFG.hostedUiDomain + '/oauth2/authorize'
        + '?identity_provider=' + encodeURIComponent(provider)
        + '&redirect_uri=' + encodeURIComponent(CFG.oauthRedirect)
        + '&response_type=code'
        + '&client_id=' + encodeURIComponent(CFG.ClientId)
        + '&scope=' + encodeURIComponent(CFG.oauthScopes);
      window.location.assign(url);
    },

    signOut() {
      const user = pool().getCurrentUser();
      if (user) user.signOut();
    },

    // Guarda de rota: garante sessão; se não houver, manda pro login.
    async requireAuth() {
      const session = await this.currentSession();
      if (!session) {
        window.location.replace(CFG.loginUrl);
        return null;
      }
      return this.currentUser();
    },
  };

  window.MorahAuth = Auth;
})();

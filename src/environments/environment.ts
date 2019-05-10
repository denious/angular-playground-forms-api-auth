export const environment = {
  production: false,
  auth: {
    issuer: 'https://phenomenexb2c.b2clogin.com/964b7d74-24a3-4446-9a32-5c58d965b7b2/v2.0/',
    loginUrl: 'https://PhenomenexB2C.b2clogin.com/PhenomenexB2C.onmicrosoft.com/oauth2/v2.0/authorize',
    redirectUri: 'http://localhost:4200',
    onErrorRedirectUrl: '/',
    silentRefreshRedirectUri: 'http://localhost:4200/assets/silent-refresh.html',
    clientId: 'f5d45e7e-2f65-41c2-815e-8c9ee003e760',
    scope: 'https://PhenomenexB2C.onmicrosoft.com/f5d45e7e-2f65-41c2-815e-8c9ee003e760/user_impersonation',
    logoutUrl: 'https://PhenomenexB2C.b2clogin.com/PhenomenexB2C.onmicrosoft.com/oauth2/v2.0/logout?p=B2C_1_PhxSignUpSignIn',
    nonceStateSeparator: ',',
    signUpSignInPolicy: 'B2C_1_PhxSignUpSignIn',
    passwordResetPolicy: 'B2C_1_PwdReset'
  },
  api: {
    rootUrl: 'https://phx-pim-api-dev.azurewebsites.net'
  }
};

import 'zone.js/dist/zone-error';  // Included with Angular CLI.
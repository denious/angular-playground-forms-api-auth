import { environment } from '../environments/environment';
import { OAuthConfig } from '@phx/auth';

export const authConfig: OAuthConfig = {
  issuer: environment.auth.issuer,
  loginUrl: environment.auth.loginUrl,
  onLoginUrl: '/login',
  onErrorRedirectUrl: '/',
  signUpSignInPolicy: 'B2C_1_PhxSignUpSignIn',
  passwordResetPolicy: 'B2C_1_PwdReset',
  redirectUri: environment.auth.redirectUri,
  silentRefreshRedirectUri: environment.auth.silentRefreshRedirectUri,
  clientId: environment.auth.clientId,
  scope: environment.auth.scope,
  logoutUrl: environment.auth.logoutUrl,
  nonceStateSeparator: environment.auth.nonceStateSeparator
}
export interface AuthenticationServiceConfig {
    issuer: string;
    loginUrl: string;
    redirectUri: string;
    onLoginUrl: string;
    onErrorRedirectUrl: string;
    silentRefreshRedirectUri: string;
    clientId: string;
    scope: string;
    logoutUrl: string;
    nonceStateSeparator: string;
    signUpSignInPolicy: string;
    passwordResetPolicy: string;
}

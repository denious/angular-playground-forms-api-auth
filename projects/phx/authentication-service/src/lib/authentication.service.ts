import { OAuthService, AuthConfig, NullValidationHandler, OAuthErrorEvent } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { AuthenticationServiceConfig } from './authentication.service.config';
import { AuthenticationIdentity } from './authentication.identity';

@Injectable()
export class AuthenticationService {
  oauthConfig: AuthenticationServiceConfig;

  constructor(@Inject('AuthenticationServiceConfig') oauthConfig: AuthenticationServiceConfig, private oauthService: OAuthService, private router: Router) {
    this.oauthConfig = oauthConfig;
  }

  configureAuth() {

    // build configuration
    const authConfig = this.buildAuthConfig();

    // configuration authentication using configuration class
    this.oauthService.configure(authConfig);

    // default to signup/signin policy on every initialization
    this.oauthService.customQueryParams = {
      'p': this.oauthConfig.signUpSignInPolicy
    };

    // B2C does not provide a discovery document with JWKS keys, so disable JWKS validation
    this.oauthService.tokenValidationHandler = new NullValidationHandler();

    // enable token silent refresh
    this.oauthService.setupAutomaticSilentRefresh();

    // subscribe to events emitted by the auth service
    this.oauthService.events.subscribe(e => {
      switch (e.type) {
        case "token_received": {

          // redirect user to originally requested URL
          if (this.oauthService.state)
            this.router.navigate([this.oauthService.state]);

          break;
        }
        case "token_error": {

          // cast event
          const tokenError = <OAuthErrorEvent>e;

          // extract B2C error code
          const errorDescription: string = tokenError.params['error_description']
          const errorCode = errorDescription.substring(0, errorDescription.indexOf(':'));

          // extract redirectUrl from state
          const state = (<string>tokenError.params['state']).split(',');
          const redirectUrl = state.length >= 2 ? state[1] : '/';

          switch (errorCode) {

            // AADB2C90118: The user has forgotten their password
            case 'AADB2C90118':
              {
                // switch to the password reset policy
                this.oauthService.customQueryParams = {
                  'p': this.oauthConfig.passwordResetPolicy
                };
                break;
              }

            default: {

              // switch to the signin/signup policy
              this.oauthService.customQueryParams = {
                'p': this.oauthConfig.signUpSignInPolicy
              };
              break;
            }
          }

          // send user back to app for processing
          this.router.navigate([this.oauthConfig.onErrorRedirectUrl], {
            queryParams: {
              callbackUrl: redirectUrl,
              errorCode: errorCode
            }
          });

          break;
        }
      }
    });
  }

  private buildAuthConfig(): AuthConfig {
    const authConfig: AuthConfig = {
      issuer: this.oauthConfig.issuer,
      loginUrl: this.oauthConfig.loginUrl,
      redirectUri: this.oauthConfig.redirectUri,
      silentRefreshRedirectUri: this.oauthConfig.silentRefreshRedirectUri,
      clientId: this.oauthConfig.clientId,
      scope: this.oauthConfig.scope,
      logoutUrl: this.oauthConfig.logoutUrl,
      nonceStateSeparator: this.oauthConfig.nonceStateSeparator
    };

    return authConfig;
  }

  isReady(): Promise<boolean> {

    // check the B2C response (if present in current route)
    return this.oauthService.tryLogin();
  }

  initImplicitFlow(callbackUrl: string) {
    this.oauthService.initImplicitFlow(callbackUrl);
  }

  isUserAuthenticated(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  logOut() {
    this.oauthService.logOut();
  }

  getAccessToken(): string {
    return this.oauthService.getAccessToken();
  }

  getIdentityClaims(): AuthenticationIdentity {
    return <AuthenticationIdentity>this.oauthService.getIdentityClaims();
  }
}

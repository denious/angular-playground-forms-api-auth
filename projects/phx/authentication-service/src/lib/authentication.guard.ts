import { Injectable, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthenticationServiceConfig } from './authentication.service.config';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  oauthConfig: AuthenticationServiceConfig;

  constructor(private authService: OAuthService, @Inject('AuthenticationServiceConfig') oauthConfig: AuthenticationServiceConfig) {
    this.oauthConfig = oauthConfig;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let loginPromise = this.authService.tryLogin().then(() => {
      debugger;

      if (this.authService.hasValidAccessToken())
        return true;

      const callbackUrl = next.queryParams['callbackUrl'] || state.url;
      this.authService.initImplicitFlow(callbackUrl);

      return false;
    });

    return loginPromise;
  }

}

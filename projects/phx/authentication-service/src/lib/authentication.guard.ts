import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
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

    if (!this.authService.hasValidAccessToken()) {
      const callbackUrl = state.url;
      this.authService.initImplicitFlow(callbackUrl);
      //this.router.navigate([this.oauthConfig.onLoginUrl], { queryParams: { callbackUrl: state.url } });
      return false;
    }

    return true;
  }

}

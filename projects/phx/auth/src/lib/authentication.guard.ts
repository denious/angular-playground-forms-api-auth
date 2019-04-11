import { Injectable, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';
import { IAuthenticationServiceConfig } from './iauthentication-service-config';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  oauthConfig: IAuthenticationServiceConfig;

  constructor(private router: Router, private authService: OAuthService, @Inject('IAuthenticationServiceConfig') oauthConfig: IAuthenticationServiceConfig) {
    this.oauthConfig = oauthConfig;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.authService.hasValidAccessToken()) {
      this.router.navigate([this.oauthConfig.onLoginUrl], { queryParams: { callbackUrl: state.url } });
      return false;
    }

    return true;
  }

}

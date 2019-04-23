1. 	npm install --save @phx/authentication-service
2.	Configure environments (modify to fit your project needs):
    ```ts
	auth: {
		issuer: 'https://phenomenexb2c.b2clogin.com/964b7d74-24a3-4446-9a32-5c58d965b7b2/v2.0/',
		loginUrl: 'https://PhenomenexB2C.b2clogin.com/PhenomenexB2C.onmicrosoft.com/oauth2/v2.0/authorize',
		redirectUri: 'http://localhost:4200',
		onLoginUrl: '/login',
		onErrorRedirectUrl: '/',
		silentRefreshRedirectUri: 'http://localhost:4200/assets/silent-refresh.html',
		clientId: '{B2C application ID}',
		scope: 'https://PhenomenexB2C.onmicrosoft.com/{B2C application ID}/user_impersonation',
		logoutUrl: 'https://PhenomenexB2C.b2clogin.com/PhenomenexB2C.onmicrosoft.com/oauth2/v2.0/logout?p=B2C_1_PhxSignUpSignIn',
		nonceStateSeparator: ',',
		signUpSignInPolicy: 'B2C_1_PhxSignUpSignIn',
		passwordResetPolicy: 'B2C_1_PwdReset'
	}
	```
3.	Import required modules and providers to your bootstrapped module (ex: app.module)
	```ts
	import { OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
	import { CookieModule } from 'ngx-cookie';
	import { AuthenticationServiceConfig, SsrCookieStorageService } from '@phx/authentication-service';
	
	@NgModule({
		imports: [
			CookieModule.forRoot(),
			OAuthModule.forRoot()
		]
		providers: [
			{
				provide: 'AuthenticationServiceConfig',
				useValue: <AuthenticationServiceConfig>environment.auth
			},
			{
				provide: OAuthStorage,
				useClass: SsrCookieStorageService
			}
		]
	})
	```
4.	Protect routes that require authentication with the guard:
	```ts
	import { AuthenticationGuard } from '@phx/authentication-service';
	
	{ path: '[path]', canActivate: [AuthenticationGuard]}
5.	Prepare the authentication service with the code in your main component (ex: app.component)
	```ts
	import { AuthenticationService } from '@phx/authentication-service';
	
	export class AppComponent {
		constructor(authService: AuthenticationService) {
		
			// configure & prepare auth
			authService.configureAuth();
			authService.isReady();
		}
	}
	```
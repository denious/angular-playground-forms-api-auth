import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider, forwardRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule, MatSelectModule, MatRadioModule, MatCardModule } from '@angular/material';
import { NotFoundComponent } from './not-found/not-found.component';
import { SecondFormComponent } from './second-form/second-form.component';
import { ApiModule } from './api/api.module';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AttributesService } from './api/services';
import { UomsComponent } from './uoms/uoms.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './api-interceptor';
import { LoginComponent } from './login/login.component';
import { environment } from '../environments/environment';
import { AuthenticationServiceConfig } from '@phx/authentication-service';

export const API_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: forwardRef(() => ApiInterceptor),
  multi: true
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    NotFoundComponent,
    SecondFormComponent,
    UomsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    OAuthModule.forRoot(),
    ApiModule.forRoot({ rootUrl: environment.api.rootUrl })
  ],
  providers: [
    ApiInterceptor,
    API_INTERCEPTOR_PROVIDER,
    AttributesService,
    {
      provide: 'AuthenticationServiceConfig',
      useValue: <AuthenticationServiceConfig>environment.auth
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SecondFormComponent } from './second-form/second-form.component';
import { UomsComponent } from './uoms/uoms.component';
import { AuthenticationGuard } from '@phx/authentication-service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', canActivate: [AuthenticationGuard], children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'second', component: SecondFormComponent, pathMatch: 'full' },
      { path: 'uoms', component: UomsComponent, pathMatch: 'full' },
      { path: '**', component: NotFoundComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '@phx/authentication-service';
import { IIdentityClaims } from '../iidentityclaims';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  title: string = "Dev Forms project";

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthenticationService) { }

  public logoff() {
    this.authService.logOut();
  }

  public get name() {
    const claims = this.authService.getIdentityClaims();
    if (!claims) return null;
    const b2cclaims = <IIdentityClaims>claims;
    return b2cclaims.given_name + ' ' + b2cclaims.family_name;
  }
}

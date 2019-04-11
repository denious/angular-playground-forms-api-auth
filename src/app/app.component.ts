import { Component } from '@angular/core';
import { AuthenticationService } from '@phx/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dev Forms project';

  constructor(private authService: AuthenticationService) {
    authService.configureAuth();
  }
}
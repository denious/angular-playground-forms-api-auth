import { Component } from '@angular/core';
import { OAuthActions } from 'projects/phx/auth/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dev Forms project';

  constructor(private oauthActions: OAuthActions) {
    oauthActions.configureAuth();
  }
}

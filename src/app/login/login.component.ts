import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OAuthActions } from '@phx/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, private oauthActions: OAuthActions) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const callbackUrl = params.callbackUrl || '/';
      this.oauthActions.initImplicitFlow(callbackUrl);
    });
  }
}

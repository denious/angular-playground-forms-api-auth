import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '@phx/authentication-service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, private authService: AuthenticationService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const callbackUrl = params.callbackUrl || '/';
      this.authService.initImplicitFlow(callbackUrl);
    });
  }
}

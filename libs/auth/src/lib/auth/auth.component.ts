import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'full-stack-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent {

  constructor(public auth: AuthService) {}

  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }

}

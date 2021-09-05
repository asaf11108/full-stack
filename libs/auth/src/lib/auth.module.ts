import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatButtonModule
  ],
  declarations: [
    AuthComponent
  ],
})
export class AuthModule {}

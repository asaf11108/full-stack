import { FeAuthRoutingModule } from './fe-auth-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  imports: [
    CommonModule,
    FeAuthRoutingModule,
    MatButtonModule
  ],
  declarations: [
    AuthComponent
  ],
})
export class FeAuthModule {}

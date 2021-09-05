import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-vftj-8hu.us.auth0.com',
      clientId: 'kD6iPHFeWwxbjAUUxwY1U2vzS19kYDyd'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

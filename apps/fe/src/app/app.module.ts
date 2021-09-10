import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-vftj-8hu.us.auth0.com',
      clientId: 'kD6iPHFeWwxbjAUUxwY1U2vzS19kYDyd',
      redirectUri: environment.feUrl,
      errorPath: '/login',
      scope: 'read:current_user',
      httpInterceptor: {
        allowedList: [
          {
            uri: 'http://localhost:3333/api/*',
            tokenOptions: {
              audience: 'https://asaf-nx-api.herokuapp.com/',
              scope: 'read:current_user'
            }
          }
        ]
      }
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

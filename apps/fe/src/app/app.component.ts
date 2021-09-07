import { environment } from './../environments/environment';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token } from '@full-stack/interfaces';

@Component({
  selector: 'full-stack-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Token>(environment.apiUrl + 'api/login', {
    params: {
      username: 'hfh@fgjhf.com',
      password: 'hgfghf'
    }
  });
  constructor(private http: HttpClient) {}
}

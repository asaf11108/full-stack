import { environment } from './../environments/environment';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'fe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<any>(environment.apiUrl + 'login', {
    params: {
      username: 'hfh@fgjhf.com',
      password: 'hgfghf'
    }
  });
  constructor(private http: HttpClient) {}
}

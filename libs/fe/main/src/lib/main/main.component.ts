import { Website } from '@full-stack/interfaces';
import { environment } from './../../../../../../apps/fe/src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { from, Observable } from 'rxjs';
import * as csv from 'csvtojson';

@Component({
  selector: 'fe-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(environment.apiUrl + 'reports/get/allData', {responseType: 'text'}).pipe(
        switchMap<string, Observable<Website[]>>(res => from(csv({ headers: ['websiteId', 'date', 'widgetId', 'clicks', 'impressions', 'revenue'] }).fromString(res)))
      )
      .subscribe(console.log);
  }
}

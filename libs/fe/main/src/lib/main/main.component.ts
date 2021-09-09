import { TABLE_CONFIG } from './main.config';
import { environment } from '@full-stack/fe/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TableColumn } from '@swimlane/ngx-datatable';
import { Observable } from 'rxjs';
import { Website } from '@full-stack/interfaces';

@Component({
  selector: 'fe-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  constructor(private http: HttpClient) {}

  columns: TableColumn[] = TABLE_CONFIG;
  websites$: Observable<Website[]>;

  ngOnInit(): void {
    this.websites$ = this.http
      .get<Website[]>(environment.apiUrl + 'reports/get/allData');
  }
}

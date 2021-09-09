import { TABLE_CONFIG } from './main.config';
import { environment } from '@full-stack/fe/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TableColumn } from '@swimlane/ngx-datatable';
import { Website } from '@full-stack/interfaces';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'fe-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  form = new FormGroup({
    query: new FormControl()
  });
  controls = {
    query: this.form.get('query') as FormControl
  };

  constructor(private http: HttpClient) {}

  columns: TableColumn[] = TABLE_CONFIG;
  websites: Website[];

  ngOnInit(): void {
    this.http.get<Website[]>(environment.apiUrl + 'reports/get/allData').subscribe(res => {
      this.websites = res;
    });

  }
}

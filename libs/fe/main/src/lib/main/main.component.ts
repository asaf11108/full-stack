import { startWith, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
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
    query: new FormControl(),
    date: new FormControl(),
  });
  controls = {
    query: this.form.get('query') as FormControl,
    date: this.form.get('date') as FormControl,
  };

  columns: TableColumn[] = TABLE_CONFIG;
  websites$: Observable<Website[]>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const url = environment.apiUrl + 'reports/get/';
    this.websites$ = this.controls.date.valueChanges.pipe(
      startWith(this.controls.date.value),
      switchMap((date: Date) =>
        !!date
          ? this.http.get<Website[]>(url + date.getTime())
          : this.http.get<Website[]>(url + 'allData')
      )
    );
  }
}

import { Website } from '@full-stack/interfaces';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ColumnMode, TableColumn } from '@swimlane/ngx-datatable';

@Component({
  selector: 'fe-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent<T> implements OnInit {
  ColumnMode = ColumnMode;

  @Input() columns: TableColumn[] = [];
  @Input() data: T[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

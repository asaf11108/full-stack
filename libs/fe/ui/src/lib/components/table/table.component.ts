import { Component, OnInit, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';
import { ColumnMode, TableColumn } from '@swimlane/ngx-datatable';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'fe-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'fe-table',
  }
})
export class TableComponent<T> implements OnInit {
  ColumnMode = ColumnMode;
  view: [number, number] = [1250, 700];

  @Input() columns: TableColumn[];
  @Input() data: T[];

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver.observe(['XSmall']).subscribe(console.log)
  }

}

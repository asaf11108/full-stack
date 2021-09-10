import { Component, OnInit, ChangeDetectionStrategy, Input, ViewEncapsulation, HostBinding } from '@angular/core';
import { ColumnMode, TableColumn } from '@swimlane/ngx-datatable';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'fe-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent<T> implements OnInit {
  ColumnMode = ColumnMode;
  
  view: [number, number];

  @Input() columns: TableColumn[];
  @Input() data: T[] = [];
  @Input() loading: boolean;

  @HostBinding('class')
  get host(): string {
    return 'fe-table';
  }

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    const COLUMN_WIDTH = 200;
    const WIDTH_OFFSET = 50;
    this.breakpointObserver.observe(Breakpoints.XSmall).subscribe(obs => {
      this.view = (obs.matches ? [COLUMN_WIDTH + WIDTH_OFFSET, 500] : [COLUMN_WIDTH * this.columns.length + WIDTH_OFFSET, 700]);
    })
  }

}

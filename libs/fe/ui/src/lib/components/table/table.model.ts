import { TableColumn } from '@swimlane/ngx-datatable';

export enum ColumnType {
    Text,
    Date
}

export interface ExpandedTableColumn extends TableColumn {
  columnType?: ColumnType;
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

const components = [
  TableComponent
];

@NgModule({
  imports: [CommonModule, NgxDatatableModule],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class FeUiModule {}

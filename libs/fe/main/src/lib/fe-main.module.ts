import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { FeMainRoutingModule } from './fe-main-routing.module';

@NgModule({
  imports: [CommonModule, FeMainRoutingModule],
  declarations: [
    MainComponent
  ],
})
export class FeMainModule {}

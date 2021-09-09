import { FeUiModule } from '@full-stack/fe/ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { FeMainRoutingModule } from './fe-main-routing.module';

@NgModule({
  imports: [CommonModule, FeMainRoutingModule, FeUiModule],
  declarations: [
    MainComponent
  ],
})
export class FeMainModule {}

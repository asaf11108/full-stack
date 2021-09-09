import { FeUiModule } from '@full-stack/fe/ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { FeMainRoutingModule } from './fe-main-routing.module';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FeMainRoutingModule, FeUiModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  declarations: [
    MainComponent
  ],
})
export class FeMainModule {}

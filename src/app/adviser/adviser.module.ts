import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';
import { ReportComponent } from './report/report.component';
import { LostComponent } from './lost/lost.component';
import { AdviserComponent } from './adviser/adviser.component';
import { AdviserRoutingModule } from './adviser-routing.module';

@NgModule({
  declarations: [ButtonsComponent, ReportComponent, LostComponent, AdviserComponent],
  imports: [
    CommonModule,
    AdviserRoutingModule
  ]
})
export class AdviserModule { }

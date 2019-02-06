import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KioskComponent } from './kiosk/kiosk.component';
import { CategoryComponent } from './category/category.component';
import { KioskRoutingModule } from './kiosk-routing.module';

@NgModule({
  declarations: [KioskComponent, CategoryComponent],
  imports: [
    CommonModule,
    KioskRoutingModule
  ]
})
export class KioskModule { }

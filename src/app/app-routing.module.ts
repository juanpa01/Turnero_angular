import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'adviser',
    loadChildren: './adviser/adviser.module#AdviserModule'
  },
  {
    path: 'display',
    loadChildren: './display/display.module#DisplayModule'
  },
  {
    path: 'kiosk',
    loadChildren: './kiosk/kiosk.module#KioskModule'
  },
  {
    path: '',
    redirectTo: 'display',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

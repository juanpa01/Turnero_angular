import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdviserComponent } from './adviser/adviser.component';

const routes: Routes = [
  {
    path: '',
    component: AdviserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdviserRoutingModule { }

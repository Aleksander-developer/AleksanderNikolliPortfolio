

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VetrinaComponent } from './vetrina.component';

const routes: Routes = [
  { path: '', component: VetrinaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VetrinaRoutingModule { }


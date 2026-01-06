// src/app/pages/progetti/progetti-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgettiComponent } from './progetti.component';

const routes: Routes = [
  { path: '', component: ProgettiComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgettiRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgettoDetailComponent } from './progetto-detail.component';

const routes: Routes = [
  { path: '', component: ProgettoDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgettoDetailRoutingModule { }

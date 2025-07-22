import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgettiRoutingModule } from './progetti-routing.module';
import { ProgettiComponent } from './progetti.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ProgettiComponent
  ],
  imports: [
    CommonModule,
    ProgettiRoutingModule,
    SharedModule
  ]
})
export class ProgettiModule { }

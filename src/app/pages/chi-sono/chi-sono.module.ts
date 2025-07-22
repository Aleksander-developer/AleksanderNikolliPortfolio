import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChiSonoRoutingModule } from './chi-sono-routing.module';
import { ChiSonoComponent } from './chi-sono.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ChiSonoComponent
  ],
  imports: [
    CommonModule,
    ChiSonoRoutingModule,
    SharedModule
  ]
})
export class ChiSonoModule { }

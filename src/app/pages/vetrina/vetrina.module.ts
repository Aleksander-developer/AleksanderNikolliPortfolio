
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VetrinaRoutingModule } from './vetrina-routing.module';
import { MaterialModule } from '../../shared/shared/material.module';
import { VetrinaComponent } from './vetrina.component';


@NgModule({
  declarations: [
    VetrinaComponent
  ],
  imports: [
    CommonModule,
    VetrinaRoutingModule,
    MaterialModule
  ]
})
export class VetrinaModule { }


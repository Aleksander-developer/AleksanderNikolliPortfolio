
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VetrinaRoutingModule } from './vetrina-routing.module';
import { MaterialModule } from '../../shared/shared/material.module';
import { VetrinaComponent } from './vetrina.component';
import { VetrinaSoftwareModule } from '../../shared/vetrina-software/vetrina-software.module';


@NgModule({
  declarations: [
    VetrinaComponent
  ],
  imports: [
    CommonModule,
    VetrinaRoutingModule,
    MaterialModule,
    VetrinaSoftwareModule
  ]
})
export class VetrinaModule { }


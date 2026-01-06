import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgettiRoutingModule } from './progetti-routing.module';
import { ProgettiComponent } from './progetti.component';
import { SharedModule } from '../../shared/shared.module';
import { ProjectsModule } from '../../shared/projects/projects.module';


@NgModule({
  declarations: [
    ProgettiComponent
  ],
  imports: [
    CommonModule,
    ProgettiRoutingModule,
    SharedModule,
    ProjectsModule
  ]
})
export class ProgettiModule { }

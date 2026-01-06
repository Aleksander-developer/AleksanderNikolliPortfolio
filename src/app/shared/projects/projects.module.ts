

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AzzurraMakeupComponent } from './azzurra-makeup/azzurra-makeup.component';
import { ProjectTileComponent } from './project-tile/project-tile.component';
import { RouterModule } from '@angular/router';
import { SharingTvEuropaComponent } from './sharing-tv-europa/sharing-tv-europa.component';
import { FondazioneGeaComponent } from './fondazione-gea/fondazione-gea.component';
import { UniversitaCreaComponent } from './universita-crea/universita-crea.component';



@NgModule({
  declarations: [
    AzzurraMakeupComponent,
    ProjectTileComponent,
    SharingTvEuropaComponent,
    FondazioneGeaComponent,
    UniversitaCreaComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AzzurraMakeupComponent,
    SharingTvEuropaComponent,
    FondazioneGeaComponent,
    UniversitaCreaComponent
  ]
})
export class ProjectsModule { }


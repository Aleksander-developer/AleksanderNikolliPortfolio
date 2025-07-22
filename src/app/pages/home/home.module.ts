import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module'; // Importa SharedModule
// Nota: MaterialModule non è necessario importarlo direttamente qui
// perché è già importato ed esportato da SharedModule.


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule // Importa SharedModule per rendere disponibili i componenti condivisi e MaterialModule
  ]
})
export class HomeModule { }

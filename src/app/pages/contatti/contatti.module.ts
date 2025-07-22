import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContattiRoutingModule } from './contatti-routing.module';
import { ContattiComponent } from './contatti.component';
import { HttpClientModule } from '@angular/common/http'; // HttpClientModule rimane qui

import { SharedModule } from '../../shared/shared.module'; // Importa SharedModule

@NgModule({
  declarations: [
    ContattiComponent
  ],
  imports: [
    CommonModule,
    ContattiRoutingModule,
    HttpClientModule, // Necessario per le chiamate HTTP
    SharedModule // Fornisce ReactiveFormsModule e tutti i moduli di Angular Material
  ]
})
export class ContattiModule { }

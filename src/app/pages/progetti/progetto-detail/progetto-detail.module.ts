
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgettoDetailRoutingModule } from './progetto-detail-routing.module';
import { ProgettoDetailComponent } from './progetto-detail.component';
// Importazioni Material esplicite per il modulo di dettaglio
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SharedModule } from '../../../shared/shared.module'; // SharedModule per altri elementi comuni


@NgModule({
  declarations: [
    ProgettoDetailComponent
  ],
  imports: [
    CommonModule,
    ProgettoDetailRoutingModule,
    // Moduli Material necessari per ProgettoDetailComponent
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    SharedModule // Per gli altri componenti e moduli condivisi
  ]
})
export class ProgettoDetailModule { }


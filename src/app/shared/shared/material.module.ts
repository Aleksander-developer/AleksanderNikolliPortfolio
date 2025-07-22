// src/app/shared/shared/material.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Aggiunto per completezza, buona pratica per tutti i moduli

// Moduli di Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav'; // Aggiunto per la sidenav nel layout
import { MatListModule } from '@angular/material/list';     // Aggiunto per le liste nella sidenav
import { MatProgressBarModule } from '@angular/material/progress-bar'; // Aggiunto per le progress bar

// Altri moduli
import { RouterModule } from '@angular/router'; // Necessario se i componenti Material usano routerLink (es. MatButton)
import { LayoutModule } from '@angular/cdk/layout'; // Per funzionalità responsive (es. BreakpointObserver)
import { ReactiveFormsModule } from '@angular/forms'; // Per i form reattivi
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule, // Importa CommonModule
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatDividerModule,
    MatSidenavModule, // Importa
    MatListModule,    // Importa
    MatProgressBarModule, // Importa
    MatProgressSpinnerModule,
    RouterModule, // Importa
    LayoutModule, // Importa
    ReactiveFormsModule, // Importa
  ],
  exports: [
    // Esporta tutti i moduli di Material e gli altri moduli comuni
    // in modo che qualsiasi modulo che importa MaterialModule possa usarli.
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatDividerModule,
    MatSidenavModule, // Esporta
    MatListModule,    // Esporta
    MatProgressBarModule, // Esporta
    MatProgressSpinnerModule,
    RouterModule, // Esporta
    LayoutModule, // Esporta
    ReactiveFormsModule, // Esporta
  ]
})
export class MaterialModule {}

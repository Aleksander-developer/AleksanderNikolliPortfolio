// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Importa RouterModule se i componenti condivisi usano routerLink
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule se i componenti condivisi usano form reattivi

// Importa i tuoi componenti condivisi
import { NavbarComponent } from './components/navbar.component';
import { FooterComponent } from './components/footer.component';
import { WhyChoseMeComponent } from './components/why-chose-me.component';
import { QuoteBoxComponent } from './components/quote-box.component';

// Importa il MaterialModule che si trova nella stessa sottocartella 'shared'
import { MaterialModule } from './shared/material.module';
import { CookieConsentComponent } from './components/cookie-consent/cookie-consent.component';
import { ReviewsComponent } from './components/reviews/reviews.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    WhyChoseMeComponent,
    QuoteBoxComponent,
    CookieConsentComponent,
    ReviewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule, // Necessario per routerLink
    ReactiveFormsModule, // Necessario per form reattivi
    MaterialModule // Importa MaterialModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    WhyChoseMeComponent,
    QuoteBoxComponent,
    CookieConsentComponent,
    ReviewsComponent,
    MaterialModule, // Esporta MaterialModule per renderlo disponibile agli importatori di SharedModule
    CommonModule,   // Utile esportare CommonModule per le direttive *ngIf, *ngFor
    RouterModule,    // Esporta RouterModule
    ReactiveFormsModule // Esporta ReactiveFormsModule
  ]
})
export class SharedModule { }

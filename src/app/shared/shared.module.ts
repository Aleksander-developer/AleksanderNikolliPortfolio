
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
import { GoogleVerifiedBadgeComponent } from './components/google-verified-badge/google-verified-badge.component';
import { BackgroundComponent } from '../pages/background/background.component';
import { LogoComponent } from '../pages/logo/logo.component';
import { SocialIconsModule } from './components/social-icons/social-icons.module';
import { VetrinaSoftwareModule } from './vetrina-software/vetrina-software.module';
import { SkillsBoxComponent } from './components/skills-box/skills-box.component';
import { FaqComponent } from './components/faq/faq.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    WhyChoseMeComponent,
    QuoteBoxComponent,
    CookieConsentComponent,
    ReviewsComponent,
    GoogleVerifiedBadgeComponent,
    BackgroundComponent,
    LogoComponent,
    SkillsBoxComponent,
    FaqComponent,
    TechStackComponent
  ],
  imports: [
    CommonModule,
    RouterModule, // Necessario per routerLink
    ReactiveFormsModule, // Necessario per form reattivi
    MaterialModule, // Importa MaterialModule
    SocialIconsModule,
    VetrinaSoftwareModule

  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    WhyChoseMeComponent,
    QuoteBoxComponent,
    CookieConsentComponent,
    ReviewsComponent,
    GoogleVerifiedBadgeComponent,
    BackgroundComponent,
    MaterialModule, // Esporta MaterialModule per renderlo disponibile agli importatori di SharedModule
    CommonModule,   // Utile esportare CommonModule per le direttive *ngIf, *ngFor
    RouterModule,    // Esporta RouterModule
    ReactiveFormsModule, // Esporta ReactiveFormsModule
    LogoComponent,
    SocialIconsModule,
    VetrinaSoftwareModule,
    SkillsBoxComponent,
    FaqComponent,
    TechStackComponent

  ]
})
export class SharedModule { }


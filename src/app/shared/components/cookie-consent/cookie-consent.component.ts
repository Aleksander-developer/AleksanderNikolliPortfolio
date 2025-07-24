// src/app/shared/components/cookie-consent/cookie-consent.component.ts
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cookie-consent',
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.scss']
})
export class CookieConsentComponent implements OnInit {
  showBanner: boolean = true; // Mostra il banner per default

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Controlla se l'utente ha già fatto una scelta
      const consent = localStorage.getItem('cookieConsent');
      if (consent === 'accepted' || consent === 'declined') {
        this.showBanner = false; // Se ha già scelto, nascondi il banner
      }
    }
  }

  acceptCookies(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cookieConsent', 'accepted'); // Memorizza la scelta
      this.showBanner = false; // Nascondi il banner
      console.log('Cookie consent: Accepted');
      // Qui puoi aggiungere logica per attivare script di tracking (es. Google Analytics)
      // se l'utente ha accettato.
    }
  }

  declineCookies(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cookieConsent', 'declined'); // Memorizza la scelta
      this.showBanner = false; // Nascondi il banner
      console.log('Cookie consent: Declined');
      // Qui puoi aggiungere logica per disattivare o rimuovere script di tracking
      // se l'utente ha rifiutato.
    }
  }
}

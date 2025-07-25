// src/app/shared/components/google-verified-badge/google-verified-badge.component.ts
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-verified-badge',
  templateUrl: './google-verified-badge.component.html',
  styleUrls: ['./google-verified-badge.component.scss']
})
export class GoogleVerifiedBadgeComponent implements OnInit {
  // Questo input verrà usato per attivare/disattivare il badge.
  @Input() isVerified: boolean = true; // Impostalo su 'true' manualmente quando la verifica GMB è completa.

  // NUOVO: Input per l'URL del profilo Google Business
  @Input() googleProfileUrl: string = 'https://g.co/kgs/H1dR6qk'; // L'URL della tua attività su Google Business Profile

  constructor() { }

  ngOnInit(): void {
    // Puoi aggiungere qui una logica per caricare lo stato di verifica da un servizio
    // o da variabili d'ambiente in un'applicazione più complessa.
  }
}

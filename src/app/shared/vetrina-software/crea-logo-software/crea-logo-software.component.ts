
// src/app/shared/vetrina-software/crea-logo-software/crea-logo-software.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crea-logo-software',
  templateUrl: './crea-logo-software.component.html',
  styleUrls: ['./crea-logo-software.component.scss']
})
export class CreaLogoSoftwareComponent {

  readonly softwareId = 'crea-logo';
  readonly externalUrl = 'https://loghi-fe.onrender.com';

  constructor(private router: Router) {}

  /** CLICK SULLA CARD / LOGO */
  openSoftware(): void {
    window.open(this.externalUrl, '_blank', 'noopener');
  }

  /** CTA CONTATTI */
  contatta(event: MouseEvent): void {
    event.stopPropagation(); // 🔥 fondamentale
    this.router.navigate(
      ['/contatti'],
      { queryParams: { software: this.softwareId } }
    );
  }
}


// src/app/shared/components/footer/footer.component.ts

import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public currentYear: number = new Date().getFullYear();

  githubUrl: string = 'https://github.com/Aleksander-developer';
  linkedinUrl: string = 'https://www.linkedin.com/in/aleksander-nikolli-235b37120';
  instagramUrl: string = 'https://www.instagram.com/aleksander_nikolli_developer?igsh=Y2oxczZ1c2doajE1&utm_source=qr';
  facebookUrl: string = 'https://www.facebook.com/share/1AgfrE24jU/?mibextid=wwXIfr';

  whatsappNumber: string = '393463515173'; // Numero WhatsApp senza il '+'
  phoneNumber: string = '393463515173';
  emailAddress: string = 'aleksandernikollibusiness@gmail.com';

  whatsappLink: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.whatsappLink = this.sanitizer.bypassSecurityTrustResourceUrl(`https://wa.me/${this.whatsappNumber}`);
  }

  ngOnInit(): void {
    // In altre logiche è pronto
  }
}

// src/app/shared/components/navbar/navbar.component.ts
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private languageService: LanguageService, // Inietta LanguageService
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
  }

  // Delega il cambio lingua al LanguageService
  changeLanguage(lang: string): void {
    this.languageService.changeLanguage(lang);
  }

  // Delega il recupero della lingua corrente al LanguageService
  getCurrentLanguage(): string {
    return this.languageService.getCurrentLanguage();
  }
}


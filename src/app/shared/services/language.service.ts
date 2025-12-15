import { Injectable, Inject, PLATFORM_ID, LOCALE_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private readonly sourceLocale: string = 'it';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    @Inject(LOCALE_ID) private activeLocale: string
  ) {
    // console.log('LanguageService initialized. Active Locale (from Angular):', this.activeLocale);
  }

  getCurrentLanguage(): string {
    // console.log('getCurrentLanguage called. Returning:', this.activeLocale);
    return this.activeLocale;
  }

  changeLanguage(targetLang: string): void {
    if (!isPlatformBrowser(this.platformId)) return;

    console.log('changeLanguage called. Target Lang:', targetLang);
    const currentLang = this.activeLocale;

    // 🔒 Evita redirect se la lingua è già quella attiva
    if (targetLang === currentLang) {
      console.log('Target language is already active. No redirect.');
      return;
    }

    let currentUrl = this.router.url;
    console.log('Current Router URL:', currentUrl);
    let unlocalizedPath = currentUrl;

    if (currentLang !== this.sourceLocale && currentUrl.startsWith(`/${currentLang}`)) {
      unlocalizedPath = currentUrl.substring(`/${currentLang}`.length);
      console.log('Unlocalized path after removing active locale prefix:', unlocalizedPath);
    } else {
      console.log('Active locale is source locale or no prefix found. Unlocalized path:', unlocalizedPath);
    }

    if (!unlocalizedPath.startsWith('/')) {
      unlocalizedPath = '/' + unlocalizedPath;
      console.log('Unlocalized path after ensuring leading slash:', unlocalizedPath);
    }

    let newFullUrl = '';
    if (targetLang === this.sourceLocale) {
      newFullUrl = `/it${unlocalizedPath}`; // 🔁 forziamo il prefisso anche per la lingua di default
      console.log('Target is source locale. New full URL (forced /it):', newFullUrl);
    } else {
      newFullUrl = `/${targetLang}${unlocalizedPath}`;
      console.log('Target is other locale. New full URL:', newFullUrl);
    }

    console.log('Navigating to:', newFullUrl);
    this.document.location.href = newFullUrl;
  }
}

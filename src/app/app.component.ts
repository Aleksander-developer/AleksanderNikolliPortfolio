/* src/app/app.component.ts */

import { Component, HostListener, Inject, PLATFORM_ID, AfterViewInit, ViewChild, ElementRef, Renderer2, OnInit } from '@angular/core'; // Aggiunto OnInit
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { LanguageService } from './shared/services/language.service';
import { SeoService } from './core/services/seo.service'; // <--- Importa il SeoService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // ASSICURATI CHE NON CI SIANO standalone: true, O imports: [...] QUI
})
export class AppComponent implements OnInit, AfterViewInit { // Implementa OnInit
  // title = 'Aleksander Nikolli Developer'; // Rimosso: gestito dal SeoService
  showScrollButton: boolean = false;
  scrollButtonBottom: number = 30; // Posizione iniziale dal basso
  isButtonOverFooter: boolean = false;

  @ViewChild('footerRef') footerRef!: ElementRef;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2,
    private router: Router,
    private languageService: LanguageService,
    private seoService: SeoService // <--- Inietta il SeoService
  ) {}

  ngOnInit(): void {
    // Inizializza gli aggiornamenti SEO all'avvio dell'applicazione
    this.seoService.initSeoUpdates();
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Ascolta gli eventi di scroll e resize solo nel browser
      this.renderer.listen('window', 'scroll', () => this.onWindowScroll());
      this.renderer.listen('window', 'resize', () => this.updateScrollButtonPosition());
      this.updateScrollButtonPosition(); // Aggiorna la posizione iniziale
    }
  }

  onWindowScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      this.showScrollButton = scrollY > 100; // Mostra il pulsante dopo 100px di scroll
      this.updateScrollButtonPosition(); // Aggiorna la posizione in base al footer
    }
  }

  /**
   * Calcola la posizione del pulsante, facendolo fermare a metà del footer.
   */
  updateScrollButtonPosition(): void {
    // Assicurati che il footerRef sia disponibile e che siamo nel browser
    if (!this.footerRef?.nativeElement || !isPlatformBrowser(this.platformId)) {
      return;
    }

    const footerEl = this.footerRef.nativeElement as HTMLElement;
    const footerRect = footerEl.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const footerHeight = footerEl.offsetHeight; // Altezza totale del footer

    const defaultButtonMargin = 30; // Margine di default dal fondo

    // Se il footer è visibile nella viewport
    if (footerRect.top < viewportHeight) {
      const visibleFooterHeight = viewportHeight - footerRect.top;

      // Calcoliamo la posizione che il pulsante dovrebbe avere per fermarsi a metà del footer.
      // La sua distanza dal fondo della viewport sarà l'altezza visibile del footer meno metà dell'altezza totale del footer.
      const positionRelativeToFooter = visibleFooterHeight - (footerHeight / 2);

      // Il pulsante deve stare alla sua posizione di default (30px) OPPURE più in alto se il footer lo "spinge".
      // Usiamo Math.max per assicurarci che non scenda mai sotto il suo margine di default.
      this.scrollButtonBottom = Math.max(defaultButtonMargin, positionRelativeToFooter);

      this.isButtonOverFooter = true; // Indica che il pulsante è sopra il footer
    } else {
      // Il footer non è visibile, il pulsante torna alla sua posizione di default.
      this.scrollButtonBottom = defaultButtonMargin;
      this.isButtonOverFooter = false;
    }
  }

  scrollToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

  // --- Logica per la gestione della lingua delegata al LanguageService ---
  changeLanguage(lang: string): void {
    this.languageService.changeLanguage(lang);
  }

  // Metodo per ottenere la lingua corrente dall'URL (per evidenziare la bandiera attiva)
  getCurrentLanguage(): string {
    return this.languageService.getCurrentLanguage();
  }
}

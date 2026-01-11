// src/app/core/services/seo.service.ts
import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' // Il servizio è disponibile a livello globale nell'applicazione
})
export class SeoService {

  constructor(
    private titleService: Title, // Servizio Angular per gestire il titolo della pagina
    private metaService: Meta,   // Servizio Angular per gestire i meta tag
    private router: Router,      // Per intercettare i cambiamenti di rotta
    private activatedRoute: ActivatedRoute // Per accedere ai dati della rotta attiva
  ) { }

  /**
   * Aggiorna il titolo e i meta tag SEO della pagina.
   * @param title Il titolo della pagina (comparirà nella scheda del browser).
   * @param description La meta descrizione della pagina.
   * @param keywords Le meta keywords della pagina (opzionale, meno influenti oggi).
   * @param imageUrl L'URL di un'immagine per Open Graph/Twitter Cards (opzionale).
   * @param type Il tipo di contenuto per Open Graph (es. 'website', 'article', 'profile').
   */
  updateSeo(title: string, description: string, keywords?: string, imageUrl?: string, type: string = 'website'): void {
    // 1. Aggiorna il titolo della pagina
    this.titleService.setTitle(title);

    // 2. Aggiorna la meta descrizione
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ property: 'og:description', content: description }); // Open Graph
    this.metaService.updateTag({ name: 'twitter:description', content: description }); // Twitter Card

    // 3. Aggiorna le meta keywords (se fornite)
    if (keywords) {
      this.metaService.updateTag({ name: 'keywords', content: keywords });
    } else {
      // Rimuovi le keywords se non fornite, per pulizia
      this.metaService.removeTag('name="keywords"');
    }

    // 4. Aggiorna i meta tag Open Graph (per la condivisione sui social media)
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({ property: 'og:url', content: this.router.url });
    this.metaService.updateTag({ property: 'og:type', content: type });

    if (imageUrl) {
      this.metaService.updateTag({ property: 'og:image', content: imageUrl });
      this.metaService.updateTag({ name: 'twitter:image', content: imageUrl });
    } else {
      // Rimuovi le immagini social se non fornite
      this.metaService.removeTag('property="og:image"');
      this.metaService.removeTag('name="twitter:image"');
    }

    // 5. Aggiorna i meta tag Twitter Card
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' }); // 'summary' o 'summary_large_image'
    this.metaService.updateTag({ name: 'twitter:title', content: title });
    // this.metaService.updateTag({ name: 'twitter:site', content: '@YourTwitterHandle' }); // Opzionale: il tuo handle Twitter
    // this.metaService.updateTag({ name: 'twitter:creator', content: '@YourTwitterHandle' }); // Opzionale: il tuo handle Twitter
  }

  /**
   * Inizializza l'ascolto dei cambiamenti di rotta per aggiornare la SEO dinamicamente.
   * Questo metodo dovrebbe essere chiamato una sola volta, ad esempio in AppComponent.
   */
  initSeoUpdates(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd), // Filtra solo gli eventi di fine navigazione
      map(() => this.activatedRoute), // Prendi la rotta attiva
      map(route => {
        while (route.firstChild) { // Scendi nell'albero delle rotte per trovare la rotta attiva finale
          route = route.firstChild;
        }
        return route;
      }),
      filter(route => route.outlet === 'primary'), // Assicurati che sia la rotta principale
      switchMap(route => route.data) // Prendi i dati della rotta (dove potremo definire la SEO)
    ).subscribe(data => {
      // Se la rotta ha dati SEO, aggiorna la pagina
      if (data['seo']) {
        const seoData = data['seo'];
        this.updateSeo(
          seoData.title,
          seoData.description,
          seoData.keywords,
          seoData.imageUrl,
          seoData.type
        );
      } else {
        // Se una rotta non ha dati SEO specifici, puoi impostare dei valori predefiniti
        // o lasciare che il titolo del browser rimanga quello definito in index.html
        this.updateSeo(
          'Aleksander Nikolli - Frontend & Backend Developer',
          'Aleksander Nikolli è un Frontend/Backend Developer e Database Administrator che crea soluzioni software e siti web moderni, performanti e scalabili.',
          'sviluppatore web, frontend, backend, angular, nodejs, mysql, mongodb, consulente IT, web developer Roma, sviluppo software personalizzato',
          'https://res.cloudinary.com/dxz4eti2e/image/upload/v1753294688/sfondo_qzr5c7.png' // Immagine di fallback per i social
        );
      }
    });
  }

  addJsonLd(schema: object): void {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }

}

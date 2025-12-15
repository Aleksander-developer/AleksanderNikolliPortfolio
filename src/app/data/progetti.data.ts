
// src/app/data/progetti.data.ts
export interface Progetto {
  id: string;
  titolo: string;
  descrizione: string;
  immagine: string;

  tecnologie: string[];

  caratteristiche?: string[];
  sfideAffrontate?: string[];
  soluzioniImplementate?: string[];
  risultatiChiave?: string[];

  architettura?: string;

  fasiDiSviluppo?: string[];
  targetAudience?: string;

  aspectsCovered?: string[];

  linkDemo?: string;
  linkRepo?: string;
}


export const ProgettiDataAzzurraMakeup: Progetto[] = [

  {
    id: 'azzurra1',
    titolo: 'Azzurra Makeup Artist — Sito Portfolio Professionale',
    descrizione:
      'Sito web professionale sviluppato per una Makeup Artist certificata. Include homepage moderna, galleria fotografica ottimizzata, sezione servizi, recensioni clienti, moduli di contatto e un design elegante, responsive e performante. Realizzato con Angular 18 + SSR per garantire caricamenti rapidi e SEO nativo.',

    immagine: '/assets/projects/azzurra-home.webp',

    tecnologie: [
      'Angular 18',
      'Angular Universal (SSR)',
      'TypeScript',
      'SCSS',
      'Google Cloud Run',
      'Express Server',
      'Lazy Loading',
      'SEO Structured Data'
    ],

    caratteristiche: [
      'Caricamento ultra-veloce grazie al rendering SSR',
      'Galleria immagini ottimizzata e compressione WebP',
      'Navbar sticky con animazioni fluide',
      'Tema personalizzato Angular Material (rose-red)',
      'Gestione recensioni con card responsive',
      'Pagina Servizi completamente dinamica',
      'Form contatti validato + invio email backend',
      'Supporto multilingua (IT / EN)'
    ],

    sfideAffrontate: [
      'SEO avanzato su framework SPA',
      'Ottimizzazione immagini per mobile',
      'Coerenza visiva del brand make-up',
      'Creazione di un design elegante ma performante',
      'Gestione SSR + API backend su Cloud Run'
    ],

    soluzioniImplementate: [
      'Implementazione Angular Universal con pre-rendering delle pagine',
      'Pipeline Cloud Build → Cloud Run per deploy automatizzato',
      'Lazy loading strategico per ridurre i tempi di boot',
      'Generazione automatica tag <meta> e JSON-LD per Google',
      'Compressione immagini lato build con WebP'
    ],

    risultatiChiave: [
      'SEO score 98/100 su Lighthouse',
      'Tempo di caricamento pagina sotto 1.2s',
      'Riduzione del 40% del peso complessivo delle immagini',
      'Aumento del 60% dei contatti nelle prime 2 settimane'
    ],

    architettura:
      'Applicazione Angular SSR con Express custom server, routing modulare, lazy loading, scss componentizzati e ottimizzazioni per il rendering lato server. Backend dedicato su Node.js utilizzato per il form contatti e gestione recensioni.',

    fasiDiSviluppo: [
      'Analisi brand e palette colori',
      'UI/UX design desktop + mobile',
      'Sviluppo Angular + SSR',
      'Ottimizzazione SEO e performance',
      'Deploy su Google Cloud Run'
    ],

    targetAudience:
      'Clienti interessati ai servizi di makeup professionale: spose, modelle, fotografi, eventi e aziende.',

    aspectsCovered: [
      'Web Design',
      'SSO & SEO',
      'Performance optimization',
      'Responsive UX',
      'Cloud deployment',
      'Accessibility AA'
    ],

    linkDemo: 'https://azzurraangius.it',
    linkRepo: undefined // Repository privato
  }

];


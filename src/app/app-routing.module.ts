import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    data: {
      seo: {
        title: 'Aleksander Nikolli - Sviluppatore Web & Software',
        description: 'Aleksander Nikolli è un Frontend/Backend Developer e Database Administrator che crea soluzioni software e siti web moderni, performanti e scalabili.',
        keywords: 'sviluppatore web, frontend, backend, angular, nodejs, mysql, mongodb, consulente IT, web developer Roma, sviluppo software personalizzato',
        imageUrl: 'https://res.cloudinary.com/dxz4eti2e/image/upload/v1753295350/attestato-frontend_i4cpmv.jpg', // Immagine per la condivisione social
        type: 'website'
      }
    }
  },
  {
    path: 'chi-sono',
    loadChildren: () => import('./pages/chi-sono/chi-sono.module').then(m => m.ChiSonoModule),
    data: {
      seo: {
        title: 'Chi sono - Aleksander Nikolli | Developer',
        description: 'Scopri il profilo di Aleksander Nikolli: Frontend/Backend Developer e Database Administrator con competenze in Angular, Node.js, MySQL e molto altro. La mia formazione e le mie soft skills.',
        keywords: 'Aleksander Nikolli, chi sono, sviluppatore, developer, competenze, formazione, attestati, soft skills',
        imageUrl: 'https://res.cloudinary.com/dxz4eti2e/image/upload/v1753295350/attestato-frontend_i4cpmv.jpg',
        type: 'profile'
      }
    }
  },
  {
    path: 'servizi',
    loadChildren: () => import('./pages/servizi/servizi.module').then(m => m.ServiziModule),
    data: {
      seo: {
        title: 'Servizi - Aleksander Nikolli | Web Design & Sviluppo Software',
        description: 'Offro servizi di creazione software e siti web personalizzati, manutenzione, ottimizzazione SEO, strategie Google Ads e consulenza digitale. Soluzioni su misura per le tue esigenze.',
        keywords: 'servizi web, sviluppo software, web design, SEO, Google Ads, manutenzione siti, consulenza digitale, sviluppo app, freelance developer',
        imageUrl: 'https://res.cloudinary.com/dxz4eti2e/image/upload/v1753295350/attestato-frontend_i4cpmv.jpg',
        type: 'website'
      }
    }
  },
  {
    path: 'progetti',
    loadChildren: () => import('./pages/progetti/progetti.module').then(m => m.ProgettiModule),
    data: {
      seo: {
        title: 'Progetti - Aleksander Nikolli | Portfolio Sviluppatore Web',
        description: 'Esplora il portfolio di Aleksander Nikolli: progetti di sviluppo web frontend e backend, applicazioni personalizzate e soluzioni innovative. Vedi i miei lavori recenti.',
        keywords: 'portfolio, progetti web, sviluppo frontend, sviluppo backend, applicazioni web, case study, lavori developer',
        imageUrl: 'https://res.cloudinary.com/dxz4eti2e/image/upload/v1753295350/attestato-frontend_i4cpmv.jpg',
        type: 'website'
      }
    }
  },
  {
    path: 'progetti/:id',
    loadChildren: () => import('./pages/progetti/progetto-detail/progetto-detail.module').then(m => m.ProgettoDetailModule),
    data: {
      seo: {
        // Questi valori verranno sovrascritti dal componente ProgettoDetailComponent se ha dati specifici
        title: 'Dettaglio Progetto - Aleksander Nikolli',
        description: 'Dettagli approfonditi di un progetto di sviluppo web di Aleksander Nikolli. Scopri le tecnologie, le sfide e le soluzioni implementate.',
        keywords: 'dettaglio progetto, case study, progetto web, sviluppo software, tecnologie',
        imageUrl: 'https://res.cloudinary.com/dxz4eti2e/image/upload/v1753295350/attestato-frontend_i4cpmv.jpg',
        type: 'article' // Tipo specifico per un articolo/progetto
      }
    }
  },
  {
    path: 'contatti',
    loadChildren: () => import('./pages/contatti/contatti.module').then(m => m.ContattiModule),
    data: {
      seo: {
        title: 'Contatti - Aleksander Nikolli | Richiedi una Consulenza',
        description: 'Contatta Aleksander Nikolli per una consulenza gratuita o per discutere il tuo prossimo progetto. Invia un messaggio o richiedi un preventivo per sviluppo web e software.',
        keywords: 'contatti, preventivo, consulenza, sviluppatore, email, telefono, richiesta informazioni',
        imageUrl: 'https://res.cloudinary.com/dxz4eti2e/image/upload/v1753295350/attestato-frontend_i4cpmv.jpg',
        type: 'website'
      }
    }
  },
  { path: 'background', loadChildren: () => import('./pages/background/background.module').then(m => m.BackgroundModule) },
  {
    path: '**', // Rotta wildcard per gestire URL non trovati
    redirectTo: 'home', // Reindirizza alla home page
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

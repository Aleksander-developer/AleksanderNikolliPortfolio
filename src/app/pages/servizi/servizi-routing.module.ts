
// src/app/pages/servizi/servizi-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServiziComponent } from './servizi.component';
import { CreazioneSoftwareComponent } from './creazione-software/creazione-software.component';
import { SviluppoAppComponent } from './sviluppo-app/sviluppo-app.component';
import { StreamingMediaComponent } from './streaming-media/streaming-media.component';
import { ManutenzioneSoftwareComponent } from './manutenzione-software/manutenzione-software.component';
import { GoogleAdsComponent } from './google-ads/google-ads.component';
import { SeoContenutiComponent } from './seo-contenuti/seo-contenuti.component';
import { GestioneProgettiComponent } from './gestione-progetti/gestione-progetti.component';
import { ConsulenzaDigitaleComponent } from './consulenza-digitale/consulenza-digitale.component';

const routes: Routes = [
  {
    path: '',
    component: ServiziComponent,
    data: {
      seo: {
        title: 'Servizi | Aleksander Nikolli - Sviluppo Software, App, Streaming, SEO',
        description:
          'Scopri tutti i miei servizi: sviluppo software e siti web, app mobile e PWA, streaming media con FFmpeg/WebRTC, SEO, Google Ads e consulenza digitale.',
        keywords:
          'sviluppo software, sviluppo siti web, sviluppo app, pwa, streaming video, ffmpeg, webrtc, seo, google ads, consulenza digitale',
        type: 'website'
      }
    }
  },
  {
    path: 'creazione-software',
    component: CreazioneSoftwareComponent,
    data: {
      seo: {
        title: 'Creazione Software e Siti Web Personalizzati | Aleksander Nikolli',
        description:
          'Sviluppo software su misura e siti web moderni, responsive e ottimizzati per performance, scalabilità e user experience.',
        keywords:
          'creazione software, sviluppo software personalizzato, siti web, web app, sviluppo su misura',
        type: 'website'
      }
    }
  },
  {
    path: 'sviluppo-app',
    component: SviluppoAppComponent,
    data: {
      seo: {
        title: 'Sviluppo App Mobile e PWA | Aleksander Nikolli',
        description:
          'Progetto e sviluppo applicazioni mobile e PWA moderne, performanti e intuitive, per Android e iOS.',
        keywords:
          'sviluppo app, pwa, progressive web app, app mobile, android, ios',
        type: 'website'
      }
    }
  },
  {
    path: 'streaming-media',
    component: StreamingMediaComponent,
    data: {
      seo: {
        title: 'Streaming Media: FFmpeg, MediaMTX, HLS, DASH, WebRTC | Aleksander Nikolli',
        description:
          'Soluzioni di streaming audio/video con FFmpeg e MediaMTX: WebRTC real-time, HLS/DASH per live e on-demand, RTSP e architetture scalabili.',
        keywords:
          'ffmpeg, mediamtx, streaming video, webrtc, hls, dash, rtsp, live streaming',
        type: 'website'
      }
    }
  },
  {
    path: 'manutenzione-software',
    component: ManutenzioneSoftwareComponent,
    data: {
      seo: {
        title: 'Manutenzione e Ottimizzazione Continua | Aleksander Nikolli',
        description:
          'Aggiornamenti, bug fixing e ottimizzazioni continue per mantenere software e siti web sicuri, veloci e affidabili.',
        keywords:
          'manutenzione software, bug fixing, ottimizzazione performance, sicurezza web',
        type: 'website'
      }
    }
  },
  {
    path: 'google-ads',
    component: GoogleAdsComponent,
    data: {
      seo: {
        title: 'Strategie Google Ads (PPC) | Aleksander Nikolli',
        description:
          'Campagne Google Ads mirate per aumentare visibilità, traffico qualificato e conversioni.',
        keywords:
          'google ads, ppc, campagne pubblicitarie, marketing digitale, lead',
        type: 'website'
      }
    }
  },
  {
    path: 'seo-contenuti',
    component: SeoContenutiComponent,
    data: {
      seo: {
        title: 'Ottimizzazione SEO e Contenuti | Aleksander Nikolli',
        description:
          'SEO tecnica e contenuti ottimizzati per migliorare il posizionamento su Google e aumentare traffico organico di qualità.',
        keywords:
          'seo, ottimizzazione seo, contenuti seo, posizionamento google, seo tecnica',
        type: 'website'
      }
    }
  },
  {
    path: 'consulenza-digitale',
    component: ConsulenzaDigitaleComponent,
    data: {
      seo: {
        title: 'Consulenza Digitale e Soluzioni per Imprese | Aleksander Nikolli',
        description:
          'Consulenza strategica e sviluppo soluzioni digitali per semplificare processi e migliorare l’operatività aziendale.',
        keywords:
          'consulenza digitale, consulenza it, soluzioni per imprese, digitalizzazione',
        type: 'website'
      }
    }
  },
  {
    path: 'gestione-progetti',
    component: GestioneProgettiComponent,
    data: {
      seo: {
        title: 'Consulenza e Gestione Progetti Digitali | Aleksander Nikolli',
        description:
          'Gestione completa di progetti digitali: analisi, pianificazione, sviluppo e lancio con processi chiari e risultati misurabili.',
        keywords:
          'project management digitale, gestione progetti, consulenza progetti, sviluppo software',
        type: 'website'
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiziRoutingModule {}


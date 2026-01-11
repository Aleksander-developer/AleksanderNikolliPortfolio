// src/app/pages/servizi/servizi.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const $localize: any; // Necessario per l'i18n locale-based

interface Servizio {
  id: string;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-servizi',
  templateUrl: './servizi.component.html',
  styleUrls: ['./servizi.component.scss']
})
export class ServiziComponent implements OnInit {

  servizi: Servizio[] = [
    {
      id: 'creazione-software',
      title: $localize`:@@servizio_creazione_software_title:Creazione Software / Siti Web Personalizzati`,
      description: $localize`:@@servizio_creazione_software_desc:Dall'idea al lancio, creo soluzioni software su misura e siti web dinamici, responsive e ottimizzati per performance e user experience. Ogni linea di codice è pensata per il tuo successo digitale.`,
      icon: 'code'
    },
    {
      id: 'sviluppo-app',
      title: $localize`:@@servizio_sviluppo_app_title:Sviluppo App Mobile & PWA`,
      description: $localize`:@@servizio_sviluppo_app_desc:Progetto e sviluppo applicazioni mobile native e progressive web app (PWA) moderne, performanti e intuitive, compatibili con Android e iOS, per garantire la massima esperienza utente ovunque.`,
      icon: 'smartphone'
    },
    {
      id: 'streaming-media',
      title: $localize`:@@servizio_streaming_title:Streaming Media, Flussi & Protocolli`,
      description: $localize`:@@servizio_streaming_desc:Esperienza nella gestione e generazione di flussi audio/video tramite FFmpeg e MediaMTX. Implemento soluzioni basate su protocolli HLS, DASH, WebRTC e RTSP per streaming live, on-demand e comunicazioni real-time ad alte prestazioni.`,
      icon: 'stream'
    },
    {
      id: 'manutenzione-software',
      title: $localize`:@@servizio_manutenzione_title:Manutenzione & Ottimizzazione Continua`,
      description: $localize`:@@servizio_manutenzione_desc:Assicuro che le tue piattaforme digitali siano sempre al top. Offro aggiornamenti costanti, risoluzione proattiva dei bug e ottimizzazioni continue per garantire sicurezza, velocità e funzionalità inalterate nel tempo.`,
      icon: 'build'
    },
    {
      id: 'google-ads',
      title: $localize`:@@servizio_ads_title:Strategie Google Ads (PPC)`,
      description: $localize`:@@servizio_ads_desc:Massimizza la tua visibilità online con campagne Google Ads mirate. Progetto e gestisco strategie Pay-Per-Click per attrarre il tuo pubblico ideale, aumentare il traffico qualificato e convertire i clic in risultati concreti.`,
      icon: 'trending_up'
    },
    {
      id: 'seo-contenuti',
      title: $localize`:@@servizio_seo_title:Ottimizzazione SEO & Contenuti`,
      description: $localize`:@@servizio_seo_desc:Rendi il tuo sito una calamita per i motori di ricerca. Implemento tecniche SEO avanzate e strategie di contenuto per migliorare il tuo posizionamento, aumentare il traffico organico e farti trovare dai tuoi clienti ideali.`,
      icon: 'search'
    },
    {
      id: 'consulenza-digitale',
      title: $localize`:@@servizio_digitale_title:Consulenza Digitale & Soluzioni per Imprese`,
      description: $localize`:@@servizio_digitale_desc:Hai un'attività? La tua presenza online è fondamentale. Offro consulenza strategica e sviluppo soluzioni su misura (siti web, software, app) per semplificare il lavoro e ottimizzare la tua operatività digitale.`,
      icon: 'business'
    },
    {
      id: 'gestione-progetti',
      title: $localize`:@@servizio_progetto_title:Consulenza & Gestione Progetti Digitali`,
      description: $localize`:@@servizio_progetto_desc:Ti guido attraverso ogni fase del tuo progetto digitale, dalla concezione all'implementazione. Offro consulenza strategica e gestione completa per trasformare le tue idee in realtà, garantendo un lancio fluido e di successo.`,
      icon: 'lightbulb'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

    goToContatti(): void {
    this.router.navigate(['/contatti']);
  }

  goToServizio(id: string): void {
    this.router.navigate(['/servizi', id]);
  }
}


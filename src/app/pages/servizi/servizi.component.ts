// src/app/pages/servizi/servizi.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router

// Definisci l'interfaccia Servizio per i dati hardcoded
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
      title: 'Creazione Software / Siti Web Personalizzati',
      description: 'Dall\'idea al lancio, creo soluzioni software su misura e siti web dinamici, responsive e ottimizzati per performance e user experience. Ogni linea di codice è pensata per il tuo successo digitale.',
      icon: 'code'
    },
    {
      id: 'manutenzione-software',
      title: 'Manutenzione & Ottimizzazione Continua',
      description: 'Assicuro che le tue piattaforme digitali siano sempre al top. Offro aggiornamenti costanti, risoluzione proattiva dei bug e ottimizzazioni continue per garantire sicurezza, velocità e funzionalità inalterate nel tempo.',
      icon: 'build'
    },
    {
      id: 'google-ads',
      title: 'Strategie Google Ads (PPC)',
      description: 'Massimizza la tua visibilità online con campagne Google Ads mirate. Progetto e gestisco strategie Pay-Per-Click per attrarre il tuo pubblico ideale, aumentare il traffico qualificato e convertire i clic in risultati concreti.',
      icon: 'trending_up'
    },
    {
      id: 'seo',
      title: 'Ottimizzazione SEO & Contenuti',
      description: 'Rendi il tuo sito una calamita per i motori di ricerca. Implemento tecniche SEO avanzate e strategie di contenuto per migliorare il tuo posizionamento, aumentare il traffico organico e farti trovare dai tuoi clienti ideali.',
      icon: 'search'
    },
    {
      id: 'consulenza-digitale-imprese',
      title: 'Consulenza Digitale & Soluzioni per Imprese',
      description: 'Hai un\'attività? La tua presenza online è fondamentale. Offro consulenza strategica e sviluppo soluzioni su misura (siti web, software) per semplificare il lavoro e ottimizzare la tua operatività digitale.',
      icon: 'business'
    },
    {
      id: 'realizzazione-progetto',
      title: 'Consulenza & Gestione Progetti Digitali',
      description: 'Ti guido attraverso ogni fase del tuo progetto digitale, dalla concezione all\'implementazione. Offro consulenza strategica e gestione completa per trasformare le tue idee in realtà, garantendo un lancio fluido e di successo.',
      icon: 'lightbulb'
    }
  ];

  loading: boolean = false;
  error: string | null = null;

  // Inietta il Router nel costruttore
  constructor(private router: Router) { }

  ngOnInit(): void {
    // I dati sono hardcoded, quindi non c'è bisogno di logica di caricamento qui
  }

  // Metodo per navigare alla pagina dei contatti
  goToContatti(): void {
    this.router.navigate(['/contatti']);
  }

}

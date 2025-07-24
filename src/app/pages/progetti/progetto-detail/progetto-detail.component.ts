// src/app/pages/progetti/progetto-detail/progetto-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService, Progetto } from '../../../shared/services/shared.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-progetto-detail',
  templateUrl: './progetto-detail.component.html',
  styleUrls: ['./progetto-detail.component.scss']
})
export class ProgettoDetailComponent implements OnInit {
  progettoId!: string;
  progettoData?: Progetto;
  loading = true;
  errore = '';

  // Proprietà per gestire lo stato "mostra di più/meno" per la descrizione
  isDescriptionExpanded: boolean = false;
  readonly DESCRIPTION_MAX_CHARS: number = 400; // Limite di caratteri per la descrizione

  // NUOVO: Proprietà per gestire lo stato "mostra di più/meno" per le altre sezioni
  isFeaturesExpanded: boolean = false;
  isChallengesExpanded: boolean = false;
  isSolutionsExpanded: boolean = false;
  isResultsExpanded: boolean = false;
  isArchitectureExpanded: boolean = false;

  // NUOVO: Limiti per le liste e l'architettura
  readonly LIST_MAX_ITEMS: number = 4; // Limite di elementi per le liste (es. funzionalità, sfide)
  readonly ARCHITECTURE_MAX_CHARS: number = 300; // Limite di caratteri per il testo dell'architettura

  constructor(
    private route: ActivatedRoute,
    private sharedService: SharedService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.progettoId = params.get('id') ?? '';
      if (this.progettoId) {
        this.getProgettoDetail(this.progettoId);
      } else {
        this.errore = 'ID progetto non fornito.';
        this.loading = false;
      }
    });
  }

  getProgettoDetail(id: string): void {
    this.loading = true;
    this.errore = '';
    this.sharedService.getProgettoById(id).subscribe({
      next: (progetto) => {
        this.progettoData = progetto;
        this.loading = false;
        // Resetta tutti gli stati di espansione quando un nuovo progetto viene caricato
        this.isDescriptionExpanded = false;
        this.isFeaturesExpanded = false;
        this.isChallengesExpanded = false;
        this.isSolutionsExpanded = false;
        this.isResultsExpanded = false;
        this.isArchitectureExpanded = false;
        console.log('Dettaglio progetto caricato:', this.progettoData);
      },
      error: (err) => {
        console.error('Errore caricamento dettaglio progetto:', err);
        this.errore = 'Errore nel caricamento del progetto o progetto non trovato.';
        this.loading = false;
      }
    });
  }

  // Funzione per alternare lo stato di espansione della descrizione
  toggleDescription(): void {
    this.isDescriptionExpanded = !this.isDescriptionExpanded;
  }

  // Funzione per verificare se la descrizione è lunga e necessita dei pulsanti
  needsReadMoreDescription(): boolean {
    if (!this.progettoData || !this.progettoData.descrizione) {
      return false;
    }
    return this.progettoData.descrizione.length > this.DESCRIPTION_MAX_CHARS;
  }

  // NUOVO: Funzioni per alternare lo stato di espansione delle liste
  toggleFeatures(): void {
    this.isFeaturesExpanded = !this.isFeaturesExpanded;
  }
  needsReadMoreFeatures(): boolean {
    return (this.progettoData?.caratteristiche?.length || 0) > this.LIST_MAX_ITEMS;
  }

  toggleChallenges(): void {
    this.isChallengesExpanded = !this.isChallengesExpanded;
  }
  needsReadMoreChallenges(): boolean {
    return (this.progettoData?.sfideAffrontate?.length || 0) > this.LIST_MAX_ITEMS;
  }

  toggleSolutions(): void {
    this.isSolutionsExpanded = !this.isSolutionsExpanded;
  }
  needsReadMoreSolutions(): boolean {
    return (this.progettoData?.soluzioniImplementate?.length || 0) > this.LIST_MAX_ITEMS;
  }

  toggleResults(): void {
    this.isResultsExpanded = !this.isResultsExpanded;
  }
  needsReadMoreResults(): boolean {
    return (this.progettoData?.risultatiChiave?.length || 0) > this.LIST_MAX_ITEMS;
  }

  // NUOVO: Funzioni per alternare lo stato di espansione dell'architettura (testo)
  toggleArchitecture(): void {
    this.isArchitectureExpanded = !this.isArchitectureExpanded;
  }
  needsReadMoreArchitecture(): boolean {
    if (!this.progettoData || !this.progettoData.architettura) {
      return false;
    }
    return this.progettoData.architettura.length > this.ARCHITECTURE_MAX_CHARS;
  }

  // Questo metodo non è strettamente necessario se il backend restituisce testo puro,
  // ma è un buon esempio di come sanificare HTML se necessario.
  // getSafeHtml(html: string | undefined): SafeHtml {
  //   return html ? this.sanitizer.bypassSecurityTrustHtml(html) : '';
  // }
}

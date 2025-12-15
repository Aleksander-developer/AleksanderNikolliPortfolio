
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Progetto } from '../../../data/progetti.data';
import { ProgettiDataAzzurraMakeup } from '../../../data/progetti.data';

@Component({
  selector: 'app-progetto-detail',
  templateUrl: './progetto-detail.component.html',
  styleUrls: ['./progetto-detail.component.scss']
})
export class ProgettoDetailComponent implements OnInit {

  progettoData?: Progetto;

  // Stati per "mostra di più"
  isDescriptionExpanded = false;
  isFeaturesExpanded = false;
  isChallengesExpanded = false;
  isSolutionsExpanded = false;
  isResultsExpanded = false;
  isArchitectureExpanded = false;

  // Limiti caratteri / elementi
  readonly DESCRIPTION_MAX_CHARS = 400;
  readonly LIST_MAX_ITEMS = 4;
  readonly ARCHITECTURE_MAX_CHARS = 300;

  // Per compatibilità con HTML
  loading = false;
  errore = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';

    this.progettoData = ProgettiDataAzzurraMakeup.find(p => p.id === id);

    if (!this.progettoData) {
      this.errore = 'Progetto non trovato.';
    }
  }

  // ===========================
  // FUNZIONI "MOSTRA DI PIÙ"
  // ===========================

  toggleDescription(): void {
    this.isDescriptionExpanded = !this.isDescriptionExpanded;
  }

  toggleFeatures(): void {
    this.isFeaturesExpanded = !this.isFeaturesExpanded;
  }

  toggleChallenges(): void {
    this.isChallengesExpanded = !this.isChallengesExpanded;
  }

  toggleSolutions(): void {
    this.isSolutionsExpanded = !this.isSolutionsExpanded;
  }

  toggleResults(): void {
    this.isResultsExpanded = !this.isResultsExpanded;
  }

  toggleArchitecture(): void {
    this.isArchitectureExpanded = !this.isArchitectureExpanded;
  }

  // ===========================
  // CHECK PER "MOSTRA DI PIÙ"
  // ===========================

  needsReadMoreDescription(): boolean {
    return !!this.progettoData?.descrizione &&
           this.progettoData.descrizione.length > this.DESCRIPTION_MAX_CHARS;
  }

  needsReadMoreFeatures(): boolean {
    return (this.progettoData?.caratteristiche?.length || 0) > this.LIST_MAX_ITEMS;
  }

  needsReadMoreChallenges(): boolean {
    return (this.progettoData?.sfideAffrontate?.length || 0) > this.LIST_MAX_ITEMS;
  }

  needsReadMoreSolutions(): boolean {
    return (this.progettoData?.soluzioniImplementate?.length || 0) > this.LIST_MAX_ITEMS;
  }

  needsReadMoreResults(): boolean {
    return (this.progettoData?.risultatiChiave?.length || 0) > this.LIST_MAX_ITEMS;
  }

  needsReadMoreArchitecture(): boolean {
    return !!this.progettoData?.architettura &&
           this.progettoData.architettura.length > this.ARCHITECTURE_MAX_CHARS;
  }
}


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

  // NUOVO: Proprietà per gestire lo stato "mostra di più/meno"
  isDescriptionExpanded: boolean = false;
  readonly DESCRIPTION_MAX_LINES: number = 5; // Limite di righe prima di mostrare i pulsanti

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
        this.isDescriptionExpanded = false; // Resetta lo stato quando un nuovo progetto viene caricato
        console.log('Dettaglio progetto caricato:', this.progettoData);
      },
      error: (err) => {
        console.error('Errore caricamento dettaglio progetto:', err);
        this.errore = 'Errore nel caricamento del progetto o progetto non trovato.';
        this.loading = false;
      }
    });
  }

  // NUOVO: Funzione per alternare lo stato di espansione
  toggleDescription(): void {
    this.isDescriptionExpanded = !this.isDescriptionExpanded;
  }

  // NUOVO: Funzione per verificare se la descrizione è lunga e necessita dei pulsanti
  // Questo è un approccio euristico basato sul numero di caratteri.
  // Un approccio più preciso (ma più complesso) sarebbe calcolare le righe renderizzate.
  // Per ora, useremo una stima basata sui caratteri.
  needsReadMore(): boolean {
    if (!this.progettoData || !this.progettoData.descrizione) {
      return false;
    }
    // Stima approssimativa: 5 righe * 80 caratteri/riga (media)
    const charLimit = this.DESCRIPTION_MAX_LINES * 80;
    return this.progettoData.descrizione.length > charLimit;
  }

  // Questo metodo non è strettamente necessario se il backend restituisce testo puro,
  // ma è un buon esempio di come sanificare HTML se necessario.
  // getSafeHtml(html: string | undefined): SafeHtml {
  //   return html ? this.sanitizer.bypassSecurityTrustHtml(html) : '';
  // }
}

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
        console.log('Dettaglio progetto caricato:', this.progettoData);
      },
      error: (err) => {
        console.error('Errore caricamento dettaglio progetto:', err);
        this.errore = 'Errore nel caricamento del progetto o progetto non trovato.';
        this.loading = false;
      }
    });
  }

  // Questo metodo non è strettamente necessario se il backend restituisce testo puro,
  // ma è un buon esempio di come sanificare HTML se necessario.
  // getSafeHtml(html: string | undefined): SafeHtml {
  //   return html ? this.sanitizer.bypassSecurityTrustHtml(html) : '';
  // }
}

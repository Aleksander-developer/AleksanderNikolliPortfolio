// src/app/pages/progetti/progetti.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService, Progetto } from '../../shared/services/shared.service';

@Component({
  selector: 'app-progetti',
  templateUrl: './progetti.component.html',
  styleUrls: ['./progetti.component.scss']
})
export class ProgettiComponent implements OnInit {
  progetti: Progetto[] = [];
  loading = true;
  errore = '';

  constructor(
    private sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sharedService.getProgetti().subscribe({
      next: (data) => {
        this.progetti = data;
        this.loading = false;
        console.log('Progetti caricati (per debug):', this.progetti);
        if (this.progetti.length === 0) {
          console.log('Nessun progetto trovato dal backend, visualizzo il messaggio placeholder.');
        }
      },
      error: (err) => {
        console.error('Errore caricamento progetti (per debug):', err);
        this.errore = 'Errore nel caricamento dei progetti.';
        this.loading = false;
      }
    });
  }

  goToContatti(): void {
    this.router.navigate(['/contatti']);
  }
}

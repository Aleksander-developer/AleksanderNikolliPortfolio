import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestione-progetti',
  templateUrl: './gestione-progetti.component.html',
  styleUrls: ['./gestione-progetti.component.scss']
})
export class GestioneProgettiComponent {

    constructor(private router: Router) {}

  goToServizi(): void {
    this.router.navigate(['/servizi']);
  }
}

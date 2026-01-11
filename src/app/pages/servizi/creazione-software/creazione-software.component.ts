

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creazione-software',
  templateUrl: './creazione-software.component.html',
  styleUrls: ['./creazione-software.component.scss']
})
export class CreazioneSoftwareComponent {
    constructor(private router: Router) {}

  goToServizi(): void {
    this.router.navigate(['/servizi']);
  }

}


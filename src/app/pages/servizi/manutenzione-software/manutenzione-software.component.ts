import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manutenzione-software',
  templateUrl: './manutenzione-software.component.html',
  styleUrls: ['./manutenzione-software.component.scss']
})
export class ManutenzioneSoftwareComponent {

    constructor(private router: Router) {}

  goToServizi(): void {
    this.router.navigate(['/servizi']);
  }
}

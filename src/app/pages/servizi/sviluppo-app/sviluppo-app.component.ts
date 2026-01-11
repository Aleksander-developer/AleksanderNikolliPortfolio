import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sviluppo-app',
  templateUrl: './sviluppo-app.component.html',
  styleUrls: ['./sviluppo-app.component.scss']
})
export class SviluppoAppComponent {
    constructor(private router: Router) {}

  goToServizi(): void {
    this.router.navigate(['/servizi']);
  }

}

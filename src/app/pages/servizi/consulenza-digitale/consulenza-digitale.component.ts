import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulenza-digitale',
  templateUrl: './consulenza-digitale.component.html',
  styleUrl: './consulenza-digitale.component.scss'
})
export class ConsulenzaDigitaleComponent {


  constructor(private router: Router) {}

  goToServizi(): void {
    this.router.navigate(['/servizi']);
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seo-contenuti',
  templateUrl: './seo-contenuti.component.html',
  styleUrls: ['./seo-contenuti.component.scss']
})
export class SeoContenutiComponent {

    constructor(private router: Router) {}

  goToServizi(): void {
    this.router.navigate(['/servizi']);
  }
}

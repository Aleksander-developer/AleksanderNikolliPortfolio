import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-google-ads',
  templateUrl: './google-ads.component.html',
  styleUrls: ['./google-ads.component.scss']
})
export class GoogleAdsComponent {
    constructor(private router: Router) {}

  goToServizi(): void {
    this.router.navigate(['/servizi']);
  }

}


// src/app/pages/progetti/progetti.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgettiDataAzzurraMakeup, Progetto } from '../../data/progetti.data';

@Component({
  selector: 'app-progetti',
  templateUrl: './progetti.component.html',
  styleUrls: ['./progetti.component.scss']
})
export class ProgettiComponent implements OnInit {
  progetti: Progetto[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.progetti = ProgettiDataAzzurraMakeup;
  }

  goToContatti(): void {
    this.router.navigate(['/contatti']);
  }
}


import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Lista delle competenze tecnologiche (come da tua richiesta)
  techList: string[] = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'AJAX',
    'TypeScript',
    'ECMAScript 6+',
    'Responsive Design',
    'jQuery',
    'Bootstrap',
    'GIT',
    'Angular',
    'Node.js',
    'Express',
    'MongoDB',
    'DataBase MySQL',
    'REST API',
    'Ionic Framework',
    'Capacitor'
  ];

  // Variabile 'cols' per MatGridList.
  // Nota: Nel tuo home.component.html attuale, la griglia delle tech usa CSS Grid direttamente.
  // Se volessi usare MatGridList, dovresti modificare l'HTML per usare <mat-grid-list [cols]="cols">
  // e <mat-grid-tile *ngFor="let tech of techList">.
  // Per ora, la variabile è definita ma non direttamente usata nel template fornito.
  cols: number = 4;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    // Osserva i breakpoint per adattare il numero di colonne (se usassi MatGridList)
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.XSmall]) {
        this.cols = 1;
      } else if (result.breakpoints[Breakpoints.Small]) {
        this.cols = 2;
      } else if (result.breakpoints[Breakpoints.Medium]) {
        this.cols = 3;
      } else {
        this.cols = 4;
      }
    });
  }

  // Dati per la sezione "Featured Projects" (commentata in home.component.html)
  // featuredProjects = [
  //   {
  //     title: 'Portfolio Web App',
  //     description: 'Un sito personale responsive costruito con Angular e Material Design.',
  //     image: 'assets/images/projects/portfolio.png',
  //     link: '/progetti/portfolio-web-app'
  //   },
  //   {
  //     title: 'Gestione Task',
  //     description: 'Applicazione web per la gestione di attività, con backend Node.js e MongoDB.',
  //     image: 'assets/images/projects/task-manager.png',
  //     link: '/progetti/task-manager'
  //   },
  //   {
  //     title: 'E-commerce Demo',
  //     description: 'Demo di e-commerce con Angular, Express e MySQL, sistema completo di ordini.',
  //     image: 'assets/images/projects/ecommerce.png',
  //     link: '/progetti/ecommerce'
  //   }
  // ];
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Rotte per i moduli lazy-loaded
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'chi-sono', loadChildren: () => import('./pages/chi-sono/chi-sono.module').then(m => m.ChiSonoModule) },
  { path: 'contatti', loadChildren: () => import('./pages/contatti/contatti.module').then(m => m.ContattiModule) },
  { path: 'servizi', loadChildren: () => import('./pages/servizi/servizi.module').then(m => m.ServiziModule) },
  { path: 'progetti', loadChildren: () => import('./pages/progetti/progetti.module').then(m => m.ProgettiModule) },
  // Aggiungiamo una rotta per il dettaglio del progetto con un parametro ID
  { path: 'progetti/:id', loadChildren: () => import('./pages/progetti/progetto-detail/progetto-detail.module').then(m => m.ProgettoDetailModule) },

  // Rotta di reindirizzamento per il percorso radice (pagina di default)
  // Quando Angular i18n rimuove il prefisso lingua, "/" diventa ""
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Rotta wildcard per qualsiasi percorso non corrispondente (es. URL sbagliati)
  // Reindirizza alla home per evitare pagine vuote o errori
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

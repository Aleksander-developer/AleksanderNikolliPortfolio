
// src/app/pages/servizi/servizi.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiziRoutingModule } from './servizi-routing.module';
import { ServiziComponent } from './servizi.component';
import { SharedModule } from '../../shared/shared.module';
import { CreazioneSoftwareComponent } from './creazione-software/creazione-software.component';
import { SviluppoAppComponent } from './sviluppo-app/sviluppo-app.component';
import { StreamingMediaComponent } from './streaming-media/streaming-media.component';
import { ManutenzioneSoftwareComponent } from './manutenzione-software/manutenzione-software.component';
import { GoogleAdsComponent } from './google-ads/google-ads.component';
import { SeoContenutiComponent } from './seo-contenuti/seo-contenuti.component';
import { ConsulenzaDigitaleComponent } from './consulenza-digitale/consulenza-digitale.component';
import { GestioneProgettiComponent } from './gestione-progetti/gestione-progetti.component';


@NgModule({
  declarations: [
    ServiziComponent,
    CreazioneSoftwareComponent,
    SviluppoAppComponent,
    StreamingMediaComponent,
    ManutenzioneSoftwareComponent,
    GoogleAdsComponent,
    SeoContenutiComponent,
    ConsulenzaDigitaleComponent,
    GestioneProgettiComponent
  ],
  imports: [
    CommonModule,
    ServiziRoutingModule,
    SharedModule
  ]
})
export class ServiziModule { }

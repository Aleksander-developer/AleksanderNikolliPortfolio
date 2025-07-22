import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiziRoutingModule } from './servizi-routing.module';
import { ServiziComponent } from './servizi.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ServiziComponent
  ],
  imports: [
    CommonModule,
    ServiziRoutingModule,
    SharedModule
  ]
})
export class ServiziModule { }

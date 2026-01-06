
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';

import { CreaLogoSoftwareComponent } from './crea-logo-software/crea-logo-software.component';

@NgModule({
  declarations: [
    CreaLogoSoftwareComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CreaLogoSoftwareComponent
  ]
})
export class VetrinaSoftwareModule {}


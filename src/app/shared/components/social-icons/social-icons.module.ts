
// src/app/shared/components/social-icons/social-icons.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgGithubComponent } from './svg-github/svg-github.component';
import { SvgLinkedinComponent } from './svg-linkedin/svg-linkedin.component';
import { SvgInstagramComponent } from './svg-instagram/svg-instagram.component';
import { SvgFacebookComponent } from './svg-facebook/svg-facebook.component';
import { SvgWhatsappComponent } from './svg-whatsapp/svg-whatsapp.component';
import { SocialIconsComponent } from './social-icons.component';



@NgModule({
  declarations: [
    SvgGithubComponent,
    SvgLinkedinComponent,
    SvgInstagramComponent,
    SvgFacebookComponent,
    SvgWhatsappComponent,
    SocialIconsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SocialIconsComponent,
    SvgWhatsappComponent
  ]
})
export class SocialIconsModule { }


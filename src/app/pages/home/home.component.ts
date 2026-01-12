
// src/app/pages/home/home.component.ts

import { Component } from '@angular/core';
import { FaqItem } from '../../shared/components/faq/faq.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  genericFaqs: FaqItem[] = [
    {
      question: $localize`:@@faqProjectTypesQ:Che tipo di progetti realizzi?`,
      answer: $localize`:@@faqProjectTypesA:Sviluppo software personalizzato, app web e mobile, piattaforme streaming e soluzioni digitali su misura.`
    },
    {
      question: $localize`:@@faqComplexProjectsQ:Lavori anche su progetti complessi o già avviati?`,
      answer: $localize`:@@faqComplexProjectsA:Sì, intervengo sia su nuovi progetti che su software esistenti per migliorarli, ottimizzarli o completarli.`
    },
    {
      question: $localize`:@@faqMaintenanceQ:Segui anche la fase di manutenzione?`,
      answer: $localize`:@@faqMaintenanceA:Offro supporto continuo, manutenzione evolutiva e ottimizzazione per garantire stabilità, sicurezza e performance nel tempo.`
    },
    {
      question: $localize`:@@faqFirstContactQ:Come avviene il primo contatto?`,
      answer: $localize`:@@faqFirstContactA:Dopo un primo contatto analizziamo insieme il progetto e definiamo una strategia chiara, realistica e sostenibile.`
    }
  ];
}


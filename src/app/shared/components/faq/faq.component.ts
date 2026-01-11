
import { Component, Input } from '@angular/core';

export interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  @Input() title = 'Domande frequenti';
  @Input() faqs: FaqItem[] = [];

  openIndex: number | null = null;

  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }
}



import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';
import { FaqItem } from '../../../shared/components/faq/faq.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-streaming-media',
  templateUrl: './streaming-media.component.html',
  styleUrls: ['./streaming-media.component.scss']
})
export class StreamingMediaComponent implements OnInit {

  faqs: FaqItem[] = [
    {
      question: 'Qual è la differenza tra WebRTC e HLS?',
      answer: 'WebRTC è progettato per comunicazioni real-time a bassissima latenza, mentre HLS è più adatto allo streaming live e on-demand scalabile.'
    },
    {
      question: 'Quando usare FFmpeg in un progetto streaming?',
      answer: 'FFmpeg viene utilizzato per encoding, transcoding, muxing e gestione avanzata dei flussi audio e video.'
    },
    {
      question: 'MediaMTX è adatto a progetti professionali?',
      answer: 'Sì, MediaMTX è un media server leggero e performante, ideale per architetture moderne e scalabili.'
    }
  ];

  constructor(
    private seoService: SeoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.seoService.addJsonLd(this.buildFaqSchema());
  }

    goToServizi(): void {
    this.router.navigate(['/servizi']);
  }

  private buildFaqSchema(): object {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": this.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }
}


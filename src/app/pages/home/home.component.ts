
// src/app/pages/home/home.componet.ts
// src/app/pages/home/home.component.ts
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FaqItem } from '../../shared/components/faq/faq.component';

interface TechItem {
  name: string;
  category:
    | 'frontend'
    | 'backend'
    | 'framework'
    | 'database'
    | 'mobile'
    | 'media'
    | 'cloud'
    | 'devops'
    | 'tool';
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  techList: TechItem[] = [
    /* FRONTEND */
    { name: $localize`:@@techHtml:HTML5`, category: 'frontend' },
    { name: $localize`:@@techCss:CSS3`, category: 'frontend' },
    { name: $localize`:@@techJs:JavaScript`, category: 'frontend' },
    { name: $localize`:@@techAjax:AJAX`, category: 'frontend' },
    { name: $localize`:@@techTs:TypeScript`, category: 'frontend' },
    { name: $localize`:@@techEs:ECMAScript 6+`, category: 'frontend' },
    { name: $localize`:@@techResponsive:Responsive Design`, category: 'frontend' },
    { name: $localize`:@@techJquery:jQuery`, category: 'frontend' },
    { name: $localize`:@@techBootstrap:Bootstrap`, category: 'frontend' },

    /* TOOLS */
    { name: $localize`:@@techGit:GIT`, category: 'tool' },

    /* FRAMEWORK */
    { name: $localize`:@@techAngular:Angular`, category: 'framework' },

    /* BACKEND */
    { name: $localize`:@@techNode:Node.js`, category: 'backend' },
    { name: $localize`:@@techExpress:Express`, category: 'backend' },
    { name: $localize`:@@techRest:REST API`, category: 'backend' },

    /* DATABASE */
    { name: $localize`:@@techMongo:MongoDB`, category: 'database' },
    { name: $localize`:@@techMysql:MySQL Database`, category: 'database' },

    /* MOBILE */
    { name: $localize`:@@techIonic:Ionic Framework`, category: 'mobile' },
    { name: $localize`:@@techCapacitor:Capacitor`, category: 'mobile' },

    /* 🔥 STREAMING / MEDIA */
    { name: $localize`:@@techFfmpeg:FFmpeg`, category: 'media' },
    { name: $localize`:@@techMediamtx:MediaMTX`, category: 'media' },
    { name: $localize`:@@techWebrtc:WebRTC`, category: 'media' },
    { name: $localize`:@@techHls:HLS`, category: 'media' },
    { name: $localize`:@@techDash:MPEG-DASH`, category: 'media' },
    { name: $localize`:@@techBunny:Bunny.net`, category: 'media' },

    /* ☁️ CLOUD */
    { name: $localize`:@@techHetzner:Hetzner Cloud`, category: 'cloud' },
    { name: $localize`:@@techGcp:Google Cloud Platform`, category: 'cloud' },
    { name: $localize`:@@techAws:Amazon Web Services (AWS)`, category: 'cloud' },

    /* ⚙️ DEVOPS */
    { name: $localize`:@@techDocker:Docker`, category: 'devops' },
    // { name: $localize`:@@techDockerCompose:Docker Compose`, category: 'devops' },
    { name: $localize`:@@techCicd:CI/CD DevOps`, category: 'devops' },

    /* 📊 SEO */
    { name: $localize`:@@techSeo:SEO & Analytics`, category: 'tool' }
  ];

  cols = 4;

  displayedTechList: TechItem[] = [];
  private techQueue: TechItem[] = [];

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    console.log('TECH TOTALI:', this.techList.length); // 👉 31

    this.techQueue = this.shuffleArray([...this.techList]);
    this.startTechReveal();

    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.XSmall]) this.cols = 1;
      else if (result.breakpoints[Breakpoints.Small]) this.cols = 2;
      else if (result.breakpoints[Breakpoints.Medium]) this.cols = 3;
      else this.cols = 4;
    });
  }

  startTechReveal(): void {
    const interval = setInterval(() => {
      if (!this.techQueue.length) {
        clearInterval(interval);
        return;
      }

      const batchSize = Math.min(
        Math.floor(Math.random() * 2) + 2,
        this.techQueue.length
      );

      this.displayedTechList.push(
        ...this.techQueue.splice(0, batchSize)
      );
    }, 400);
  }

  shuffleArray(array: TechItem[]): TechItem[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

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


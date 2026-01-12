
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

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
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss']
})
export class TechStackComponent
  implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('techSection') techSection!: ElementRef<HTMLElement>;

  techList: TechItem[] = [
    { name: $localize`:@@techHtml:HTML5`, category: 'frontend' },
    { name: $localize`:@@techCss:CSS3`, category: 'frontend' },
    { name: $localize`:@@techJs:JavaScript`, category: 'frontend' },
    { name: $localize`:@@techAjax:AJAX`, category: 'frontend' },
    { name: $localize`:@@techTs:TypeScript`, category: 'frontend' },
    { name: $localize`:@@techEs:ECMAScript 6+`, category: 'frontend' },
    { name: $localize`:@@techResponsive:Responsive Design`, category: 'frontend' },
    { name: $localize`:@@techJquery:jQuery`, category: 'frontend' },
    { name: $localize`:@@techBootstrap:Bootstrap`, category: 'frontend' },
    { name: $localize`:@@techGit:GIT`, category: 'tool' },
    { name: $localize`:@@techAngular:Angular`, category: 'framework' },
    { name: $localize`:@@techNode:Node.js`, category: 'backend' },
    { name: $localize`:@@techExpress:Express`, category: 'backend' },
    { name: $localize`:@@techRest:REST API`, category: 'backend' },
    { name: $localize`:@@techMongo:MongoDB`, category: 'database' },
    { name: $localize`:@@techMysql:MySQL Database`, category: 'database' },
    { name: $localize`:@@techIonic:Ionic Framework`, category: 'mobile' },
    { name: $localize`:@@techCapacitor:Capacitor`, category: 'mobile' },
    { name: $localize`:@@techFfmpeg:FFmpeg`, category: 'media' },
    { name: $localize`:@@techMediamtx:MediaMTX`, category: 'media' },
    { name: $localize`:@@techWebrtc:WebRTC`, category: 'media' },
    { name: $localize`:@@techHls:HLS`, category: 'media' },
    { name: $localize`:@@techDash:MPEG-DASH`, category: 'media' },
    { name: $localize`:@@techBunny:Bunny.net`, category: 'media' },
    { name: $localize`:@@techHetzner:Hetzner Cloud`, category: 'cloud' },
    { name: $localize`:@@techGcp:Google Cloud Platform`, category: 'cloud' },
    { name: $localize`:@@techAws:Amazon Web Services (AWS)`, category: 'cloud' },
    { name: $localize`:@@techDocker:Docker`, category: 'devops' },
    { name: $localize`:@@techCicd:CI/CD DevOps`, category: 'devops' },
    { name: $localize`:@@techSeo:SEO & Analytics`, category: 'tool' }
  ];

  displayedTechList: TechItem[] = [];
  private techQueue: TechItem[] = [];
  private observer?: IntersectionObserver;
  private started = false;

  cols = 4;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.techQueue = this.shuffle([...this.techList]);

    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large
    ]).subscribe(r => {
      if (r.breakpoints[Breakpoints.XSmall]) this.cols = 1;
      else if (r.breakpoints[Breakpoints.Small]) this.cols = 2;
      else if (r.breakpoints[Breakpoints.Medium]) this.cols = 3;
      else this.cols = 4;
    });
  }

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') return;

    this.observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !this.started) {
        this.started = true;
        this.startReveal();
        this.observer?.disconnect();
      }
    }, { threshold: 0.25 });

    this.observer.observe(this.techSection.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private startReveal(): void {
    const interval = setInterval(() => {
      if (!this.techQueue.length) {
        clearInterval(interval);
        return;
      }

      const batch = Math.min(
        Math.floor(Math.random() * 2) + 2,
        this.techQueue.length
      );

      this.displayedTechList.push(...this.techQueue.splice(0, batch));
    }, 400);
  }

  private shuffle(array: TechItem[]): TechItem[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}


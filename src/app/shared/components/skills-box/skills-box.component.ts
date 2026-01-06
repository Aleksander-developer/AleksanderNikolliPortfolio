
import { Component, OnInit, OnDestroy } from '@angular/core';

interface Skill {
  label: string;
  highlight?: boolean;
}

@Component({
  selector: 'app-skills-box',
  templateUrl: './skills-box.component.html',
  styleUrls: ['./skills-box.component.scss']
})
export class SkillsBoxComponent implements OnInit, OnDestroy {

  private readonly RANDOM_HIGHLIGHT_COUNT = 4;
  private readonly INTERVAL_MS = 1000;

  private intervalId?: number;

  skills: Skill[] = [
    // Core
    { label: 'Angular' },
    { label: 'TypeScript' },
    { label: 'JavaScript ES6+' },
    { label: 'HTML / CSS / SCSS' },
    { label: 'Responsive Design' },

    // Mobile
    { label: 'Ionic' },
    { label: 'Capacitor' },

    // Backend
    { label: 'Node.js / Express' },
    { label: 'MySQL' },
    { label: 'MongoDB' },

    // DevOps / Cloud
    { label: 'Docker' },
    { label: 'Docker Compose' },
    { label: 'CI / CD (DevOps)' },
    { label: 'Google Cloud Run' },
    { label: 'AWS' },
    { label: 'Hetzner' },

    // Media / Streaming
    { label: 'MediaMTX' },
    { label: 'FFmpeg' },

    // CDN / Performance
    { label: 'Bunny.net' },

    // Tools
    { label: 'Git / GitHub' },
    { label: 'SEO / Analytics' }
  ];

  ngOnInit(): void {
    this.rotateHighlights();
    this.intervalId = window.setInterval(
      () => this.rotateHighlights(),
      this.INTERVAL_MS
    );
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  // ===============================
  // ROTAZIONE HIGHLIGHT RANDOM
  // ===============================
  private rotateHighlights(): void {
    // 1️⃣ Spegni tutte
    this.skills.forEach(skill => {
      skill.highlight = false;
    });

    // 2️⃣ Accendi N skill casuali
    this.shuffle(this.skills)
      .slice(0, this.RANDOM_HIGHLIGHT_COUNT)
      .forEach(skill => skill.highlight = true);
  }

  private shuffle<T>(array: T[]): T[] {
    return [...array].sort(() => Math.random() - 0.5);
  }
}


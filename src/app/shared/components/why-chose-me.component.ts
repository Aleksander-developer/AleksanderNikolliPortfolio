
// src/app/shared/components/why-chose-me.component.ts
import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-why-chose-me',
  templateUrl: './why-chose-me.component.html',
  styleUrls: ['./why-chose-me.component.scss']
})
export class WhyChoseMeComponent implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const host: HTMLElement = this.el.nativeElement;
    const title: HTMLElement | null = host.querySelector('.typing-title');

    /* --- FIX ANIMAZIONE FADE UP SSR --- */
    // parte SOLO lato client
    setTimeout(() => {
      host.querySelector('.why-choose-me-card')?.classList.add('animate');
    }, 50);

    /* --- EFFETTO TYPING --- */
    if (!title) return;

    title.classList.remove('start-typing', 'typing-done');

    setTimeout(() => {
      title.classList.add('start-typing');
    }, 150);

    title.addEventListener('animationend', (event: AnimationEvent) => {
      if (event.animationName === 'typing') {
        title.classList.add('typing-done');
      }
    }, { once: true });
  }
}


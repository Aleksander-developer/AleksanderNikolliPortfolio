// src/app/shared/components/reviews/reviews.component.ts
import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { ReviewsService, Review } from '../../services/reviews.service';
import { isPlatformBrowser } from '@angular/common';
import { interval, Subscription } from 'rxjs'; // Importa interval e Subscription per l'auto-scorrimento

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit, OnDestroy {
  reviews: Review[] = [];
  isLoading: boolean = true;
  isGoogleVerified: boolean = true; // <--- Badge "Verificato su Google": IMPOSTA QUI TRUE/FALSE MANUALE

  currentIndex: number = 0; // Indice della recensione attualmente visualizzata nel carosello
  private autoSlideSubscription!: Subscription; // Per gestire la sottoscrizione all'intervallo

  constructor(
    private reviewsService: ReviewsService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    this.loadReviews();
    // Non è più necessario un listener per il resize per il numero di recensioni visualizzate,
    // in quanto il carosello ne mostrerà sempre una alla volta.
    // Il resize rimane utile se si vuole adattare la dimensione della card del carosello.
  }

  ngOnDestroy(): void {
    // Pulisci la sottoscrizione all'intervallo per evitare memory leaks
    if (this.autoSlideSubscription) {
      this.autoSlideSubscription.unsubscribe();
    }
  }

  loadReviews(): void {
    this.isLoading = true;
    this.reviewsService.getReviews().subscribe(data => {
      this.reviews = data;
      this.isLoading = false;
      // Avvia l'auto-scorrimento solo se ci sono recensioni
      if (this.reviews.length > 0) {
        this.startAutoSlide();
      }
    });
  }

  // Avvia l'auto-scorrimento delle recensioni
  startAutoSlide(): void {
    // Pulisci qualsiasi sottoscrizione esistente prima di iniziarne una nuova
    if (this.autoSlideSubscription) {
      this.autoSlideSubscription.unsubscribe();
    }
    // Ogni 3 secondi, passa alla recensione successiva
    this.autoSlideSubscription = interval(3000).subscribe(() => {
      this.nextReview();
    });
  }

  // Passa alla recensione successiva
  nextReview(): void {
    if (this.reviews.length === 0) return;
    this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
    this.resetAutoSlide(); // Resetta il timer dopo un'azione manuale
  }

  // Passa alla recensione precedente
  prevReview(): void {
    if (this.reviews.length === 0) return;
    this.currentIndex = (this.currentIndex - 1 + this.reviews.length) % this.reviews.length;
    this.resetAutoSlide(); // Resetta il timer dopo un'azione manuale
  }

  // Vai a una recensione specifica tramite il suo indice
  goToReview(index: number): void {
    if (this.reviews.length === 0) return;
    this.currentIndex = index;
    this.resetAutoSlide(); // Resetta il timer dopo un'azione manuale
  }

  // Resetta il timer dell'auto-scorrimento
  resetAutoSlide(): void {
    // Pulisci l'intervallo esistente e riavvialo
    if (this.autoSlideSubscription) {
      this.autoSlideSubscription.unsubscribe();
    }
    this.startAutoSlide();
  }

  // Funzione per generare le stelle piene (mantieni la logica esistente)
  getStars(rating: number): boolean[] {
    return Array(rating).fill(true);
  }

  // Funzione per generare le stelle vuote (mantieni la logica esistente)
  getEmptyStars(rating: number): boolean[] {
    return Array(5 - rating).fill(false);
  }
}

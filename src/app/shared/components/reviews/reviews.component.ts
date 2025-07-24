// src/app/shared/components/reviews/reviews.component.ts
import { Component, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { ReviewsService, Review } from '../../services/reviews.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
  // ASSICURATI CHE NON CI SIANO 'standalone: true' O 'imports: [...]' QUI
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] = [];
  displayedReviews: Review[] = [];
  isLoading: boolean = true;
  isGoogleVerified: boolean = true; // <--- Badge "Verificato su Google": IMPOSTA QUI TRUE/FALSE MANUALE

  constructor(
    private reviewsService: ReviewsService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    this.loadReviews();
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('resize', this.onResize.bind(this));
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.onResize.bind(this));
    }
  }

  loadReviews(): void {
    this.isLoading = true;
    this.reviewsService.getReviews().subscribe(data => {
      this.reviews = data;
      this.isLoading = false;
      this.updateDisplayedReviews();
    });
  }

  onResize(): void {
    this.updateDisplayedReviews();
  }

  updateDisplayedReviews(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.displayedReviews = this.reviews.slice(0, 3);
      return;
    }

    const width = window.innerWidth;
    let numToShow: number;

    if (width >= 992) {
      numToShow = 3;
    } else if (width >= 768) {
      numToShow = 2;
    } else {
      numToShow = 1;
    }
    this.displayedReviews = this.reviews.slice(0, numToShow);
  }

  getStars(rating: number): boolean[] {
    return Array(rating).fill(true);
  }

  getEmptyStars(rating: number): boolean[] {
    return Array(5 - rating).fill(false);
  }
}

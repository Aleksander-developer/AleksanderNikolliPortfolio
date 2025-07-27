// src/app/shared/services/reviews.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment'; // ✅ NUOVO: Importa l'ambiente per coerenza

// Interfaccia per la struttura di una singola recensione (deve corrispondere al backend)
export interface Review {
  reviewId: string;
  reviewer: {
    displayName: string;
    profilePhotoUrl: string;
    isVerified: boolean;
  };
  starRating: 'FIVE' | 'FOUR' | 'THREE' | 'TWO' | 'ONE';
  comment: string;
  createTime: string;
  updateTime: string;
  reviewReply?: {
    comment: string;
    updateTime: string;
  };
  // CORREZIONE DEFINITIVA: starRatingNumber è ora obbligatorio
  starRatingNumber: number; // <--- RIMOSSO IL '?' QUI
}

@Injectable({
  providedIn: 'root'
})

export class ReviewsService {
  // ✅ CORREZIONE: Usa environment.apiUrl per coerenza e gestibilità
  private apiUrl = `${environment.apiUrl}/reviews`; 

  constructor(private http: HttpClient) { }

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.apiUrl).pipe(
      map(reviews => reviews.map(review => ({
        ...review,
        starRatingNumber: this.convertStarRatingToNumber(review.starRating)
      }))),
      catchError(error => {
        console.error('Errore durante il recupero delle recensioni:', error);
        return of([]);
      })
    );
  }

  private convertStarRatingToNumber(starRating: Review['starRating']): number {
    switch (starRating) {
      case 'ONE': return 1;
      case 'TWO': return 2;
      case 'THREE': return 3;
      case 'FOUR': return 4;
      case 'FIVE': return 5;
      default: return 0;
    }
  }
}

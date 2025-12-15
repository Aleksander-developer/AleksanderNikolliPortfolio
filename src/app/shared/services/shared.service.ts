
// // src/app/shared/services/shared.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { environment } from '../../../environments/environment'; // IMPORTANTE: Importa l'ambiente GENERALE

// // Interfaccia per il modello Progetto (allineata con il backend IProgetto)
// export interface Progetto {
//   _id: string; // MongoDB ID
//   titolo: string;
//   descrizione: string; // Reso obbligatorio come nel backend
//   tecnologie: string[]; // Reso obbligatorio come nel backend
//   linkDemo?: string;
//   linkRepo?: string;
//   immagine?: string;
//   dataCreazione: Date; // Corretto a 'dataCreazione' e tipo 'Date' come nel backend
//   caratteristiche: string[]; // NUOVO: Array di stringhe per le funzionalità specifiche
//   visibile: boolean; // NUOVO: Flag per controllare la visibilità
//   keywordsSeo?: string[]; // NUOVO: Array di stringhe per le parole chiave SEO
//   // NUOVI CAMPI per dettagli approfonditi del progetto
//   sfideAffrontate?: string[];
//   soluzioniImplementate?: string[];
//   risultatiChiave?: string[];
//   architettura?: string;
//   fasiDiSviluppo?: string[];
//   targetAudience?: string;
//   aspectsCovered?: string[];
// }

// // Interfaccia per ChiSonoContent
// export interface ChiSonoContent {
//   _id: string;
//   contenuto: string;
//   aggiornata?: string; // Data di aggiornamento
// }

// // Interfaccia per ContattoPayload (dati inviati al backend nel form di contatto)
// export interface ContattoPayload {
//   nome: string;
//   email: string;
//   messaggio: string;
//   cellulare?: string; // Cellulare è opzionale nel backend
// }

// // Interfaccia per ContattoResponse (risposta dal backend)
// export interface ContattoResponse extends ContattoPayload {
//   _id: string;
//   data?: string;
// }

// // Interfaccia per Servizio
// export interface Servizio {
//   _id: string;
//   titolo: string;
//   descrizione?: string;
//   icona?: string;
// }

// // --- CLASSE DEL SERVICE ---
// @Injectable({
//   providedIn: 'root'
// })
// export class SharedService {
//   private apiUrl = environment.apiUrl; // Utilizza l'URL API dall'ambiente corrente

//   constructor(private http: HttpClient) { }

//   // --- Metodi per Progetti ---
//   getProgetti(): Observable<Progetto[]> {
//     return this.http.get<Progetto[]>(`${this.apiUrl}/progetti`);
//   }

//   getProgettoById(id: string): Observable<Progetto> {
//     return this.http.get<Progetto>(`${this.apiUrl}/progetti/${id}`);
//   }

//   // Metodo per aggiungere un nuovo progetto (utilizzato dal Portfolio Manager, se lo implementerai)
//   addProgetto(progetto: Progetto): Observable<Progetto> {
//     return this.http.post<Progetto>(`${this.apiUrl}/progetti`, progetto);
//   }

//   // --- Metodi per Chi Sono ---
//   getChiSonoContent(): Observable<ChiSonoContent> {
//     return this.http.get<ChiSonoContent>(`${this.apiUrl}/chi-sono`);
//   }

//   // --- Metodi per Contatti ---
//   inviaMessaggio(payload: ContattoPayload): Observable<{ message: string }> {
//     return this.http.post<{ message: string }>(`${this.apiUrl}/contatti`, payload);
//   }

//   // --- Metodi per Servizi ---
//   getServizi(): Observable<Servizio[]> {
//     return this.http.get<Servizio[]>(`${this.apiUrl}/servizi`);
//   }

//   // Sezione per Newsletter (commentata nel backend, ma pronta qui se la attivi)
//   // subscribeToNewsletter(email: string): Observable<any> {
//   //   return this.http.post(`${this.apiUrl}/newsletter/subscribe`, { email });
//   // }
// }


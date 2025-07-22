// src/app/pages/contatti/contatti.component.ts
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../../environments/environment'; // CORRETTO: Percorso dell'ambiente

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.scss']
})
export class ContattiComponent implements OnInit {
  contactForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) {
    this.contactForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      cellulare: ['', [Validators.pattern(/^(\+?\d{1,3}[- ]?)?\d{6,14}$/)]],
      messaggio: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.contactForm.valid) {
      this.isLoading = true; // Imposta isLoading a true all'inizio della richiesta
      const formData = this.contactForm.value;

      console.log('Invio dati:', formData);

      this.http.post(`${environment.apiUrl}/contatti`, formData).subscribe({
        next: () => {
          this.successMessage = 'Messaggio inviato con successo!';

          // --- LOGICA DI RESET DEFINITIVA E FORZATA ---
          // Resetta il form a valori vuoti
          this.contactForm.reset({
            nome: '',
            email: '',
            cellulare: '',
            messaggio: ''
          });

          // Forza il reset dello stato di validazione e aggiornamento della UI
          // Usiamo un piccolo setTimeout per dare tempo ad Angular di processare il reset iniziale
          // e poi forzare un nuovo ciclo di change detection.
          setTimeout(() => {
            Object.keys(this.contactForm.controls).forEach(key => {
              const control = this.contactForm.get(key);
              control?.markAsPristine(); // Imposta il controllo come "pulito"
              control?.markAsUntouched(); // Imposta il controllo come "non toccato"
              control?.updateValueAndValidity({ emitEvent: false }); // Forza la ri-validazione senza emettere eventi
            });
            // Marca l'intero form come pristine e untouched
            this.contactForm.markAsPristine();
            this.contactForm.markAsUntouched();
            this.contactForm.updateValueAndValidity({ emitEvent: false });
          }, 0); // Un timeout di 0ms mette la funzione in coda d'evento, dopo il ciclo corrente.

          setTimeout(() => this.successMessage = '', 5000);
        },
        error: (error) => {
          console.error('Errore invio messaggio:', error);
          this.errorMessage = 'Errore durante l\'invio del messaggio. Riprova.'; // Messaggio per la UI
          this.snackBar.open('Errore durante l\'invio. Riprova.', 'Chiudi', { duration: 5000 });
        },
        complete: () => {
          this.isLoading = false; // Imposta isLoading a false alla fine della richiesta (successo o errore)
        }
      });
    } else {
      // Se il form non è valido al submit, marca tutti i campi come touched per mostrare gli errori
      this.contactForm.markAllAsTouched();
    }
  }
}

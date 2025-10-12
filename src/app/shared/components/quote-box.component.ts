import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-quote-box',
  templateUrl: './quote-box.component.html',
  styleUrls: ['./quote-box.component.scss']
})
export class QuoteBoxComponent implements OnInit {
  quote: string = '';

  // Citazioni in italiano
  private readonly quotesIt: string[] = [
    `Non ho preventivi preformattati: <strong>il tuo preventivo lo costruiremo insieme</strong>. Sarà sicuramente migliore – sotto diversi punti di vista – rispetto ad altri. <br><em>Ah, tutto ovviamente senza alcun impegno!</em>`,
    `Ogni progetto è unico, proprio come il tuo codice. <br><strong>Niente preventivi copia-incolla</strong>: ci ragioniamo insieme e lo ottimizziamo come un buon algoritmo. <br><em>Spoiler: zero pressioni, zero impegno</em>, solo confronto sincero.`,
    `Non vendo pacchetti preconfezionati. <br>Prima <strong>capisco le tue esigenze</strong>, poi creiamo una soluzione su misura. <br><em>Spoiler: zero pressioni, zero impegno</em>, solo confronto sincero.`,
    `<br><br>Affidati a me per creare la tua App, Software o Sito Web su misura.`
  ];

  // Citazioni in inglese
  private readonly quotesEn: string[] = [
    `I don't have pre-formatted quotes: <strong>we'll build your quote together</strong>. It will certainly be better – from several points of view – than others. <br><em>Oh, all without any obligation, of course!</em>`,
    `Every project is unique, just like your code. <br><strong>No copy-paste quotes</strong>: we'll discuss it together and optimize it like a good algorithm. <br><em>Spoiler: zero pressure, zero commitment</em>, just honest discussion.`,
    `I don't sell pre-packaged solutions. <br>First, I <strong>understand your needs</strong>, then we create a tailor-made solution. <br><em>Spoiler: zero pressure, zero commitment</em>, just sincere discussion.`,
    `<br><br>Let’s build your custom App, Software, or Website together.`
  ];

  constructor(private languageService: LanguageService) { } // Inietta LanguageService

  ngOnInit() {
    this.loadRandomQuote();
  }

  // Carica una citazione casuale in base alla lingua corrente
  private loadRandomQuote(): void {
    const currentLang = this.languageService.getCurrentLanguage();
    let selectedQuotes: string[];

    if (currentLang === 'en') {
      selectedQuotes = this.quotesEn;
    } else {
      selectedQuotes = this.quotesIt; // Default a italiano
    }

    const index = Math.floor(Math.random() * selectedQuotes.length);
    this.quote = selectedQuotes[index];
  }
}

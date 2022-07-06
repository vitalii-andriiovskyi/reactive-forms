import { Component, OnInit } from '@angular/core';
import { Observable, pluck } from 'rxjs';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'tr-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent {
  search = this.translationService.search;
  word = this.translationService.word;
  wordNotFoundError$ = this.translationService.wordNotFoundError$.pipe(pluck('wordFieldMsg'));

  words: string[] = this.translationService.words;
  filteredWords$: Observable<string[]> = this.translationService.filteredWords$;

  constructor(private translationService: TranslationService) {}
}

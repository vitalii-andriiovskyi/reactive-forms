import { Component, OnInit } from '@angular/core';
import { pluck } from 'rxjs';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'tr-grammar-writing',
  templateUrl: './grammar-writing.component.html',
  styleUrls: ['./grammar-writing.component.scss'],
})
export class GrammarWritingComponent {
  grammar = this.translationService.grammar;
  wordNotFoundError$ = this.translationService.wordNotFoundError$.pipe(pluck('wordTranslatedFieldMsg'));

  constructor(private translationService: TranslationService) {}
}

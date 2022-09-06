import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';


@Injectable()
export class TranslationService {
  form = this.fb.group({
    search: this.fb.group({
      word: ['']
    }),
    grammar: this.fb.group({
      wordTranslated: ['']
    })
  })

  search = this.form.get('search') as FormGroup;
  grammar = this.form.get('grammar') as FormGroup;
  word = this.search.get('word') as FormControl;

  words: string[] = [
    'worker', 'delivery', 'refrigerator', 'replacement', 'affair', 'obligation', 'contribution', 'football', 'argument',
    'inflation', 'camera', 'wife', 'control', 'health', 'church', 'revolution', 'student', 'drawing', 'resource', 'independence'
  ];

  filteredWords$: Observable<string[]> = this.word.valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value || '')),
  );

  wordNotFoundError$ = this.filteredWords$.pipe(
    map((words) => (words.length === 0 && {
      wordFieldMsg: 'This word is absent in the list. Try to type another one',
      wordTranslatedFieldMsg: 'Typed word is absent in the list. No sense to type the word',
    }))
  )

  constructor(private fb: FormBuilder) {}

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.words.filter(word => word.toLowerCase().includes(filterValue));
  }
}

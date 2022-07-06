import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { TranslationComponent } from './translation/translation.component';
import { WordComponent } from './word/word.component';
import { GrammarWritingComponent } from './grammar-writing/grammar-writing.component';
const routes: Routes = [
  {
    path: '',
    component: TranslationComponent
  },
];

@NgModule({
  declarations: [TranslationComponent, WordComponent, GrammarWritingComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatInputModule, ReactiveFormsModule, MatButtonModule, MatAutocompleteModule],
})
export class TranslationModule { }

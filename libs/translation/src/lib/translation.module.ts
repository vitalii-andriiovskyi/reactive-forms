import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TranslationComponent } from './translation/translation.component';
import { WordComponent } from './word/word.component';
import { GrammarWritingComponent } from './grammar-writing/grammar-writing.component';
import { TranslationService } from './services/translation.service';

const routes: Routes = [
  {
    path: '',
    component: TranslationComponent
  },
];

@NgModule({
  declarations: [TranslationComponent, WordComponent, GrammarWritingComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [ TranslationService]
})
export class TranslationModule {}

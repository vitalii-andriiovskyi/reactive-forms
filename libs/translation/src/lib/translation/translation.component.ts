import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'tr-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ TranslationService ]

})
export class TranslationComponent implements OnInit {
  form!: FormGroup;
  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.form = this.translationService.form;
  }

  onSubmit = () => {
    console.log(this.form.value);
  }
}

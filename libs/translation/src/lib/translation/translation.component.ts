import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'tr-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TranslationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

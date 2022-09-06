import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarWritingComponent } from './grammar-writing.component';

describe('GrammarWritingComponent', () => {
  let component: GrammarWritingComponent;
  let fixture: ComponentFixture<GrammarWritingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GrammarWritingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GrammarWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

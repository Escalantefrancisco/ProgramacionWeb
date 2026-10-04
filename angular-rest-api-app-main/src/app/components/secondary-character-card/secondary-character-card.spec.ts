import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryCharacterCard } from './secondary-character-card';

describe('SecondaryCharacterCard', () => {
  let component: SecondaryCharacterCard;
  let fixture: ComponentFixture<SecondaryCharacterCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondaryCharacterCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryCharacterCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

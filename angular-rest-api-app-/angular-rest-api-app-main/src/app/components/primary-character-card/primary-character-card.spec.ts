import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryCharacterCard } from './primary-character-card';

describe('PrimaryCharacterCard', () => {
  let component: PrimaryCharacterCard;
  let fixture: ComponentFixture<PrimaryCharacterCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryCharacterCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryCharacterCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatStyles } from './combat-styles';

describe('CombatStyles', () => {
  let component: CombatStyles;
  let fixture: ComponentFixture<CombatStyles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombatStyles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombatStyles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

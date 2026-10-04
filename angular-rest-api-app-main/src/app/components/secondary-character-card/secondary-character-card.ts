import { Component, input } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { CombatStyleModel } from '../../interfaces/combat-style-mode';

@Component({
  selector: 'app-secondary-character-card',
  imports: [MatCard, MatCardContent],
  templateUrl: './secondary-character-card.html',
  styleUrl: './secondary-character-card.css',
})
export class SecondaryCharacterCard {

  data = input.required<CombatStyleModel>();

}
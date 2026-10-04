import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgClass } from '@angular/common';
import { CharacterModel } from '../../interfaces/character-model';

@Component({
  selector: 'app-character-card',
  imports: [MatCardModule, NgClass],
  templateUrl: './character-card.html',
  styleUrl: './character-card.css'
})
export class CharacterCard {

  data = input.required<CharacterModel>();

  type = input<string>();

}
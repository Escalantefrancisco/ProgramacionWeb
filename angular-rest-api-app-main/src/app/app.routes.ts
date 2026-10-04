import { Routes } from '@angular/router';

import { DemonSlayerCharactersList } from './pages/demon-slayer-characters-list/demon-slayer-characters-list';

import { DbzCharactersList } from './pages/dbz-characters-list/dbz-characters-list';

import { CombatStyles } from './pages/combat-styles/combat-styles';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'demon-slayer',
    pathMatch: 'full'
  },

  {
    path: 'demon-slayer',
    component: DemonSlayerCharactersList
  },

  {
    path: 'dragon-ball',
    component: DbzCharactersList
  },

  {
    path: 'combat-styles',
    component: CombatStyles
  }

];
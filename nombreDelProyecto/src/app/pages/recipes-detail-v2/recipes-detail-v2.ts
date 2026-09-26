import { Component, computed, inject, input, signal } from '@angular/core';
import { Router } from '@angular/router';
import { RECIPES_LIST_DATA } from '../../data/recipes-list-data';

@Component({
  selector: 'app-recipes-detail-v2',
  imports: [],
  templateUrl: './recipes-detail-v2.html',
  styleUrl: './recipes-detail-v2.css',
})
export class RecipesDetailV2 {
  name = input<string>();
  difficulty = input<string>();

  private router = inject(Router);

  recipesList = signal(RECIPES_LIST_DATA);

  recipesListFilter = computed(() => {
    const nameValue = this.name()?.toLowerCase() ?? '';
    const difficultyValue = this.difficulty()?.toLowerCase() ?? '';

    return this.recipesList().recipes.filter(
      recipe =>
        recipe.name.toLowerCase().includes(nameValue) &&
        recipe.difficulty.toLowerCase().includes(difficultyValue)
    );
  });

  viewDetails(id: number) {
    this.router.navigate(['/recipes-detail', id]);
  }
}

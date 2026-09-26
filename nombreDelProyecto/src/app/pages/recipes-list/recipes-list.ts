import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  imports: [FormsModule],
  templateUrl: './recipes-list.html',
  styleUrl: './recipes-list.css',
})
export class RecipesList {
  allRecipes: any[] = [];

  recipesList = signal<any[]>([]);

  searchName = '';
  selectedDifficulty = 'All';

  constructor(private router: Router) {}

  async ngOnInit() {
    const response = await fetch(
      'https://dummyjson.com/recipes?limit=0'
    );

    const data = await response.json();

    this.allRecipes = data.recipes;
    this.recipesList.set(this.allRecipes);
  }

  filterRecipes() {
    const name = this.searchName.trim().toLowerCase();

    const filteredRecipes = this.allRecipes.filter((recipe) => {
      const matchesName = recipe.name
        .toLowerCase()
        .includes(name);

      const matchesDifficulty =
        this.selectedDifficulty === 'All' ||
        recipe.difficulty === this.selectedDifficulty;

      return matchesName && matchesDifficulty;
    });

    this.recipesList.set(filteredRecipes);
  }

  viewRecipe(id: number) {
    this.router.navigate(['/recipes-detail', id]);
  }
}
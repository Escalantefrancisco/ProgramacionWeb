import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  imports: [RouterLink],
  templateUrl: './recipes-list.html',
  styleUrl: './recipes-list.css',
})
export class RecipesList {

  recipesList = signal<any>({
    recipes: [],
    total: 0,
    skip: 0,
    limit: 30
  });

  constructor(private router: Router) {}

  async ngOnInit() {
    const response = await fetch('https://dummyjson.com/recipes?limit=30');
    const data = await response.json();
    this.recipesList.set(data);
  }

  viewRecipe(id: number) {
    this.router.navigate(['/recipes-detail', id]);
  }

}

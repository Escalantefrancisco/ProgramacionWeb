import {Component, signal} from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'app-recipes-detail',
    imports: [],
    templateUrl: './recipes-detail.html',
    styleUrl: './recipes-detail.css',
})
export class RecipesDetail {

  recipesList: any[] = [];

  selectedRecipe = signal<any[]>([]);

  constructor(private route: ActivatedRoute) {}

  async ngOnInit() {

    const response = await fetch(
      'https://dummyjson.com/recipes?limit=30'
    );

    const data = await response.json();

    this.recipesList = data.recipes;

    const id = this.route.snapshot.paramMap.get('id');

    const filteredRecipes = this.recipesList.filter(
      (elemento: any) => String(elemento.id) === id
    );

    this.selectedRecipe.set(filteredRecipes);

  }

}

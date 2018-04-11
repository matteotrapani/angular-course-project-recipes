import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
  private recipes: Array<Recipe> = [
    new Recipe(
            0,
            'TestRecipe', 
            'A test!', 
            'https://images-gmi-pmc.edge-generalmills.com/afc89750-c4f2-48ef-9ea1-16db3aea9b25.jpg', 
            [new Ingredient('apple', 5), new Ingredient('floor', 100)]),
    new Recipe(
        1,
        'Another TestRecipe', 
        'A second test!', 
        'https://images-gmi-pmc.edge-generalmills.com/afc89750-c4f2-48ef-9ea1-16db3aea9b25.jpg',
        [new Ingredient('meat', 1), new Ingredient('fries', 100)])
  ];

  getRecipes() {
      return this.recipes.slice();
  }

  getRecipe(id: number) {
      return this.recipes.find((r: Recipe) => r.id === id);
  }

}
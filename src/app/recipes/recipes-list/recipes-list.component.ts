import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeItemSelected = new EventEmitter<Recipe>();

  recipes: Array<Recipe> = [
    new Recipe('TestRecipe', 'A test!', 'https://images-gmi-pmc.edge-generalmills.com/afc89750-c4f2-48ef-9ea1-16db3aea9b25.jpg'),
    new Recipe('Another TestRecipe', 'A second test!', 'https://images-gmi-pmc.edge-generalmills.com/afc89750-c4f2-48ef-9ea1-16db3aea9b25.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeItemSelected.emit(recipe);
  }

}

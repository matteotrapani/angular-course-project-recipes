import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
    private ingredients: Array<Ingredient> = [];
    ingredientsChanged = new EventEmitter<Array<Ingredient>>();

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice())
    }

    addIngredients(ingredients: Array<Ingredient>) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice())
    }
}
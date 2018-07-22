import { Ingredient } from "../model/ingredient.model";
import { EventEmitter } from "@angular/core";


export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    
    private ingredients: Ingredient[] = [
        new Ingredient('Mutter', 150),
        new Ingredient('Paneer', 100)
      ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit( this.ingredients.slice())
    }

    
}
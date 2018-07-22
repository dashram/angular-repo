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

    addIngredients(ingredients: Ingredient[]){
        /*for(let ingredient of ingredients){
            this.addIngredient(ingredient);
        }*/
        //Spread operator that ... convers aray into list of single objects
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit( this.ingredients.slice())
    }

    
}
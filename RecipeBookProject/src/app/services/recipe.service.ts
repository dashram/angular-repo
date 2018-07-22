import { Recipe } from "../model/recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("Mutter Curry", "Veg Mutter Curry", "https://cdn.pixabay.com/photo/2017/05/16/16/44/wood-board-2318325_960_720.jpg"),
        new Recipe("Chicken Fry", "Non-Veg Checken Fry", "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859__340.jpg")
      ];

    getRecipes(){
        //slice used to return a copy of array instead of actual reference
        return this.recipes.slice();
    }
}
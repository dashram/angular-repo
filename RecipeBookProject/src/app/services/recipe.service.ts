import { Recipe } from "../model/recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../model/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            "Mutter Curry", 
            "Veg Mutter Curry", 
            "https://cdn.pixabay.com/photo/2017/05/16/16/44/wood-board-2318325_960_720.jpg",
            [
                new Ingredient('Mutter', 200),
                new Ingredient('Potato', 100)
            ]
        ),
        new Recipe(
            "Chicken Fry", 
            "Non-Veg Checken Fry", 
            "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859__340.jpg",
            [
                new Ingredient('Chicken', 500),
                new Ingredient('Curd', 50)
            ]
        )
      ];

    constructor(private shoppingListService: ShoppingListService){}

    getRecipes(){
        //slice used to return a copy of array instead of actual reference
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}
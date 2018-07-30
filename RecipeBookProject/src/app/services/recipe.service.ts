import { Recipe } from "../model/recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../model/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            "Pizza Exorita", 
            "Veg. Pizza", 
            "https://cdn.pixabay.com/photo/2014/07/08/12/34/pizza-386717_960_720.jpg",
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

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}
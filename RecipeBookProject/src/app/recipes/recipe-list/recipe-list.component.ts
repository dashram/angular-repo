import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe("Mutter Curry", "Veg Mutter Curry", "https://cdn.pixabay.com/photo/2017/05/16/16/44/wood-board-2318325_960_720.jpg"),
    new Recipe("Chicken Fry", "Non-Veg Checken Fry", "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859__340.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}

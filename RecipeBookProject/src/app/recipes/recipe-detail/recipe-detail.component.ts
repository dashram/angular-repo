import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../../model/recipe.model';
import { RecipeService } from '../../services/recipe.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeDetail: Recipe;
  recipeId: number;

  constructor(private recipeService: RecipeService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    //it will only load for the first time 
    //const recipeId = this.route.snapshot.params['id'];

    //Subscribe to routerLink data and parse from string to number using +
    this.route.params.subscribe(
      (params: Params) => {
        this.recipeId = +params['id'];
        this.recipeDetail = this.recipeService.getRecipe( this.recipeId);
      }
    );
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipeDetail.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route})
    //same as above but for note that we can still use relative paths
    //this.router.navigate(['../', this.recipeId, 'edit' ],{relativeTo: this.route})
  }

}

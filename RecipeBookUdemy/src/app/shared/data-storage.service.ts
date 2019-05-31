import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { RecipeService } from '../recipes/recipe.service';
import { Observable } from 'rxjs';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(
    private http: Http,
    private recipeService: RecipeService
  ) { }

  storeRecipes(): Observable<{}> {
    //window.console.log(JSON.stringify(this.recipeService.getRecipes()));
    return this.http.put('https://littlerecipebook-b3632.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes(){
    this.http.get('https://littlerecipebook-b3632.firebaseio.com/recipes.json')
    .subscribe(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        this.recipeService.setRecipes(recipes);
      }
    );
  }

  
}

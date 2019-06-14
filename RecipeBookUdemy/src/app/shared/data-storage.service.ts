import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) { }

  storeRecipes() {
    //window.console.log(JSON.stringify(this.recipeService.getRecipes()));
    const recipes = this.recipeService.getRecipes()
    this.http
      .put(
        'https://littlerecipebook-b3632.firebaseio.com/recipes.json', 
        recipes
      ).subscribe(
        response => {
          console.log(response);
        }
      );
  }

  fetchRecipes(){
    return this.authService.user
      .pipe(
        take(1), 
        exhaustMap( user => {
          return this.http
            .get<Recipe[]>(
              'https://littlerecipebook-b3632.firebaseio.com/recipes.json',
              {
                params: new HttpParams().set('auth', user.token)
              }
            );
        }),
        //here it is rxjs map method
        map( recipes => {
            //here it is normal javascript map for json object
            return recipes.map( recipe => {
              return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
            });
        }),
        tap( recipes => {
          this.recipeService.setRecipes(recipes); 
        })
      );
  }

  
}

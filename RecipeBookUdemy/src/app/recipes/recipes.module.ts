import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { RecipesComponent } from "./recipes.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    //Add all components of Recipes (remove from AppModule)
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,        
        RecipeStartComponent,
        RecipeEditComponent,
    ],
    imports: [
        //import modules again even these are present in app-module. 
        // use CommonModule in place of BrowserModule
        RouterModule,  
        ReactiveFormsModule, 
        RecipesRoutingModule,
        SharedModule
    ],
    exports: [        
    ]
})
export class RecipesModule {

}
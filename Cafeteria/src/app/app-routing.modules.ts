import { RecipesComponent } from "./recipes/recipes.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesEditComponent } from "./recipes/recipes-edit/recipes-edit.component";
import { RecipesDetailComponent } from "./recipes/recipes-detail/recipes-detail.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";


@NgModule({
   
    exports:[RouterModule]
})
export class AppRoutingModule{

}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ingridientsService } from './services/ingredients.service';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import { RecipesDatailComponent } from './recipes/recipes-datail/recipes-datail.component';
import { AppRoutingModule } from './app-routing.modules';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeService } from './services/recipe.service';
import { Routes, RouterModule } from '@angular/router';
import { GaleriaComponent } from './galeria/galeria.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesDetailComponent,
    RecipesListComponent,
    RecipesItemComponent,
    ContactoComponent,
    RecipeStartComponent,
    RecipesEditComponent,
    RecipesDatailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    GaleriaComponent,
    MenuComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 

    
  ],
  providers: [ingridientsService,
    RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

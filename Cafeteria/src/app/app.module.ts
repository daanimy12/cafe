import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MenuEditComponent } from './menu/menu-edit/menu-edit.component';
import { ingridientsService } from './services/ingredients.service';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { RecipesCarruselComponent } from './recipes/recipes-carrusel/recipes-carrusel.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MenuFooterComponent } from './menu/menu-footer/menu-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    MenuEditComponent,
    RecipesComponent,
    RecipesDetailComponent,
    RecipesListComponent,
    RecipesItemComponent,
    RecipesCarruselComponent,
    ContactoComponent,
    MenuFooterComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [ingridientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

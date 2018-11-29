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
import { ContactoComponent } from './contacto/contacto.component';
import { MenuFooterComponent } from './menu/menu-footer/menu-footer.component';
<<<<<<< HEAD
import { CarruselComponent } from './carrusel/carrusel.component';
=======
import { AppRoutingModule } from './app-routing-module';
import { PRUEBAComponent } from './prueba/prueba.component';
import { MenugeneralComponent } from './menugeneral/menugeneral.component';
>>>>>>> c5c60898979ab6462fc2d607231a84eb46aadd0c


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
    ContactoComponent,
    MenuFooterComponent,
<<<<<<< HEAD
    CarruselComponent,
=======
    PRUEBAComponent,
    MenugeneralComponent,
>>>>>>> c5c60898979ab6462fc2d607231a84eb46aadd0c

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [ingridientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

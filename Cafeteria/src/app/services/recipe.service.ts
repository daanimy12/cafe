import { Datos } from "../about/datos.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingrediente.model";
import { ingridientsService } from "./ingredients.service";
import { Subject } from "rxjs";



@Injectable()
export class
  RecipeService {
  //recipeSelected = new EventEmitter<Recipe>();

  RecipeEmit = new Subject<Datos[]>();
  RecipeEditing = new Subject<number>();
  private datos: Datos[] = [
    new Datos('JOEL VARGAS OSORIO',
      'Calle Benito Juarez 44','https://cocina-casera.com/mx/wp-content/uploads/2017/09/taco-de-carne.jpg','Tehuacan',
      '75809',"2381632777",'joel.kins@hotmail.com','JOVEN TRABAJADOR CAPAZ DE TODO'),
    


  ];
  getDato() {
    return this.datos.slice();
  }
  constructor(private ingredientsService: ingridientsService) {

  }
  getRecipe(index: number) {
    return this.datos[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.ingredientsService.addIngredients(ingredients);
  }
  DeleteRecipe(){
    
  }
  addRecipe(datos:Datos ) {
    this.datos.push(datos);
    this.RecipeEmit.next(this.datos.slice());
  }
  updateRecipe(index: number, datos: Datos) {
    this.datos[index] = datos;
    this.RecipeEmit.next(this.datos.slice());
  }

}
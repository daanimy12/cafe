import { Datos } from "../about/datos.model";
import { EventEmitter, Injectable } from "@angular/core";

import { Subject } from "rxjs";



@Injectable()
export class
  RecipeService {
  //recipeSelected = new EventEmitter<Recipe>();

  RecipeEmit = new Subject<Datos[]>();
  RecipeEditing = new Subject<number>();
  private datos: Datos[] = [
    new Datos('joelkins','1998joel','JOEL VARGAS OSORIO',"2381632777",'joel.kins@hotmail.com','Tehuacan','UTTEHUACAN','TIC',
      'Calle Benito Juarez 44','Dar a conocer los servicios de la mas alta calidad.','75809','M','https://cocina-casera.com/mx/wp-content/uploads/2017/09/taco-de-carne.jpg'
      ),
      new Datos('joelkins','1998joel','JOEL VARGAS OSORIO 2',"2381632777",'joel.kins40@gmail.com','Tehuacan','UTTEHUACAN','TIC',
      'Calle Benito Juarez 44','Dar a conocer los servicios de la mas alta calidad.','75809','M','https://cocina-casera.com/mx/wp-content/uploads/2017/09/taco-de-carne.jpg'
      ),
    


  ];
  getDato() {
    return this.datos.slice();
  }
  constructor() {

  }
  getRecipe(index: number) {
    return this.datos[index];
  }

  getcuenta(cadena:string){
   return this.datos.find(x => x.mail == cadena);

    }
    getindex(cade:string){
    return this.datos.findIndex(x => x.mail == cade);
    }
  

  DeleteRecipe(){
    this.datos.splice(0,1);
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
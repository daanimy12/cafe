import { EventEmitter } from "@angular/core";
import {  Validar } from "../shared/ingrediente.model";
import { Subject } from "rxjs";

export class Auth {
    //Cambiarlo a un Subject
   // ingredientEmit = new EventEmitter<Ingredient[]>();
   ingredientEmit = new Subject<Validar[]>();
    startedEditing =  new Subject<number>();
    private validars: Validar[]=[
        
    ];

    getIngredient(index : number){
        return this.validars[index];
    }
    getIngredientes(){
        return this.validars.slice();
    }
    updateIngredient(index: number, ingredient: Validar){
        this.validars[index]=ingredient;
        this.ingredientEmit.next(this.validars.slice());
    }
    addIngredient(ingredient : Validar){
        this.validars.push(ingredient);
        this.ingredientEmit.next(this.validars.slice());
    }
    // addIngredients(auxIngredients:Validar[]){
        
    //     for(const i of auxIngredients){
    //         var NombreMA = this.ingredients.find((x, index)=>{
    //            if( x.name == i.name ){
    //                 this.ingredients[index].amount = this.ingredients[index].amount + i.amount;
    //                 return true;
    //            }else{
                   
    //                return false;
    //            }
         
    //         });
            
    //         if(NombreMA != null){
              
    //         }else{
    //             this.ingredients.push(i);
    //         }
    //         this.ingredientEmit.next(this.ingredients.slice());
            
    //     }
    // }
    DeleteIngredient(index: number){
        this.validars.splice(index,1);
        this.ingredientEmit.next(this.validars.slice());
    }
   
}
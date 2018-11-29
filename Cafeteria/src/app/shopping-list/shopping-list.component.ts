import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingrediente.model';
import { Subscription } from 'rxjs';
import { ingridientsService } from '../services/ingredients.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  ingredients: Ingredient[];
  constructor(private IngredientsService: ingridientsService) { }
  private subscription:Subscription;
  ngOnInit() {
    this.ingredients =this.IngredientsService.getIngredientes();
    this.subscription=this.IngredientsService.ingredientEmit.subscribe(
      (recipe:Ingredient[])=>{
        this.ingredients = recipe;
      }
   );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onEditItem(index:number){
     this.IngredientsService.startedEditing.next(index);
  }

}

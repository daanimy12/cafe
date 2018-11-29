import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingrediente.model';
import { Subscription } from 'rxjs';
import { ingridientsService } from 'src/app/services/ingredients.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
 // @ViewChild('nameInput') nameInputRef: ElementRef;
 // @ViewChild('amountInput') amountInputRef: ElementRef;
 private subscription:Subscription;
 editMode=false;
 editedItem : Ingredient;
 @ViewChild('f') slForm: NgForm;
  constructor(private ingredientsService: ingridientsService) { }
indexEditedItem: number;
DeleteItem(){
  this.ingredientsService.DeleteIngredient(this.indexEditedItem);
  this.clear();
}
clear(){
  this.slForm.reset();
  this.editMode=false;
}
onAddItem(form : NgForm){
  //const name = this.nameInputRef.nativeElement.value;
  //const amount = this.amountInputRef.nativeElement.value;
  const value = form.value;
  if(this.editMode){
    this.ingredientsService.updateIngredient(this.indexEditedItem,new Ingredient(value.name,value.amount));
  }else{
    
    this.ingredientsService.addIngredient(new Ingredient(value.name,value.amount));
  }
  this.clear();
}
  ngOnInit() {
      this.subscription= this.ingredientsService.startedEditing.subscribe((index: number)=>{
          this.editMode =true;
          this.indexEditedItem =index;
          this.editedItem = this.ingredientsService.getIngredient(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
      });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
 
}

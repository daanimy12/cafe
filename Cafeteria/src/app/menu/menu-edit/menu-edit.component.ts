import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingrediente.model';
import { ingridientsService } from 'src/app/services/ingredients.service';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.css']
})
export class MenuEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  constructor(private ingredientsService: ingridientsService) { }

  ngOnInit() {
  }
  onAddItem(){
    const  name= this.nameInputRef.nativeElement.value;
    const  amount= this.amountInputRef.nativeElement.value;
    const newIngredient= new Ingredient(name,amount);
    this.ingredientsService.addIngredient(newIngredient);
  }
}

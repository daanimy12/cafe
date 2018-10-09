import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingrediente.model';
import { ingridientsService } from '../services/ingredients.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private ingredientsService: ingridientsService) { }
  ngOnInit() {
    this.ingredients = this.ingredientsService.getIngredients();
    this.ingredientsService.ingredientsChanged.subscribe(
      ((ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      })
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
//import { Recipe } from './Recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  //recipeSelected: Recipe;

  constructor() {
   }

  ngOnInit() {

  }

}

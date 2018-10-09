import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../../Recipes.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  constructor(private recipeService:RecipeService) { }
  @Input() recipe: Recipe;
  ngOnInit() {
  }
  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);

  }
}

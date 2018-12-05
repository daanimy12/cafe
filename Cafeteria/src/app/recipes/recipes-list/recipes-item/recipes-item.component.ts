import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Datos } from 'src/app/about/datos.model';
//import { Recipe } from '../../Recipes.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe: Datos;
  @Input() index: number;
  currentRate = 8;
  public isCollapsed = false;
  ngOnInit() {
  }
 
}
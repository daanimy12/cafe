import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import { Recipe } from '../Recipes.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Datos } from 'src/app/about/datos.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes:Datos[];
  private sure: Subscription;
  constructor(private recipeService:RecipeService, private router:Router, private route: ActivatedRoute) {

   }
 
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route});
   }
  ngOnInit() {
   // this.recipes = this.recipeService.getRecipes();
    this.sure=this.recipeService.RecipeEmit.subscribe((event)=>{
     // this.recipes= this.recipeService.getRecipes();
    })
  }
  ngOnDestroy(){
    this.sure.unsubscribe();
  }

}

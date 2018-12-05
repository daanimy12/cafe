import { Component, OnInit, Input } from '@angular/core';
//import { Recipe } from '../Recipes.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  // @Input() recipe:Recipe;
  //recipe:Recipe;
    id: number;
    constructor(private recipeService: RecipeService,private router:Router, private route: ActivatedRoute) { }
   
    ngOnInit() {
        this.route.params.subscribe((param: Params)=>{
          this.id=param["id"];
    //      this.recipe = this.recipeService.getRecipe(this.id);
        });
    }
    onEditRecipe(){
      this.router.navigate(['edit'],{relativeTo:this.route});
  
    }
  
    onAddToShoppingList(){
   //   this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }
    onDeleteRecipe(){
    
    }
  }
  
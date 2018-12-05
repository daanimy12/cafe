import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';


@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService,private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.id=+params['id'];
      this.editMode=params['id']!=null;
      console.log(this.editMode);
      this.initForm();
    })

  }
  private initForm(){
    let recipeName='';
    let recipeImagePath='';
    let recipeDescription='';
    const ingredients=new FormArray([]);
//ingredients
// if(this.editMode){
// const recipe=this.recipeService.getRecipe(this.id);
// recipeName=recipe.name;
// recipeImagePath=recipe.imagePath;
// recipeDescription=recipe.descripcion;
// if(recipe['ingredients']){
//   for(const ingredient of recipe.name){
//   //  ingredients.push(
//      // new FormGroup({
// //'name' : new FormControl(ingredient.name,Validators.required),
// //'amount' : new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)
// //])

//       })
//     );
//   }
// }
//console.log(recipe)

}
// this.recipeForm=new FormGroup({
//   'name':new FormControl(recipeName,Validators.required),
//   'imagePath':new FormControl(recipeImagePath,Validators.required),
//   'description':new FormControl(recipeDescription,Validators.required),
//   'ingredients':ingredients
// });
//   }
  
//   onAddIngredient() {
//     (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
//       'name': new FormControl(null, Validators.required),
//       'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
//     })
//     )
//   }
//   onSubmit() {
//     //  const newRecipe= new RecipesEditComponent(this.recipeForm)
//     const newRecipe = new Recipe(this.recipeForm.value.name,  this.recipeForm.value.description,this.recipeForm.value.imagePath, this.recipeForm.value.ingredient);
    
//     if (this.editMode) {
//       this.recipeService.updateRecipe(this.id, newRecipe);
//       this.onCancel();
//     } else {
//       this.recipeService.addRecipe(newRecipe);
//       this.onCancel();
//     }

//   }
//   onDeleteIngredient( index: number){
// (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
//   }
//   onCancel(){
    
//     this.router.navigate['/clean'],{relativeTo: this.route};
   
//   }
}
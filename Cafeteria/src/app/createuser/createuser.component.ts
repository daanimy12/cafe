import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipes } from '../recipes/recipes.model';
import { Datos } from '../about/datos.model';
import { ingridientsService } from '../services/ingredients.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
  id:number;
  editMode=true;
  valor=Datos;
  recipeForm:FormGroup;
  constructor(private router:Router,private route:ActivatedRoute,private recipeService:RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
  this.id=0;
  //+params['id'];
  //this.editMode=params['id']!=null;
  console.log(this.editMode);
  this.initForm();
    });
    }
    private initForm(){
      let cvusername='';
      let cvpass='';
      let cvname='';
      let cvcellphone='';
      let cvmail='';
      let cvcity='';
      let cvuniversity='';
      let cvcareer='';
      let cvdireccion='';
      let cvdescription='';
      let cvcp='';
      let cvsexo='';
      let cvImagePath='';
      
     
      let recipeDescription='';


      const ingredients=new FormArray([]);
  //ingredients

  if(this.editMode){
  const recipe=this.recipeService.getRecipe(0);
  cvusername=recipe.username;
   cvpass=recipe.pass;
   cvname=recipe.name;
   cvcellphone=recipe.cellphone;
   cvmail=recipe.mail;
   cvcity=recipe.city;
   cvuniversity=recipe.university;
   cvcareer=recipe.career;
   cvdireccion=recipe.direccion
   ;
   cvdescription=recipe.descripcion;
   cvcp=recipe.cp;
   cvsexo=recipe.sexo;
   cvImagePath=recipe.imagePath;
   


 

  console.log(recipe)
  
  }
  this.recipeForm=new FormGroup({

 
    
    'username':new FormControl(cvusername,Validators.required),
    'pass':new FormControl(cvpass,Validators.required),
    'name':new FormControl(cvname,Validators.required),
'cellphone':new FormControl(cvcellphone,Validators.required),
'mail':new FormControl(cvmail,Validators.required),
'city':new FormControl(cvcity,Validators.required),
'university':new FormControl(cvuniversity,Validators.required),
'career':new FormControl(cvcareer,Validators.required),
'direccion':new FormControl(cvdireccion,Validators.required),
'description':new FormControl(cvdescription,Validators.required),
'cp':new FormControl(cvcp,Validators.required),
'sexo':new FormControl(cvsexo,Validators.required),
'image':new FormControl(cvImagePath,Validators.required),

    
  });
    }
    onAddIngredient(){
    (<FormArray> this.recipeForm.get('recipe')).push(
    new FormGroup ({
      'name':new FormControl(null,Validators.required),
    'amount':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
    })
    )
    }
    onSubmit(){
    console.log(this.recipeForm)
    
  
    }
    AddCV(){
     let cvusername=this.recipeForm.get('name').value;
      let cvpass=this.recipeForm.get('pass').value;
      let cvname=this.recipeForm.get('name').value;
      let cvcellphone=this.recipeForm.get('cellphone').value;
      let cvmail=this.recipeForm.get('mail').value;
      let cvcity=this.recipeForm.get('city').value;
      let cvuniversity=this.recipeForm.get('university').value;
      let cvcareer=this.recipeForm.get('career').value;
      let cvdireccion=this.recipeForm.get('direccion').value;
      let cvdescription=this.recipeForm.get('description').value;
      let cvcp=this.recipeForm.get('cp').value;
      let cvsexo=this.recipeForm.get('sexo').value;
      let cvImagePath=this.recipeForm.get('image').value;
      const newIngredient = new this.valor(cvusername,cvpass,cvname,cvcellphone,cvmail,cvcity,cvuniversity,cvcareer,cvdireccion,cvdescription,cvcp,cvsexo,cvImagePath);
  this.recipeService.addRecipe(newIngredient);
  console.log(this.recipeService.getRecipe(1));
  this.router.navigate(['/login'],
    {relativeTo:this.route})
    }
    
  }
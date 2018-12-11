import { Component, OnInit, Input, Output } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute, Router, Params, NavigationEnd } from '@angular/router';
import { Datos } from './datos.model';
import { Auth } from '../services/ingredients.service';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css','./resume.css','./resume.min.css']
})
export class AboutComponent implements OnInit {
  recipe:Datos;
  id: number;
  
  urlTree:string;
  providers: [RecipeService];
  
  constructor(private re:RecipeService,private router:Router, private route: ActivatedRoute,private d:Auth) {
  
 
   }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
    this.id=+this.d.getIngredient(0).name;
  this.recipe=this.re.getRecipe(this.id);    
  });

} }  



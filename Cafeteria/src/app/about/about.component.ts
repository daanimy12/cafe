import { Component, OnInit, Input, Output } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute, Router, Params, NavigationEnd } from '@angular/router';
import { Datos } from './datos.model';



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
  
  constructor(private re:RecipeService,private router:Router, private route: ActivatedRoute) {
  
 
   }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.id=0;
  this.recipe=this.re.getRecipe(0);    
  });

} }  



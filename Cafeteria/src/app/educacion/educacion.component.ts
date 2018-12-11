import { Component, OnInit } from '@angular/core';
import { Datos } from '../about/datos.model';
import { RecipeService } from '../services/recipe.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Auth } from '../services/ingredients.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css','./resume.css','./resume.min.css']
})
export class EducacionComponent implements OnInit {
recipe:Datos;

id: number;

urlTree:string;
  constructor(private re:RecipeService,private router:Router, private route: ActivatedRoute,private d:Auth) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.id=+this.d.getIngredient(0).name;
    this.recipe=this.re.getRecipe(this.id);    
    });
  }

}

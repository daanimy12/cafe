import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Datos } from './datos.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css','./resume.css','./resume.min.css']
})
export class AboutComponent implements OnInit {
  recipe:Datos;
  id: number;
  providers: [RecipeService];
  constructor(private recipeService: RecipeService,private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((param: Params)=>{
    
      this.recipe = this.recipeService.getRecipe(0);
    });
  }

}

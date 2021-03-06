import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { Datos } from '../about/datos.model';
import { Auth } from '../services/ingredients.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','./resume.css','./resume.min.css']
})
export class HeaderComponent implements OnInit {
 id:number;
private recipe: Datos;
 constructor( private router:Router,private route:ActivatedRoute,private reci:RecipeService,private r:Auth) { }
  
  ngOnInit() {     
    this.route.params.subscribe((params:Params)=>{
      this.id=+this.r.getIngredient(0).name;
    this.recipe=this.reci.getRecipe(this.id);    
    });


}
onAbout(navegador:string){
  this.router.navigate([navegador],
    {relativeTo:this.route})
}

}

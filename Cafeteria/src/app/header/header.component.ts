import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { Datos } from '../about/datos.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','./resume.css','./resume.min.css']
})
export class HeaderComponent implements OnInit {
 id:number;
private recipe: Datos;
 constructor( private router:Router,private route:ActivatedRoute,private reci:RecipeService) { }
  
  ngOnInit() {     
    this.route.params
    .subscribe((param:Params)=>{
   this.id=+param['home/:id']|| 0;

 this.recipe = this.reci.getRecipe(0);
  

});
}
onAbout(navegador:string){
  this.router.navigate([navegador],
    {relativeTo:this.route})
}

}

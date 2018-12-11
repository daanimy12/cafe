import { Component, OnInit } from '@angular/core';
import { AuthService } from '../guards/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RecipeService } from '../services/recipe.service';
import { Auth } from '../services/ingredients.service';
import { Validar } from '../shared/ingrediente.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','./login.component.1.css']
})
export class LoginComponent implements OnInit {
ingredients:Validar;
  constructor(private authService: AuthService,private router:Router,private re:RecipeService,private d:Auth) { }

  ngOnInit() {
  }
  onSignup(form: NgForm){
  const email=form.value.email;
const password=form.value.password;
console.log(this.re.getindex(email));
this.authService.login(email,password);

this.ingredients=  new Validar(this.re.getindex(email));
this.d.addIngredient(this.ingredients);
console.log(this.ingredients)
this.router.navigate(['/home',this.re.getindex(email)]);

}
}

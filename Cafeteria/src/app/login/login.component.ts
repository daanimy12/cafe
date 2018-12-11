import { Component, OnInit } from '@angular/core';
import { AuthService } from '../guards/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','./login.component.1.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,private router:Router,private re:RecipeService) { }

  ngOnInit() {
  }
  onSignup(form: NgForm){
  const email=form.value.email;
const password=form.value.password;
console.log(this.re.getindex(email));
this.authService.login(email,password);
this.router.navigate(['/home',this.re.getindex(email)]);

}
}

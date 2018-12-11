import { Injectable } from '@angular/core';
import { RecipeService } from '../services/recipe.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private rece:RecipeService) { }
  private isloggedIn: boolean=false;
 maile:string;
 pass:string;
  
  login(email:string,password:string): boolean{
    
this.maile=this.rece.getcuenta(email).mail;
this.pass=this.rece.getcuenta(email).pass;



      if(email==this.maile && password==this.pass){
      this.isloggedIn=true;
        
      
       }else{
       this.isloggedIn=false   
       alert("Usuario o Contraseña Incorrecta");
      }
      return this.isloggedIn;    
      }
    

      isUserLoggedIn(){
          return this.isloggedIn;
      }
isUserLoggedIne(){

}
  
}

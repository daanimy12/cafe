

export class Datos{
  public username:string;
  public pass:string;

  public name: string;
  public cellphone: string;
  public mail: string;
  public city: string;
  public university: string;
  public career: string;
  public direccion: string;
  public descripcion: string;
  
  public cp: string;

  public sexo: string;
  public imagePath: string;
 


  //public ingredients: Ingredient[];
  constructor(username:string,pass:string,name: string,cellphone:string,mail:string,city: string,university:string,career:string, direccion: string,descripcion: string,cp: string,sexo: string, imagePath: string){
    this.username=username;
    this.pass=pass;  
    this.name = name;
    this.cellphone=cellphone;
    this.mail=mail; 
    this.city=city;
this.university=university;
this.career=career;
    this.direccion=direccion;
    this.descripcion=descripcion;
    this.cp=cp;
    this.sexo=sexo;
    this.imagePath=imagePath;
   
     
     
    }

}


export class Datos{
  
  public name: string;
  public direccion: string;
  public imagePath: string;
  public city: string;
  public cp: string;
  public cellphone: string;
  public mail: string;
  public descripcion: string;


  //public ingredients: Ingredient[];
  constructor(name: string, direccion: string, imagePath: string,city: string,cp: string,cellphone: string,mail: string,descripcion: string){
      this.name = name;
      this.direccion=direccion;
       this.imagePath=imagePath;
      this.city=city;
      this.cp=cp;
      this.cellphone=cellphone;
      this.mail=mail;
      this.descripcion=descripcion;
    }

}
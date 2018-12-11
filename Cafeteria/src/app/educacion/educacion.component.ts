import { Component, OnInit } from '@angular/core';
import { Datos } from '../about/datos.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css','./resume.css','./resume.min.css']
})
export class EducacionComponent implements OnInit {
recipe:Datos;

  constructor() { }

  ngOnInit() {
  
  }

}

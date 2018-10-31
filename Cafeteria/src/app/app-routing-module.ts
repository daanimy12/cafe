import {Routes, RouterModule} from '@angular/router'
import { RecipesComponent } from './recipes/recipes.component';
import {ContactoComponent } from './contacto/contacto.component';

import { NgModule, Component } from '@angular/core';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes =[
{
    path: '', redirectTo:'/cafeteria',pathMatch:'full',

},
{ 
    path: 'cafeteria', component:RecipesComponent,
    

},
{
    path:'cafeteria/contacto',component:ContactoComponent,
    
},
{
    path: 'cafeteria/menu', component:MenuComponent,
}

];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}
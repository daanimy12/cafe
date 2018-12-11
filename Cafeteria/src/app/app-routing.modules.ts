
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ExperienciaComponent } from "./experiencia/experiencia.component";
import { AboutComponent } from "./about/about.component";
import { EducacionComponent } from "./educacion/educacion.component";
import { SkillsComponent } from "./skills/skills.component";
import { InterestsComponent } from "./interests/interests.component";
import { AwardsComponent } from "./awards/awards.component";
import { LoginComponent } from "./login/login.component";
import { HeaderComponent } from "./header/header.component";
import { MenuComponent } from "./menu/menu.component";
import { CreateuserComponent } from "./createuser/createuser.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes=[
    {path:'',redirectTo:'/login',pathMatch:'full'},



    
    {path:'login', component: LoginComponent},
    {path:'newuser', component: CreateuserComponent},
{path:'home/:id',component:MenuComponent,canActivate:[AuthGuard]}
    ,{ 
        path: 'home/:id', component:MenuComponent,children:[
            
            {path:'about',component: AboutComponent} , 
    {path:'experiencia',component: ExperienciaComponent},
    {path:'education',component:EducacionComponent},
    
    {path:'skills',component: SkillsComponent},
    {path:'interests',component: InterestsComponent},
    {path:'education',component:EducacionComponent},
    {path:'awards',component: AwardsComponent},
            
        ]
        
    
    },
 


    
    ];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}
import { Routes } from '@angular/router';
import { SignincomponentComponent } from './signincomponent/signincomponent.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
   
    {
        path:"form",
        component:SignincomponentComponent
    },
    {
        path:"home",
        component:HomeComponent 
    },{
        path:"*",
        component:NavbarComponent
    }
];
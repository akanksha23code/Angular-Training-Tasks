import { Routes } from '@angular/router';
import { SignincomponentComponent } from './signincomponent/signincomponent.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"form",
        component:SignincomponentComponent
    },{
        path:"*",
        component:NavbarComponent
    }
];

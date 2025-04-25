import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponent } from './home/home/home.component';
import { PageNoutFoundComponent } from './errors/page-nout-found/page-nout-found.component';
import { authLoginGuard } from './guard/auth-login.guard';
import { authHomeGuard } from './guard/auth-home.guard';

export const routes: Routes = [
    {path:"",redirectTo:"/login",pathMatch:"full"},
    {path:"login",component:LoginPageComponent, canActivate:[authLoginGuard]},
    {path:"home",component:HomeComponent,canActivate:[authHomeGuard]},
    {path:"**",component:PageNoutFoundComponent}
];

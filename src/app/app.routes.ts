import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponent } from './home/home/home.component';
import { authLoginGuardGuard } from './guards/auth-login-guard.guard';
import { PageNoutFoundComponent } from './errors/page-nout-found/page-nout-found.component';

export const routes: Routes = [
    {path:"",redirectTo:"/login",pathMatch:"full"},
    {path:"login",component:LoginPageComponent},
    {path:"home",component:HomeComponent,canActivate:[authLoginGuardGuard]},
    {path:"**",component:PageNoutFoundComponent}
];

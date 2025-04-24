import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo/logo.component';
import { FormLoginComponent } from '../formulaire/form-login/form-login.component';
import { FormCreateComponent } from '../formulaire/form-create/form-create.component';

@Component({
  selector: 'app-login-page',
  imports: [FormLoginComponent,FormCreateComponent,LogoComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}

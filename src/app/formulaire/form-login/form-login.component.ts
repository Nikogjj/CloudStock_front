import { Component, inject } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  imports: [ReactiveFormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})
export class FormLoginComponent {
  constructor(private router : Router){

  }

  private authService = inject(AuthService);
  loginForm = new FormGroup({
    identifiant : new FormControl(""),
    password : new FormControl(""),
  })
  msg_error_submit = "";
  pageToGo="";

  async onSubmit(){
    const test = await this.authService.login({
      identifiant : this.loginForm.get("identifiant")?.value ?? "",
      password : this.loginForm.get("password")?.value ?? ""
    })
    .then(test=>{
      console.log(test);
      this.router.navigate(["/home"]);
      return true
    })
    .catch(error=>{
      console.log(error.data.msg);
      this.msg_error_submit=error.data.msg;
      return false;
    })
    console.log(test);

  }
}

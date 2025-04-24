import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-form-create',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form-create.component.html',
  styleUrl: './form-create.component.css'
})
export class FormCreateComponent {
  authServices = inject(AuthService)

  createAccountForm = new FormGroup({
    identifiant : new FormControl("",[
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30)
    ]),
    password : new FormControl("",[
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30),
    ]),
    checkPassword : new FormControl("",[
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30)
    ]),
  });

  verifyPassword = 0;
  verifyIfAccountCreated = 0;
  msgAccountCreated="";

  async onSubmit(){
    if (this.createAccountForm.invalid) {
      this.createAccountForm.markAllAsTouched();
      console.log("alltouched")
      return;
    }
    if (this.createAccountForm.controls.password.value != this.createAccountForm.controls.checkPassword.value) {
      console.log("okkkkkkkkkkkk")
      this.verifyPassword = -1;
      return;
    }
    else{
      this.verifyPassword=0;
    }
    await this.authServices.createAccount({
      identifiant : this.createAccountForm.controls.identifiant.value ?? "",
      password : this.createAccountForm.controls.password.value ?? "",
      checkPassword : this.createAccountForm.controls.checkPassword.value ?? ""
    })
    .then(res=>{
      console.log(res)
      if (res.error == "none" ) {
        this.verifyIfAccountCreated = 1;
        this.msgAccountCreated=res.msg
      }
      else{
        this.verifyIfAccountCreated = 1;
        this.msgAccountCreated=res.msg;
      }
    })
    console.log("send to api rest")
  }

  isInvalidTouchedOrDirty(name : string){
    return this.createAccountForm.get(name)?.invalid && ( this.createAccountForm.get(name)?.touched || this.createAccountForm.get(name)?.dirty);
  }
}

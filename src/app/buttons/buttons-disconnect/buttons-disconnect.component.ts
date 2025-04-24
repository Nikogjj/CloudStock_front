import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttons-disconnect',
  imports: [],
  templateUrl: './buttons-disconnect.component.html',
  styleUrl: './buttons-disconnect.component.css'
})
export class ButtonsDisconnectComponent {
  constructor(private router : Router){

  }

  deconnexion(){
    console.log("okpdksqm")
    localStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }
}

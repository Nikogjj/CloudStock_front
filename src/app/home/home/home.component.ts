import { Component, inject } from '@angular/core';
import { ButtonsDisconnectComponent } from '../../buttons/buttons-disconnect/buttons-disconnect.component';
import { HeaderComponent } from '../../header/header.component';
import { AuthService } from '../../services/auth.service';
import { DisplayDocumentsComponent } from '../display-documents/display-documents.component';
import { DisplayMenuComponent } from '../display-menu/display-menu.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ButtonsDisconnectComponent,HeaderComponent, DisplayDocumentsComponent,DisplayMenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router : Router){

  }

  userName = "";
  userId = "";
  userDocuments : Array<any> = [];

  authServices = inject(AuthService)
  
  async ngOnInit (){
    const token = localStorage.getItem("token") ?? "";
    if (token == "") {
      return;
    }
    await this.authServices.getAllDocuments(token)
    .then(res=>{
      console.log(res)
      this.userName = res.identifiant;
      this.userId = res.id;
      this.userDocuments = res.documents

      this.userDocuments.forEach(element => {
        console.log(element);
      });
    })
    .catch(error=>{
      localStorage.clear();
      this.router.navigate(["/login"])
    })
  }
}

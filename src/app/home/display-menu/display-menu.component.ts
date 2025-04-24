import { Component } from '@angular/core';
import { ButtonsDisconnectComponent } from '../../buttons/buttons-disconnect/buttons-disconnect.component';
import { UploadComponent } from '../upload/upload.component';

@Component({
  selector: 'app-display-menu',
  imports: [ButtonsDisconnectComponent,UploadComponent],
  templateUrl: './display-menu.component.html',
  styleUrl: './display-menu.component.css'
})
export class DisplayMenuComponent {

}

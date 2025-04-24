import { Component, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-display-documents',
  imports: [],
  templateUrl: './display-documents.component.html',
  styleUrl: './display-documents.component.css'
})
export class DisplayDocumentsComponent {
  @Input() documents: Array<any> = [];
}

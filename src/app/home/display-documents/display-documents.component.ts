import { Component, inject, Inject, Input, signal, Signal } from '@angular/core';
import { DocumentFromApi } from '../../types/msg.interface';
import { DocumentsService } from '../../services/documents.service';

@Component({
  selector: 'app-display-documents',
  imports: [],
  templateUrl: './display-documents.component.html',
  styleUrl: './display-documents.component.css'
})
export class DisplayDocumentsComponent {
  documentsService = inject(DocumentsService);
  token : string | null = null;

  ngOnInit(){
    this.token ="Bearer " + localStorage.getItem("token");
  }

  downloadDocument(nameDocument : string){
    const options = {
      method : "GET"
    }
    fetch(`http://localhost:3400/get_document/${nameDocument}/${this.token}`,{method : "GET"})
    .then(async (res)=>{
      const url = window.URL.createObjectURL(new Blob ([await res.blob()]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download",nameDocument);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    })
    .catch(error=>console.error(error))
  }

  deleteDocument(id : string){
    const token = localStorage.getItem("token");
    console.log(token)
    const options = {
      method : "DELETE",
      headers : new Headers({
        "Authorization" : `Baerer ${token}`
      })
    }
    fetch(`http://localhost:3400/delete_document/${id}`,options)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(error=>console.log(error));
  }
}

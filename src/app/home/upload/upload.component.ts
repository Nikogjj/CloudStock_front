import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DocumentsService } from '../../services/documents.service';

@Component({
  selector: 'app-upload',
  imports: [ReactiveFormsModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {
  formUpload = new FormGroup({
    file : new FormControl()
  })
  documentsService=inject(DocumentsService)
  // documents = this.documentsService.documents

  onSubmit(event : Event){
    const token = localStorage.getItem("token")
    const form = event.target as HTMLFormElement
    console.log(form);
    const formData = new FormData(form);
    
    const options = {
      headers : new Headers({
        "Authorization" : `Baerer ${token}`
      }),
      method : "POST",
      body : formData
    }
    fetch("http://localhost:3400/upload_documents",options)
    .then(res=>res.json())
    .then(async res=>{
      console.log(res)
      this.documentsService.documents = res.documents;
      console.log(this.documentsService.documents)
    })
    .catch(error=>console.error(error))
  }

}

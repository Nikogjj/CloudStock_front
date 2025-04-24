import { Component, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-display-documents',
  imports: [],
  templateUrl: './display-documents.component.html',
  styleUrl: './display-documents.component.css'
})
export class DisplayDocumentsComponent {
  @Input() documents: Array<any> = [];
  token : string | null = null;
  ngOnInit(){
    this.token ="Bearer " + localStorage.getItem("token");
  }
  downloadImage(nameDocument : string){
    const options = {
      method : "GET"
    }
    fetch(`http://localhost:3400/get_document/${nameDocument}/${this.token}`,{method : "GET"})
    .then(async (res)=>{
      if (res) {
        const url = window.URL.createObjectURL(new Blob ([await res.blob()]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download",nameDocument);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }
      else{
        console.error("error avec le fetch");
      }
    })
    .catch(error=>console.error(error))
  }
}

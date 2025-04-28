import { Injectable, signal, Signal } from '@angular/core';
import { DocumentFromApi } from '../types/msg.interface';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  documents : Array <DocumentFromApi> = [];

}

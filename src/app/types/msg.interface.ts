import { Signal } from "@angular/core"
import { JsonObjectExpression } from "typescript"

export interface ResponseCreateAccount{
    error : string,
    msg : string
}

export interface ResponseGetAllDocuments{
    id : string,
    identifiant : string,
    documents : Array <DocumentFromApi>,
    error : string
}

export interface DocumentFromApi{
    id : string,
    name : string,
    owner_name : string,
}
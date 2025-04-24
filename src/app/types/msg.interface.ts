import { JsonObjectExpression } from "typescript"

export interface ResponseCreateAccount{
    error : string,
    msg : string
}

export interface ResponseGetAllDocuments{
    id : string,
    identifiant : string,
    documents : Array<any>,
    error : string
}
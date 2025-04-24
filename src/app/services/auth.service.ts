import { Injectable } from '@angular/core';
import { LoginInfos } from '../types/loginInfos.interface';
import { CreateInfos } from '../types/createInfos.interface';
import { ResponseCreateAccount, ResponseGetAllDocuments } from '../types/msg.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(loginInfos : LoginInfos) : Promise<boolean>
  {
    return new Promise((resolve,reject)=>{
      const options = {
        method : "POST",
        body: JSON.stringify(loginInfos),
        headers : new Headers({
          "Content-type" : "application/json"
        })
      }
      fetch("http://localhost:3400/login",options)
      .then(async (response)=>{
        // return [await response.json(),response.ok]
        return {data :await response.json(),ok : response.ok}
      })
      .then(res=>{
        if (res.ok) {
          localStorage.setItem("token",res.data.jwt)
          resolve(res.ok);
        }
        else{
          reject(res)
        }
      })
      .catch(error=>{
        console.log(error.data.msg)
        console.log(error)
        console.log("ok")
      })
    })
  }

  createAccount(createInfos : CreateInfos) : Promise<ResponseCreateAccount>{
    return new Promise((resolve,reject)=>{
      const options = {
        method : "POST",
        body: JSON.stringify(createInfos),
        headers : new Headers({
          "Content-type" : "application/json"
        })
      }
      fetch("http://localhost:3400/create_account",options)
      .then(res=>res.json())
      .then(res=>{
        resolve(res)
      })
      .catch(error=>console.log(error))
    })
  }

  getAllDocuments(token : string) : Promise<ResponseGetAllDocuments>{
    return new Promise((resolve,reject)=>{
      const options = {
        headers : new Headers({
          "Content-type" : "application/json",
          "Authorization" : `Bearer ${token}`
        }),
        method : "GET",
      } 
      fetch("http://localhost:3400/get_all_documents",options)
      .then(res=>{
        if (res.ok) {
          resolve(res.json())
        }
        else{
          reject("error")
        }
      })
      // .catch(error=>console.log(error));
    }) 
  }
}

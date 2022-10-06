import { photo } from "./photo"

export type token=string | number | null | undefined | unknown |boolean


  export interface user{
    email:string
    password:string
    username:string
    photos?:[photo]
}

export interface userLogged{
    username:string
    id:number
    token?:token
    email:string
    photos?: [photo]  
    
  }



  export interface userDataUpdate{
    username?:string
    email?:string
    password?:string | number
  
  }
  
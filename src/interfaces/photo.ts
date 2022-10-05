import { user } from "./user";

export interface photo{
    url: string;
    author:user;
    desc?:string;
    title:string;
}
import {sign} from '../index'
import jwt from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express';

interface JwtPayload {
    id: Number;
    email:string;
}

export const authCookie=async(req:Request,res:Response,next:NextFunction)=>{
        try {
           const tokenCookie= req.cookies.authCookie;

           if(!tokenCookie ) return res.status(400).json({msg:"bad Request token its required"})
            
            const {id, email}:any=jwt.verify(tokenCookie,sign) as JwtPayload

            if(!id || !email)  return res.status(400).json({msg:"access denied wrog users credentials"})

           
            req.id=id
            req.email=email
               
 
            next();

        } catch (e) {
            return res.status(500).json({msg:"error authenticating user"})
        }
}
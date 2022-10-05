import {sign} from '../index'
import jwt from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express';

export const authCookie=async(req:Request,res:Response,next:NextFunction)=>{
        try {
           const tokenCookie= req.cookies.authCookie;

           if(!tokenCookie ) return res.status(400).json({msg:"bad Request token its required"})
            
            const verify=jwt.verify(tokenCookie,sign)

            if(!verify)  return res.status(400).json({msg:"access denied wrog users credentials"})

            
            req.id=verify.id
            req.email=verify.email
               
 
            next();

        } catch (e) {
            return res.status(500).json({msg:"error authenticating user"})
        }
}
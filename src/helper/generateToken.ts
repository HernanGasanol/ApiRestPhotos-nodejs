import {sign} from '../index'
import jwt from  'jsonwebtoken';
import { token } from '../interfaces/user';


export const generateToken=async(id:number,email:string):Promise<token>=>{
    
    const payload={
        id:id,
        email:email
    }
   try {

        const token=await jwt.sign(payload,sign);
      
       return token;
    }catch (error) {
         return error 
    }
}
import jwt from  'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();


export const generateToken=(id,email)=>{
    
    const payload={
        id:id,
        email:email
    }
   try {

        const token=jwt.sign(payload,process.env.secret);
      
         return token;
    }catch (error) {
         return error 
    }
}
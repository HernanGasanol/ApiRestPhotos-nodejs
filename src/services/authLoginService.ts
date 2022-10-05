import prisma from '../prismaClient'
import { token, user, userLogged } from '../interfaces/user';
import bcrypt from 'bcrypt';
import { generateToken } from '../helper/generateToken';




type authInfo={
  email:string
  password:any
}



type response=userLogged | boolean | false

export const authLoginService=async({email,password}:authInfo)=>{




  try {

    let userFound=await prisma.user.findUnique({where: {
     email:email
   }});

    if(!userFound) return false;

    
    const validatePassword=await  bcrypt.compare(password, userFound.password);
    
    if(!validatePassword) return false;


    
    const token=await generateToken(userFound.id,userFound.email);
  


     
  let user={
     id:userFound.id,
     email:userFound.email,
     username:userFound.username,
     token
   }

   return user
        
    } catch (e) {
        return false;
    }


}
import prisma from '../prismaClient'
import { user } from '../interfaces/user';


type response=user | boolean;

export const authRegisterService=async({email,username,password}:user):Promise<response>=>{


    try {

     let user=await prisma.user.findUnique({where: {
      email:email
    }});

     if(user) return false;

      user=await prisma.user.create({data:{
        email,
        password,
        username
      }})

    return user
        
    } catch (e) {
        return false;
    }


}
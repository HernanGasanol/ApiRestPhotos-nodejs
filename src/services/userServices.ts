import { PrismaClient } from "@prisma/client"
import prisma from '.././prismaClient'


export const getUserService = async(id:number) => {

    try {
           const user=await prisma.user.findUnique({
        where:{
            id:id
        }
    })
    

    if(!user) return false;


    return user
    } catch (error) {
        return false;
    }
 

}



export const getUsersService = async () => {
  try {
    const users = await prisma.user.findMany();

    if (!users) return false;

    return users;
  } catch (error) {
    return false;
  }
};


export const deleteUserService = async (id:number) => {
  try {
    const userDeleted = await prisma.user.delete({
      where: {
        id: id,
      },
    });

    if (!userDeleted) return false;

    return userDeleted;
  } catch (e) {
    return false;
  }
};


export const updateUserService = async(id:number,data:{}) => {
    
    try {
        const userDeleted = await prisma.user.update({
          where: {
            id: id,
          }
          
        });
    
        if (!userDeleted) return false;
    
        return userDeleted;
      } catch (e) {
        return false;
      }
  

}
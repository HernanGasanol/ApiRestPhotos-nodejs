import { Request, Response } from 'express'
import {deleteUserService, getUserService, getUsersService, updateUserService} from '.././services/userServices'


export const getUser =async(req:Request,res:Response)=>{
  

    try {
           
        const user=await getUserService(Number.parseInt(req.params.id))

        if(!user) return res.status(404).json({msg:"user not found"})


        return  res.status(200).json({msg:"user found sucessfully" , user})
         
 
 
    } catch (e) {
     
        return res.status(500).json({msg:"internal error"})

}


}


export const updateUser =async(req:Request,res:Response)=>{
    
    try {

        const id=Number.parseInt(req.params.id)
        
       if(id != req.id) return res.status(400).json({msg:"permission denied"})

        const body={
            email:req.body.email,
            username:req.body.username,
            password:req.body.password
        }
        const dataUser={}

 

       console.log(dataUser)




       // const userUpated=await updateUserService(dataUser)
        //if(!userUpated) return res.status(400).json({msg:"failed delete"})

       // return res.status(202).json({msg:"user deleted sucessfully" , userUpated})
         

    } catch (error) {
        return res.status(500).json({msg:"internal error"})    
    }   


}


export const deleteUser=async(req:Request,res:Response)=>{
    
   
    try {

        const id=Number.parseInt(req.params.id)
        
        if(id !== req.id) return res.status(400).json({msg:"permission denied"})


        const userDeleted=await deleteUserService(id)
        if(!userDeleted) return res.status(400).json({msg:"failed delete"})

        return res.status(202).json({msg:"user deleted sucessfully" , userDeleted})
         

    } catch (error) {
        return res.status(500).json({msg:"internal error"})    
    }   


}


export const getUsers=async(req:Request,res:Response
)=>{

    try {
        
        const users=await getUsersService();

        if(!users) return res.status(404).json({msg:"users not found"})


        return res.status(200).json({msg:"sucessfully request", users})
   
   
    } catch (e) {
        return res.status(500).json({msg:"internal error"})    
    }

}
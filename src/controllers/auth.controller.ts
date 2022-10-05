import { token, user, userLogged } from "../interfaces/user";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { authRegisterService } from "../services/authRegisterService";
import { authLoginService } from "../services/authLoginService";



type res= userLogged | boolean 


export const authLogin=async(req:Request,res:Response)=>{
    try {
        let userInf = {
            email:req.body.email,
            password:req.body.password
        }

        let user:res=await authLoginService(userInf);

        if(!user) return res.status(400).json({msg:"user doesnt exist"});


        return res.cookie('authCookie',user.token,{httpOnly:true , secure:true}).status(200).json({user})
        
        

    } catch (error) {
        return res.status(500).json({msg:"internal error"})
    }
}




export const authRegister=async(req:Request,res:Response)=>{


    try {
    
   
    const {email,username,password}=req.body;

   
     if(!email || !username || !password) return res.status(400).json({msg:"bad request"});

 
    let hash=await bcrypt.genSalt(10)

    let passwordHash=await bcrypt.hash(password,hash)
      
    const userInfo:user={
        email,
        username,
        password:passwordHash
    }
    
        let user= await authRegisterService(userInfo)

        if(!user) return res.status(404).json({msg:"user already registered"});

        
        return res.status(200).json({msg:"register successfully", user:{email,username}})


    } catch (e) {
       return res.status(500).json({msg:"internal error"});
    }


}
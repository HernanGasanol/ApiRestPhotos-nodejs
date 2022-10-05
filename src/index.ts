import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './routes/router.user'
import authRouter from './routes/router.auth'
import photoRouter from './routes/photo.router';
import cookieParser from 'cookie-parser'
 
declare global {
    namespace Express {
      interface Request {
        id:number;
        email:string; 
      }
    }
  }

const app= express();

dotenv.config()


export const sign=process.env.SIGN


//middlewares

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())



//routes



app.use("/api/auth",authRouter);
app.use("/api/users",userRouter);
app.use("/photo",photoRouter);





console.log(process.env.SIGN)

app.listen(process.env.PORT,()=>{ console.log("running")});



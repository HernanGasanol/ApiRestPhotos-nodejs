import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/router.user'
import authRouter from './routes/router.auth'
import photoRouter from './routes/photo.router';
import cookieParser from 'cookie-parser'

dotenv.config();


const app= express();





//middlewares
app.use(express.json());
app.use(urlencoded)
app.use(cookieParser());

//routes
app.use("/api/auth",authRouter);
app.use("/api/users",userRouter);
app.use("/photo",photoRouter);







app.listen(process.env.PORT,()=>{ console.log("running")});



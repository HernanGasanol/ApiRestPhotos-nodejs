import {Router} from 'express';
import { authLogin, authRegister } from '../controllers/auth.controller';
import { authCookie } from '../middlewares/authCookie';

const router=Router();



router.post('/register',authRegister);
router.post('/login',authCookie,authLogin);





export default router
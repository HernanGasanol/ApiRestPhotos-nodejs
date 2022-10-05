import {Router} from 'express';
import { authLogin, authRegister } from '../controllers/auth.controller';

const router=Router();



router.post('/',authRegister);

router.get('/',authRegister);







export default router
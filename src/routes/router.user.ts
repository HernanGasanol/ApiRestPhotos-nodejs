import {Router} from 'express';
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/user.controller';
import { authCookie } from '../middlewares/authCookie';

const router=Router();



router.get('/:id',authCookie,getUser);

router.get('/',authCookie,getUsers);


router.put('/:id',authCookie,updateUser)

router.delete('/:id',authCookie,deleteUser);




export default router;
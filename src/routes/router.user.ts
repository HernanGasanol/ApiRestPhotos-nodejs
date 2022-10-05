import {Router} from 'express';
import { deleteUser, getUser, updateUser } from '../controllers/user.controller';

const router=Router();



router.get('/users/:id',getUser);

router.put('/users/:id',updateUser)
router.delete('/users/:id',deleteUser);




export default router;
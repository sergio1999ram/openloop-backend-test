import { Router, Request, Response } from "express";

import {
    createUser,
    listUsers,
    updateUser,
    deleteUser
} from '../controller/user.controllers';

const router = Router();

router.get('/', listUsers);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
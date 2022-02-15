import { Router, Request, Response } from "express";

import { createUser, listUsers } from '../controller/user.controllers';

const router = Router();

router.get('/', listUsers);
router.post('/:id', createUser);

export default router;
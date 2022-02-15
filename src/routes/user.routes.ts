import { Router, Request, Response } from "express";

import { listUsers } from '../controller/user.controllers';

const router = Router();

router.get('/', listUsers);

export default router;
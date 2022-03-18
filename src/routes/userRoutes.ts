import { Router } from 'express';
const router = Router();

import UserController from '../controllers/UserController';

router.post('/', UserController.store);

export default router;

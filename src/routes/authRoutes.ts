import { Router } from 'express';
const router = Router();

import AuthController from '../controllers/AuthController';
import authMiddleware from '../middlewares/authMiddleware';


router.post('/', authMiddleware, AuthController.authenticate);

export default router;

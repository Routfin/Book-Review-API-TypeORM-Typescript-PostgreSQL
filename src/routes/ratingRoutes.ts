import { Router } from 'express';
const router = Router();

import RatingController from '../controllers/RatingController';


router.post('/', RatingController.store);
router.get('/', RatingController.index);

export default router;

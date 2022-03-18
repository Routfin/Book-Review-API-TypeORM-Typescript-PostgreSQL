import { Router } from 'express';
const router = Router();

import PostController from '../controllers/PostController';


router.post('/', PostController.store);
router.get('/', PostController.index);
router.put('/:id', PostController.update);
router.delete('/:id', PostController.delete);

export default router;

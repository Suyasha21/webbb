import { Router } from 'express';
const router = Router();
router.use('/posts', require('./posts').default);
export default router;
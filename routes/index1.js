import { Router } from 'express';


const router = Router();

import { home } from '../controllers/home_controller';
console.log('router loaded');


router.get('/', home );
router.use('/users', require('./users'));
export default router;
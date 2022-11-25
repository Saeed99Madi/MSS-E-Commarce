import { Router } from 'express';

import authRouter from './auth';
import productRouter from './products';

const router = Router();
router.use(authRouter);
router.use(productRouter);
export default router;

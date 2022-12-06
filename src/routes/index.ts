import { Router } from 'express';

import authRouter from './auth';
import productRouter from './products';
import categoriesRouter from './categories';

const router = Router();
router.use(authRouter);
router.use(productRouter);
router.use(categoriesRouter);
export default router;

import { Router } from 'express';

import authRouter from './auth';
import productRouter from './products';
import categoriesRouter from './categories';
import servicesRouter from './services';
import settingsRouter from './settings';

const router = Router();
router.use(authRouter);
router.use(productRouter);
router.use(categoriesRouter);
router.use(servicesRouter);
router.use(settingsRouter);
export default router;

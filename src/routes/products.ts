import { Router } from 'express';

import ProductController from '../controllers/ProductController';
import errorWrapper from '../helpers/errorHandler/errorWrapper';
import upload from '../middlwares/uploadFile';

const router = Router();

const productFields = [
  { name: 'cover', maxCount: 1 },
  { name: 'gallery', maxCount: 8 },
];

router.post(
  '/products',
  upload.fields(productFields),
  errorWrapper(ProductController.create),
);

router.get('/products', errorWrapper(ProductController.index));

export default router;

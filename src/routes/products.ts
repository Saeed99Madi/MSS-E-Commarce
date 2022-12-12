import { Router } from 'express';

import ProductController from '../controllers/ProductController';
import errorWrapper from '../helpers/errorHandler/errorWrapper';
import upload from '../middlwares/uploadFile';

const router = Router();

const productFields = [
  { name: 'cover', maxCount: 1 },
  { name: 'catalog', maxCount: 1 },
  { name: 'gallery', maxCount: 8 },
];

router.post(
  '/products',
  upload.fields(productFields),
  errorWrapper(ProductController.create),
);
router.put('/products/unpublish', errorWrapper(ProductController.unPublish));
router.put('/products/publish', errorWrapper(ProductController.publish));
router.get('/products', errorWrapper(ProductController.index));
router.get(
  '/category/products/:CategoryId',
  errorWrapper(ProductController.categoryProducts),
);
router.get(
  '/products/:search/:CategoryId?',
  errorWrapper(ProductController.search),
);

export default router;

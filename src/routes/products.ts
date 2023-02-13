import { Router } from 'express';

import ProductController from '../controllers/ProductController';
import errorWrapper from '../helpers/errorHandler/errorWrapper';
import { isAuth } from '../middlwares/IsAuth';
import upload from '../middlwares/uploadFile';

const router = Router();

const productFields = [
  { name: 'cover', maxCount: 1 },
  { name: 'catalog', maxCount: 1 },
  { name: 'gallery', maxCount: 8 },
];

router.post(
  '/products',
  errorWrapper(isAuth),
  upload('products').fields(productFields),
  errorWrapper(ProductController.create),
);
router.put(
  '/products/unpublish',
  errorWrapper(isAuth),
  errorWrapper(ProductController.unPublish),
);
router.put(
  '/products/update',
  upload('products').fields(productFields),
  errorWrapper(isAuth),
  errorWrapper(ProductController.update),
);
router.put(
  '/products/publish',
  errorWrapper(isAuth),
  errorWrapper(ProductController.publish),
);
router.get('/products', errorWrapper(ProductController.index));
router.delete(
  '/products/delete/:productsIds',
  errorWrapper(isAuth),
  errorWrapper(ProductController.destroy),
);
router.get(
  '/category/products/:CategoryId',
  errorWrapper(ProductController.categoryProducts),
);
router.get(
  '/products/:search/:CategoryId?',
  errorWrapper(ProductController.search),
);
// client Routes
router.get(
  '/products/published',
  errorWrapper(ProductController.getPublishedProducts),
);

export default router;

import { Router } from 'express';

import CategoriesController from '../controllers/CategoriesController';
import errorWrapper from '../helpers/errorHandler/errorWrapper';

const router = Router();

router
  .route('/categories')
  .get(errorWrapper(CategoriesController.catIndex))
  .post(errorWrapper(CategoriesController.create));

router.get(
  '/subcategories/:categoryId',
  errorWrapper(CategoriesController.subCatIndex),
);

// router.post('/categories');

export default router;

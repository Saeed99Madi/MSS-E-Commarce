import { Router } from 'express';

import CategoriesController from '../controllers/CategoriesController';
import errorWrapper from '../helpers/errorHandler/errorWrapper';

const router = Router();

router
  .route('/categories')
  .get(errorWrapper(CategoriesController.catIndex))
  .post(errorWrapper(CategoriesController.create))
  .delete(errorWrapper(CategoriesController.delete))
  .put(errorWrapper(CategoriesController.update));

router.get(
  '/subcategories/:categoryId',
  errorWrapper(CategoriesController.subCatIndex),
);

router.get('/categories/all', errorWrapper(CategoriesController.all));

// router.post('/categories');

export default router;

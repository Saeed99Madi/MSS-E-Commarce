import { Router } from 'express';

import CategoriesController from '../controllers/CategoriesController';
import errorWrapper from '../helpers/errorHandler/errorWrapper';
import upload from '../middlwares/uploadCategoryFile';

const router = Router();
const categoryField = [{ name: 'cover', maxCount: 1 }];

router
  .route('/categories')
  .get(errorWrapper(CategoriesController.catIndex))
  .post(upload.fields(categoryField), errorWrapper(CategoriesController.create))
  .delete(errorWrapper(CategoriesController.delete))
  .put(errorWrapper(CategoriesController.update));

router.get(
  '/subcategories/:categoryId',
  errorWrapper(CategoriesController.subCatIndex),
);

router.get('/categories/all', errorWrapper(CategoriesController.all));
router.get('/categories/show/:id', errorWrapper(CategoriesController.show));

export default router;

import { Router } from 'express';

import CategoriesController from '../controllers/CategoriesController';
import errorWrapper from '../helpers/errorHandler/errorWrapper';
// import upload from '../middlwares/uploadFile';

const router = Router();

// const productFields = [
//   { name: 'cover', maxCount: 1 },
//   { name: 'gallery', maxCount: 8 },
// ];

// router.post(
//   '/products',
//   //   upload.fields(productFields),
//   errorWrapper(ProductController.create),
// );

router.get('/categories', errorWrapper(CategoriesController.catIndex));

router.get(
  '/subcategories/:categoryName',
  errorWrapper(CategoriesController.subCatIndex),
);

export default router;

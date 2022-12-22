import { Router } from 'express';

import { ServicesController } from '../controllers/';
import errorWrapper from '../helpers/errorHandler/errorWrapper';
import { isAuth } from '../middlwares/IsAuth';
import upload from '../middlwares/uploadFile';

const router = Router();
router.get('/services', errorWrapper(ServicesController.index));
router.get('/services/search/:search', errorWrapper(ServicesController.search));
router.put(
  '/services/unpublish',
  errorWrapper(isAuth),
  errorWrapper(ServicesController.unPublish),
);
router.put(
  '/services/publish',
  errorWrapper(isAuth),
  errorWrapper(ServicesController.publish),
);
router.delete(
  '/services/delete/:servicesIds',
  errorWrapper(isAuth),
  errorWrapper(ServicesController.destroy),
);
router.post(
  '/services',
  errorWrapper(isAuth),
  upload.single('cover'),
  errorWrapper(ServicesController.create),
);

export default router;

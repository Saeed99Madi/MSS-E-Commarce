import { Router } from 'express';

import { ServicesController } from '../controllers/';
import errorWrapper from '../helpers/errorHandler/errorWrapper';
import upload from '../middlwares/uploadFile';

const router = Router();
router.get('/services', errorWrapper(ServicesController.index));
router.put('/services/unpublish', errorWrapper(ServicesController.unPublish));
router.put('/services/publish', errorWrapper(ServicesController.publish));
router.delete(
  '/services/delete/:servicesIds',
  errorWrapper(ServicesController.destroy),
);
router.get('/services/search/:search', errorWrapper(ServicesController.search));

router.post(
  '/services',
  upload.single('cover'),
  errorWrapper(ServicesController.create),
);

export default router;

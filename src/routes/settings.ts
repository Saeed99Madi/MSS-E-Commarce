import { Router } from 'express';

import { SettingsController } from '../controllers/';
import errorWrapper from '../helpers/errorHandler/errorWrapper';
import upload from '../middlwares/uploadFile';

const router = Router();

const SettingsFields = [
  { name: 'logo', maxCount: 1 },
  { name: 'logo2', maxCount: 1 },
];
router.get('/settings', errorWrapper(SettingsController.index));
router.put(
  '/settings/update',
  upload.fields(SettingsFields),
  errorWrapper(SettingsController.update),
);

export default router;

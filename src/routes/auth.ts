import { Router } from 'express';

import AuthController from '../controllers/AuthController';
import errorWrapper from '../helpers/errorHandler/errorWrapper';
import { isAuth } from '../middlwares/IsAuth';

const router = Router();

router.post('/sign-up', errorWrapper(AuthController.signup));
router.post('/sign-in', errorWrapper(AuthController.signin));
router.get(
  '/user/me',
  errorWrapper(isAuth),
  errorWrapper(AuthController.isAuthenticated),
);

export default router;

import { Router } from 'express';

import AuthController from '../controllers/AuthController';
import errorWrapper from '../helpers/errorHandler/errorWrapper';

const router = Router();

router.post('sign-up', errorWrapper(AuthController.signup));
router.post('sign-in', errorWrapper(AuthController.signin));

export default router;

import { Router } from 'express';

import ContactController from '../controllers/ContactController';
import errorWrapper from '../helpers/errorHandler/errorWrapper';

const router = Router();

router.get('/contacts', errorWrapper(ContactController.index));

router.post('/contacts', errorWrapper(ContactController.create));

router.delete('/contacts', errorWrapper(ContactController.destory));

export default router;

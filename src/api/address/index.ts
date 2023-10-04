import { Router } from 'express';

import { getAllHandler } from './address.controller';

const router = Router();

router.get('/', getAllHandler);

export default router;
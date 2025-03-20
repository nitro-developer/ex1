import express from 'express';

import { updateBalanceV1 } from '../controllers/balance.js';
import { validateBalanceUpdate } from '../middlewares/validate-balance-update.js';

const router = express.Router();

router.post('/', validateBalanceUpdate, updateBalanceV1);

export default router;

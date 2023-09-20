import * as express from 'express';
import apiRouter from './api';
import authRouter from './auth';

const router = express.Router();

router.use('/api', apiRouter);
router.use('/auth', authRouter);

export default router;

// TEMPLATE:

// import { Router } from 'express';

// const router = Router();

// export default router;
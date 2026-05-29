import express from 'express';
import { transformTextRes } from '../controllers/transformController';

const router = express.Router();

router.post('/',transformTextRes);

export default router;
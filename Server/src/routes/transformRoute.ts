import express from 'express';
import { transformTextRes } from '../controllers/transformController.js';

const router = express.Router();

router.post('/',transformTextRes);

export default router;
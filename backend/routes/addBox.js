import express from 'express';
import { addBoxController } from '../controllers/addBoxController.js';
const router = express.Router();

router.route('/').post(addBoxController);

export default router;
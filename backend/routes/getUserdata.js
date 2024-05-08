import express from 'express';
import getUserdata from '../controllers/getUserdata.js';
const router = express.Router();

router.route('/').post(getUserdata);

export default router;
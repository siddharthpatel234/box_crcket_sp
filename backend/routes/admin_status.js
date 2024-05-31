import express from 'express';
import adminStatus from '../controllers/admin_status.js';
const router = express.Router();

router.route('/').put(adminStatus);

export default router;
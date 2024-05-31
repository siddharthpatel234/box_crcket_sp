import express from 'express';
import admin from '../controllers/admin_dashboard.js';
const router = express.Router();

router.route('/').post(admin);

export default router;
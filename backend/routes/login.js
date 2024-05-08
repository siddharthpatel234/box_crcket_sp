import express from 'express';
import loginUser from '../controllers/login.js';

const router = express.Router();

router.route('/').post(loginUser);

// router.route('/').post(getUserdata);

export default router;
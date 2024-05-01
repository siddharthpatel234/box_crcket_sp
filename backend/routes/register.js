import express from 'express';
import registerUser from '../controllers/register.js';

const router = express.Router();

router.route('/register').post(registerUser);

module.exports = router;
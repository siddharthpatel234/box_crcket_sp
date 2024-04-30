import express from 'express';
import {registerUser} from '../controllers/register';

const router = express.Router();

router.route('/register').post(registerUser);

module.exports = router;
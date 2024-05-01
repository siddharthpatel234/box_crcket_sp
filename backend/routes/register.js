import express from 'express';
import registerUser from '../controllers/register.js';

const router = express.Router();

router.route('/').post(registerUser);

// module.exports = router;
export default router;
import express from 'express';
import OrderPage from '../controllers/order.js';

const router = express.Router();

router.route('/').post(OrderPage);

export default router;
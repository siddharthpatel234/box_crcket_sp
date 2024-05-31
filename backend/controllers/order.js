import Razorpay from 'razorpay';
import crypto from 'crypto';
import { error } from 'console';

const orders = async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.key_id,
            key_secret: process.env.key_secret,
        });

        const options = {
            amount: req.body.amount * 100,
            currency: "INR",
            receipt: crypto.randomBytes(10).toString("hex"),
        }

        instance.orders.create(options, (err, order) => {
            if(err) {
                console.log(err);
                return res.status(500).json({message: "Something Went Wrong"});
            } else {
                res.status(200).json({data: order});
            }
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: "Internal Server Error"});
    }
}

export default orders;

import jwt from 'jsonwebtoken';
import crypto from 'crypto';

const secretkey = crypto.randomBytes (32).toString('hex');

function generateToken(user){
    const payload = {
        id: user._id,
    }
    return jwt.sign(payload,'shhhhh');
}

export default generateToken;
export {secretkey}
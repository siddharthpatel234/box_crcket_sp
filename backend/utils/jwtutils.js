import jwt from 'jsonwebtoken';
import crypto from 'crypto';

const secretkey = crypto.randomBytes (32).toString('hex');

function generateToken(user){
    const payload = {
        username: user.username,
        email: user.email,
    }
    return jwt.sign(payload,secretkey);
}

export default generateToken;
import jwt from 'jsonwebtoken';
import UserModel from '../models/Users.js';

const getUserdata = async (req, res) => {
    try {
        // Extract token from Authorization header
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ error: 'Authorization header missing' });
        }

        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ error: 'Token missing' });
        }

        // Verify the token
        const verifiedToken = jwt.verify(token, 'shhhhh');
        if (!verifiedToken) {
            return res.status(401).json({ error: 'Invalid token' });
        }

        // Find user by the id in the token
        const response = await UserModel.findOne({ _id: verifiedToken.id });
        if (response) {
            return res.status(200).json({ data: response });
        } else {
            return res.status(404).json({ error: 'User not found' });
        }
    } catch (err) {
        console.error(err);
        if (err.name === 'JsonWebTokenError') {
            return res.status(401).json({ error: 'Invalid token' });
        }
        return res.status(500).json({ error: 'Internal server error' });
    }
};

export default getUserdata;

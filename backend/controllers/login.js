import UserModel from '../models/Users.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import generateToken from '../utils/jwtutils.js';
import { secretkey } from '../utils/jwtutils.js';

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user with the provided email exists
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Wrong Email or Password' });
        }

        // Compare hashed passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Wrong Email or Password' });
        }

        const token = generateToken(user);
        console.log("JWT TOKEN : " + token);
        // const verifiedToken = jwt.verify(token, secretkey);
        // const response = await UserModel.findOne({ _id: verifiedToken.id })

        // if (response) {
        //     console.log(response.email)
        // }

        return res.status(200).json({ message: token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

export default loginUser;

import UserModel from '../models/Users.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import generateToken from '../utils/jwtutils.js';

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if email already exists
        const emailExists = await UserModel.findOne({ email });
        if (emailExists) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        // Check if username already exists
        const usernameExists = await UserModel.findOne({ name });
        if (usernameExists) {
            return res.status(400).json({ message: 'Username already taken, please choose a different one' });
        }

        const saltRound = 10;
        const hash_password = await bcrypt.hash(password,saltRound);

        const token = generateToken({ name, email, password });
        console.log("JWT TOKEN : " + token);

        // If email and username are unique, create new user
        const newUser = new UserModel({ name, email, password:hash_password });
        await newUser.save();

        return res.status(200).json({ message: token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

export default registerUser;

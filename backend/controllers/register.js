import UserModel from '../models/Users.js';

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

        // If email and username are unique, create new user
        const newUser = new UserModel({ name, email, password });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
        // res.render('/Home');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

export default registerUser;

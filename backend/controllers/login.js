import UserModel from '../models/Users.js';

const loginUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if email already exists
        console.log({email});
        const emailExists = await UserModel.findOne({ email });
        const pass = await UserModel.findOne({ password });
        if (emailExists && pass) {            
            return res.status(200).json({ message: 'Login Successful!' });
        }
        else
        {
            return res.status(401).json({ message: 'Wrong Email or Password' });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

export default loginUser;
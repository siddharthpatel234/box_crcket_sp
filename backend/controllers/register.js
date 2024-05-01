// import UserModel from '../backend/models/Users.js';
import UserModel from '../models/Users.js';


const registerUser = async(req,res) => {
    const {name,email,password} = req.body;
    const newUser = new UserModel(name, email, password);
    await newUser.save(); 
    
    res.status(201).json({ message: 'User created successfully' });

    console.log(req.body);
}

export default registerUser;


 // const newUser = new UserModel({
    //     name: 'John Doe',
    //     email: 'john@example.com',
    //     password: 'password123'
    //   });

    //   newUser.save()    
    //   .then(savedUser => {
    //     console.log('User saved successfully:', savedUser);
    //   })
    //   .catch(error => {
    //     console.error('Error saving user:', error);
    //   });
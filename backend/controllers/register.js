import UserModel from '../backend/models/Users.js';

const registerUser = async(req,res) => {
    const newUser = new UserModel({
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123'
      });

      newUser.save()    
      .then(savedUser => {
        console.log('User saved successfully:', savedUser);
      })
      .catch(error => {
        console.error('Error saving user:', error);
      });
}

module.exports = {registerUser};
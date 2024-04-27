import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import cookieParser from 'cookie-parser';

// Models
import UserModel from '../backend/models/Users.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const uri = 'mongodb+srv://siddharth:$Id18122004@cluster0.u2dv5o9.mongodb.net/BoxCricket?retryWrites=true&w=majority';

mongoose.connect(uri).then(()=>{
    console.warn('hello')
    console.log(new Date(),"MongoDB connected successfully")
}).catch((error)=>{
    console.log("error" + error)
})


// app.post('/get',async(req,res)=>{

//   console.log('hello')
//   const data =  jwt.verify('AFmmF2swRgIhALT2zsrGbi1CQr_AQCMntXT6AtauDUKfz70temm0JUKAAiEA2y5q2MJecLeiQYmAX2EJzgEal9iAa3KsxPZ8_JlqfZg:QUQ3MjNmd0xRRm1hYm5uY21VbDI2bjlOYmpmbUJhMUlwREFmVWhqRnNVRjRZM3ZrSDFiRkVhV0wtRGlCbFllVVpQQUxWenU2VmdSQVN3eWhjSnkwaVBMLWpQREhhQ1Q1M0VaZ2I0NkJJZlBqSTFsNDZsTmRvMkN3ZlJIMWtrNjNpb0V2ZTlJWGR4eUZ1TU5sRlV3cUF1eGd5aGQzWVprRVpB')
//   console.log(data)
// })

app.post('/register',async(req, res)=>{
    // UserModel.create(req.body)
    // .then(user=>res.json(user))
    // .catch(err=>res.json(err))

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

    // const {name, email, password} = req.body;
    // new UserModel({name, email, password}).save().catch((err)=>{console.log(err)});
})
app.listen(4000,()=>{
    console.log('server started at port 4000')
})
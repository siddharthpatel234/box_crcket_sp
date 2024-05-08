import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import cookieParser from 'cookie-parser';
import UserRoute from '../backend/routes/register.js';
import UserLogin from '../backend/routes/login.js';
import UserData from '../backend/routes/getUserdata.js'
// import AddBox from '../frontend/src/Components/AddBox.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({extended:false})); 

app.use("/register",UserRoute);
app.use("/login",UserLogin);
// app.use("/addBox",AddBox);
app.use("/getUserdata",UserData);

const uri = 'mongodb+srv://siddharth:$Id18122004@cluster0.u2dv5o9.mongodb.net/BoxCricket?retryWrites=true&w=majority';

mongoose.connect(uri).then(()=>{
    console.warn('hello')
    console.log(new Date(),"MongoDB connected successfully")
}).catch((error)=>{
    console.log("error" + error)
})

app.listen(4000,()=>{
    console.log('server started at port 4000')
})
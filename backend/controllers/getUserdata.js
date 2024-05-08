import jwt from 'jsonwebtoken';
import { secretkey } from '../utils/jwtutils.js';
import UserModel from '../models/Users.js';

const getUserdata = async(req,res) => {


    const token = req.body.token

    const verifiedToken = jwt.verify(token,'shhhhh');

    const response = await UserModel.findOne({ _id: verifiedToken.id })

        if (response) {
            console.log(response.email)
            return res.status(308).json({data : response})
        }
        else{
            console.log(response)
        }

}

export default getUserdata;





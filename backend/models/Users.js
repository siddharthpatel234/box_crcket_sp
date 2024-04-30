import mongoose from "mongoose";

// Schema of the Database
const UserSchema = new  mongoose.Schema({ 
    name: { type: String, required: true },
    email: {type: String, required: true, unique:true},
    password: {type: String, required: true},
});

// Name of the Database
const  UserModel = mongoose.model("register_users", UserSchema);

export default UserModel;


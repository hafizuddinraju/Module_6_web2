import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
    id:{type:String, unique:true, required:true},
    name:{
        firstName:{type:String, required:true},
        middleName:{type:String},
        lastName:{type:String, required:true}

    },
    email:{type:String, required:true},
    avatar:{type:String},
    gender:{
        type:String,
        enum:['Male', 'Female']
    }
    
})
const User = model<IUser>('User', userSchema);
export default User;
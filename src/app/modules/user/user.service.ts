import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async(payload:IUser): Promise<IUser>=>{

    const user = await new User(payload)
    await user.save();
    return user;
}
export const getuserFromDB = async()=>{
    const users = await User.find();
    return users

}
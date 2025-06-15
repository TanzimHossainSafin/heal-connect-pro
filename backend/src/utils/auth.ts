import jwt from "jsonwebtoken";
import bcrypt, { genSalt } from 'bcrypt';
//create jwt
export const hashedPassword=async(password)=>{
   const hashedPassword=await bcrypt.hash(password, await bcrypt.genSalt(10));
   return hashedPassword
}
export const createJwt=(user)=>{
    const token=jwt.sign({
        id:user.id,
        username:user.username
    },process.env.JWT_SECRET);
    return token
   
}
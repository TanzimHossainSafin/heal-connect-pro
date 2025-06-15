import prisma from "../db";
import { hashedPassword } from "../utils/auth";
console.log('hi')
const userSignup=async(req,res)=>{
   const {username,email,password}=req.body;
   console.log(username);
   try{
    const data=await prisma.user.create({
        data:{
            username,
            email,
            password:await hashedPassword(password)
        }
       });
    res.status(200).json({message:"User create Successfully",data})
   }catch(error){
    res.status(500).message({message:"please provide your data"})
   }
}
export default userSignup;
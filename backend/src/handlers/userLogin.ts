import {createJwt,checkHashPassword,hashedPassword} from "../utils/auth";
import prisma from '../db';
const userLogin=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const data=await prisma.user.findUnique({
            where:{
                email
            }
        })
        if(!data){
            res.json({message:"User doesn't exist"}); 
            return;
        }
        const success = await checkHashPassword(password,data.password);
        if(!success){
            res.json({message:"Wrong password"});
            return;
        }
        const token= await createJwt(data);
        res.status(200).json({message:"User signin successfully",token});
    }catch(error){
        res.status(500).json({message:error});
    }
 }
 export default userLogin;
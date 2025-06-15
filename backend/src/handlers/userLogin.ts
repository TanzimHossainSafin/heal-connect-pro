import {createJwt} from "../utils/auth";
import prisma from '../db';
const userSignup=async(req,res)=>{
    const {email,password}=req.body;
    const data=await prisma.user.findUnique({
        where:{
            email
        }
    })   
 }
 export default userSignup;
import { Router } from "express";
import userSignup from "../handlers/usersignup";
import userLogin from "../handlers/userLogin";
import { typeCheck } from "../utils/typeCheck";
const userRouter=Router();
userRouter.post('/signup',typeCheck,userSignup);
userRouter.post('/login',typeCheck,userLogin);
export default userRouter;
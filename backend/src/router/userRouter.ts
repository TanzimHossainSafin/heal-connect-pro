import { Router } from "express";
import userSignup from "../handlers/usersignup";
import userLogin from "../handlers/userLogin";
const userRouter=Router();
userRouter.post('/signup',userSignup);
userRouter.post('/login',userLogin);
export default userRouter;
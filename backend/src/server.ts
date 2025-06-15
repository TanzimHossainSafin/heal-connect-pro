// src/server.ts
import express from "express";
const app = express();
import userRouter from "./router/userRouter";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Hello from server!");
});
app.use('/app/v1/user',userRouter);
export default app;
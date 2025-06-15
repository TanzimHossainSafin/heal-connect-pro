// src/server.ts
import express from "express";
import cors from "cors";
const app = express();
import userRouter from "./router/userRouter";
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello from server!");
});
app.use('/app/v1/api/user',userRouter);
export default app;
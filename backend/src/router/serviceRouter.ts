import { Router } from "express";
import appointment from "../handlers/appointment";
const serviceRouter=Router();

serviceRouter.post("/appointment",appointment)

export default serviceRouter;
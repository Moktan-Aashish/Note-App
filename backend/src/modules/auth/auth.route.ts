import express from "express";
import { loginController, signupController } from "./auth.controller";

const authRouter = express.Router();

authRouter.post("/login", loginController);
authRouter.post("/register", signupController);

export default authRouter;

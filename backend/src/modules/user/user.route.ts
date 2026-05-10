import express from "express";
import { getProfileController } from "./user.controller";

const userRouter = express.Router();

userRouter.get("/", getProfileController);

export default userRouter;

import { Router } from "express";
import authRouter from "../modules/auth/auth.route";
import userRouter from "../modules/user/user.route";
import { protect } from "../middlewares/auth.middleware";
import noteRouter from "../modules/note/note.routes";

const appRouter = Router();

appRouter.use("/auth", authRouter);
appRouter.use("/profile", protect, userRouter);
appRouter.use("/note", protect, noteRouter);

export default appRouter;

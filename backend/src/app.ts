import express from "express";

import appRouter from "./routes/app.route";
import { corsMiddleware } from "./configs/cors.config";

const app = express();

app.use(corsMiddleware);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

app.use("/api/v1", appRouter);

export default app;

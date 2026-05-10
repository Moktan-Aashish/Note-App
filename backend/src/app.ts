import express from "express";
import cors from "cors";
import appRouter from "./routes/app.route";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});
app.use("/api/v1", appRouter);

export default app;

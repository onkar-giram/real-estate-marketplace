import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// move this into seperate file later
mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.log(`Error while connecting to DB: ${err}`));

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server up and running on port: ${PORT}`);
});

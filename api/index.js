import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/database.js";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

connectDB();

app.listen(PORT, () => {
  console.log(`Server up and running on port: ${PORT}`);
});

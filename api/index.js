import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

import userRouter from "./routes/user.route.js";

const app = express();

const PORT = process.env.PORT || 3000;

// move this into seperate file later
mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.log(`Error while connecting to DB: ${err}`));

app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server up and running on port: ${PORT}`);
});

import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_DB_URI)
    .then(() => console.log("Connected to MongoDB!"))
    .catch((err) => console.log(`Error while connecting to DB: ${err}`));
};

export default connectDB;

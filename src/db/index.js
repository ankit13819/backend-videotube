import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import { DB_NAME } from "../../constants.js";

const app = express();

dotenv.config({
  path: "./env",
});

const connectDb = async () => {
  try {
    const instanceConncection = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    app.on("error", (error) => {
      console.log("Error Conncection", error);
      throw error;
    });

    console.log(`MongoDb Connected ${instanceConncection.connection.host}`);
  } catch (error) {
    console.log(`The MongoDB connection Failed ${error}`);
    process.exit(1);
  }
};

export default connectDb;

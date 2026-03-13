import mongoose from "mongoose";

const connectDb = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("mongodb connected");
  } catch (error) {
    console.log(`Error connecting to mongoDB: 
        ${error.message}`);
  }
};

export default connectDb;

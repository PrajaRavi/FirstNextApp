import mongoose from "mongoose";
export const DBConnect=async()=>{

  const url = 'mongodb://127.0.0.1:27017/BlogWeb';
   try {
    const data= await mongoose.connect(url);
    console.log(data);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection failed");
    console.log(error);
  }


}
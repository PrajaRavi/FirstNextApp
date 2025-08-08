import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
username:{
  type:String,
},
email:{
  type:String,
},
password:{
  type:String,
}



},{timestamps:true})

export const UserModel=mongoose.models.NextJsUser||mongoose.model("NextJsUser",userSchema);
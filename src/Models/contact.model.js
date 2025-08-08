import mongoose from "mongoose";
const ContactShema=new mongoose.Schema({
  name:String,
  email:String,
  message:String,
});
export const ContactModel=mongoose.models.contacts||mongoose.model("contacts",ContactShema);
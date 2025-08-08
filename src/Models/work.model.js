import mongoose from "mongoose";
const workschema=new mongoose.Schema({
  name:{
    type:String,
    required:true,

  },
  description:{
    type:String,
  },
  status:{
    type:String,
    default:"Pending",
  },
  date:{
    type:String,
    default:Date.now(),
  },
  userid:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"NextJsUser",
  }
},{
  timestamps:true
})
export const workmodel=mongoose.models.work||mongoose.model("work",workschema);
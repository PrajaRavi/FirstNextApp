import { workmodel } from "@/Models/work.model";
import { NextResponse } from "next/server";

// function for posting the work
export async function POST(request){
  try {
    let {name,date,userid,description}=await request.json();
let WorkAlreadyExistOrNot=await workmodel.find({name});
console.log(WorkAlreadyExistOrNot.length)
if(WorkAlreadyExistOrNot.length!=0){
  return NextResponse.json({success:false,msg:"This work already exist"});
}    
    let data=await workmodel.insertOne({name,date,userid,description});
    console.log(data);
    return NextResponse.json({success:true,msg:"Added Successfully"})
  } catch (error) {

    console.log(error);
    return NextResponse.json({success:false,msg:error})

  }

}

// function for collecting all the work at a time
export async function GET(request){
  try {
    // let {userid}=await request.json();
    let data=await workmodel.find();
    return NextResponse.json(data);
  // return NextResponse.json(userid);
  } catch (error) {
    console.log(error)
    return NextResponse.json({success:false,msg:error})
  }
}
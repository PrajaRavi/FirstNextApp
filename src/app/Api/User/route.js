import { NextResponse } from "next/server";
import { DBConnect } from "@/helper/db";
import { UserModel } from "@/Models/User.model";
import bcrypt from "bcrypt";

export async function GET(request){
  
  let data=await UserModel.find();
  console.log(data);
  return NextResponse.json({msg:"User getted successfully"})
}
// Creating user

export async function POST(request){
  const {username,email,password}=await request.json();
  try {
    const HashPass=await bcrypt.hash(password,10);
let UserExistOrNot=await UserModel.findOne({email});
if(UserExistOrNot){
  return NextResponse.json({success:false,msg:"User already exist "})
}  


const data=  await UserModel.insertOne({username,email,password:HashPass})
  console.log(data);
} catch (error) {
  console.log(error);
  return NextResponse.json({success:false,msg:error})
}
return NextResponse.json({success:true,msg:"User created successfully"},{status:201,statusText:"hey statustext change"})
}




export function DELETE(request){
  return NextResponse.json({msg:"Hello this the Delete method"})

}
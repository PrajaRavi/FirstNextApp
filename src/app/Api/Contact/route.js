import { ContactModel } from "@/Models/contact.model";
import { NextResponse } from "next/server";

export async function POST(request){
  let {name,email,message}=await request.json();
try {
  let data=await ContactModel.insertOne({name,email,message})
  console.log(data);
  return NextResponse.json({success:true,msg:"posted successfully"})
} catch (error) {
  return NextResponse.json({success:false,msg:error.message})
}
}
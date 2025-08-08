
import { UserModel } from "@/Models/User.model";
import { NextRequest, NextResponse } from "next/server";

// function for getting the single user
export async function GET(request,{params}){
  const {CurrentUserId}=params;
  // console.log(params)
try {
  let data=await UserModel.findOne({email:CurrentUserId});
  return NextResponse.json({success:true,msg:data});
} catch (error) {
  return NextResponse.json({error,success:false})
}
}

// function for deleting particular user with the help of userid
export async function DELETE(request,{params}){
  const {CurrentUserId}=params;
  try {
    let data=await UserModel.deleteOne({_id:CurrentUserId});
    console.log(data);
    return NextResponse.json({success:true,msg:data});
  } catch (error) {
    return NextResponse.json({error,success:false});
  }

}

// function to update the user
export async function POST(request,{params}){
  const {CurrentUserId}=params;
  try {
    let {email,username}=await request.json();
    let data=await UserModel.updateOne({_id:CurrentUserId},{
      $set:{email,username}
    })
    console.log(data);
    return NextResponse.json({success:true,msg:data});
  } catch (error) {
    return NextRequest.json({success:false,msg:error})
  }
}
    
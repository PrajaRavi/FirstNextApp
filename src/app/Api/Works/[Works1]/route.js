
// This is for the first parameter passed for daynamic routing

import { workmodel } from "@/Models/work.model";
import { NextResponse } from "next/server";


// Getting all the work of particular user
export async function GET(request,{params}){
  // console.log(Works1)
  // console.log('chala hai ki nahi')
  try {
    let {Works1}=params;
    
    let data=await workmodel.find({userid:Works1});
    // console.log(data);
    // return NextResponse.json({Works1,msg:"Hello I am Ravi Prajapati"})
    // return NextResponse.json({success:true,Works1})
  return NextResponse.json({success:true,msg:data})
  
} catch (error) {
  return NextResponse.json({success:false,msg:error})
}
}
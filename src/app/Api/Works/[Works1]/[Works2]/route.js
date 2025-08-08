import { workmodel } from "@/Models/work.model";
import { NextResponse } from "next/server";

// Getting the particular work of particular user
export async function POST(request,{params}){
  const {Works1,Works2}=params;//here work1 params  i will use for getting the userid and the second parameter means works2 used for getting the current work id
  // return NextResponse.json({Works1,Works2});
  try {
    // let data=await workmodel.find({$and:[{userid:Works1},{_id:Works2}]})
    let data=await workmodel.updateOne({$and:[{userid:Works1},{_id:Works2}]},{
     $set:{
      status:"Complete"
     }
    })
    

    return NextResponse.json({success:true,msg:data});
    
  } catch (error) {
    return NextResponse.json({success:false,msg:error})
  }

}

// Function to delete the particular work of particular user
export async function DELETE(request,{params}){
  let {Works1,Works2}=params;

  try {
    let data=await workmodel.deleteOne({$and:[{userid:Works1},{_id:Works2}]})
    console.log(data);
    return NextResponse.json({success:true,msg:"Deleted successfully"});
  } catch (error) {
    return NextResponse.json({success:false,msg:error})
    
  }
}
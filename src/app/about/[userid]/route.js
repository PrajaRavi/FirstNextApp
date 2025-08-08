import { NextResponse } from "next/server";

export function GET(request,{params}){
  return NextResponse.json({data:params,msg:"testing the daynamic routing"});
  
}
import { NextRequest, NextResponse } from "next/server";

export function GET(request,{params}){

  const {userid1,userid}=params
  console.log(request);
  return NextResponse.json({data:"userid1 testing",userid,userid1});
  // return NextResponse.json(request)

}
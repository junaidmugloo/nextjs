import { NextResponse } from "next/server";

export const GET = async(req,{params})=>{

    const id= params.id;
    return NextResponse.json({
        "message":"updated"+id
    },{status:200})
    
}
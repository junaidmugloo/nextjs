import connectDB from "@/lib/connetDB";
import { NextResponse } from "next/server";
import News from "@/models/News";
export  async function GET(req) {
    try
    {
        await connectDB();
        const data= await News.find();
       

         return NextResponse.json(
            {
                data
            }
         );
        
    }
    catch(e)
    {
        return NextResponse.json(
            {
                "error":e
            }
        )
    }
  
  
}

export  async function POST(req) {
    const res= await req.json();
    try
    {
        await connectDB();
        const data= await News.create(res);


         return NextResponse.json(
            {
                "msg":data
            }
         );

    }
    catch(e)
    {
        return NextResponse.json(
            {
                "error":e
            }
        )
    }
   
  }
  
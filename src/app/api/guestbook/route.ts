import DBConnect from "@/lib/DBConnect";
import { getAuthSession } from "@/lib/auth";
import MessageModel from "@/models/Message.model";
import { MessageSchema } from "@/schema/Message.Schema";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST (req: NextRequest) {
    try {
        const session = await getAuthSession();
        const user = session?.user;
        if(!user){
            return new NextResponse(
              JSON.stringify({
                success: false,
                message: "Unauthorized Request",
              }),
              { status: 401 }
            );
        }
        await DBConnect();
        const body = await req.json();
        const {message,sender} = MessageSchema.parse(body);
        const newMessage = new MessageModel({
            sender: sender,
            message: message,
        })
        await newMessage.save();
        return new NextResponse(
          JSON.stringify({
            success: true,
            message: 'Message Sent',
          }),
          { status: 201 }
        );
        
    } catch (error) {
        if(error instanceof ZodError) {
            return new NextResponse(
              JSON.stringify({
                success: false,
                message: error.errors.join(','),
              }),
              { status: 422 }
            );
        }
        console.log('Something went wrong while posting message.')
        return new NextResponse(
          JSON.stringify({
            success: false,
            message: "Something went wrong",
          }),
          { status: 500 }
        );
    }
}

export async function GET(req:NextRequest) {
  try {
    await DBConnect();
    const messages = await MessageModel.find().populate('sender').sort({createdAt: -1});
    if(!messages) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Messages not found",
        }),
        { status: 404 }
      );
    }
    return new NextResponse(
      JSON.stringify({
        success: true,
        messages: messages ,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log('Something went wrong while fetching message ',error);
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: "Something went wrong",
      }),
      { status: 500 }
    );
  }
}
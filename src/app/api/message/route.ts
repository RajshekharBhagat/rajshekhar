import DBConnect from "@/lib/DBConnect";
import PersonalMessageModel from "@/models/PersonalMessage.model";
import { DeleteMessageSchema, PersonalMessageSchema } from "@/schema/Message.Schema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    try {
        await DBConnect();
        const body = await req.json();
        const parsedData = PersonalMessageSchema.safeParse(body);
        if(!parsedData.success) {
            return new NextResponse(
              JSON.stringify({
                success: false,
                message: parsedData.error.errors.join(','),
              }),
              { status: 422 }
            );
        }
        const {_id, name, email, message} = parsedData.data;
        const newMessage = new PersonalMessageModel({
            user: _id ? _id : null,
            name: name,
            email: email,
            message: message,
        })
        await newMessage.save();
        return new NextResponse(
          JSON.stringify({
            success: true,
            message: "Message send",
          }),
          { status: 201 }
        );
    } catch (error) {
       console.log('Something went wrong while ending message: ',error);
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
    const messages = await PersonalMessageModel.find().populate('user');
    return new NextResponse(
      JSON.stringify({
        success: true,
        data: messages,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log("Something went wrong while getting messages: ", error);
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: "Something went wrong while getting messages",
      }),
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    await DBConnect();
    const body = await req.json();
    const parsedData = DeleteMessageSchema.safeParse(body);
    if(!parsedData.success) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Invalid Input",
        }),
        { status: 422 }
      );
    }
    const {_id} = parsedData.data;
    await PersonalMessageModel.findByIdAndDelete(_id);
    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "Message deleted",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log('Something went wrong while deleting personal message: ',error);
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: "Something went wrong while deleting personal message",
      }),
      { status: 500 }
    );
  }
}
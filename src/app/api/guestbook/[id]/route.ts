import DBConnect from "@/lib/DBConnect";
import MessageModel from "@/models/Message.model";
import { messageDeleteValidator } from "@/validators/messageDeleteValidator";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

export async function DELETE(req: NextRequest,{params}:{params:Promise<{id: string}>}) {
    try {
        await DBConnect();
        const id = messageDeleteValidator.parse((await params).id);
        await MessageModel.findByIdAndDelete(id);
        return new NextResponse(
          JSON.stringify({
            success: true,
            message: "Message Deleted",
          }),
          { status: 200 }
        );
        
    } catch (error) {
        console.log('Something went wrong while deleting message: ',error);
        if(error instanceof ZodError) {
            return new NextResponse(
              JSON.stringify({
                success: false,
                message: error.errors.join(','),
              }),
              { status: 422 }
            );
        }
        return new NextResponse(
          JSON.stringify({
            success: false,
            message: "Something went wrong while deleting message",
          }),
          { status: 500 }
        );
    }
}
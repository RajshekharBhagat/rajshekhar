import { Document } from "mongodb";
import './User.model'
import mongoose, { Schema, Types } from "mongoose";
import { User } from "./User.model";

export interface Message extends Document {
    _id: Types.ObjectId;
    sender: Types.ObjectId | User;
    message: string;
    createdAt: Date;
};

const messageSchema = new Schema<Message>({
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true,'Sender Id is required'],
    },
    message : {
        type: String,
        required: [true, 'Message cannot be empty'],
    }
},{
    timestamps: true,
})

const MessageModel = mongoose.models.Message || mongoose.model('Message',messageSchema);
export default MessageModel;
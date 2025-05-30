import mongoose, { Document, Schema, Types } from "mongoose";
import './User.model'
import { User } from "./User.model";

export interface PersonalMessageType extends Document {
    _id: Types.ObjectId,
    user: Types.ObjectId | User,
    name: string,
    email: string,
    message: string,
}

const personalMessageSchema = new Schema<PersonalMessageType>({
   user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
   },
   name: {
    type: String,
    required: true,
   },
   email: {
    type: String,
    required: true,
   },
   message: {
    type: String,
    required: true,
   }
});


const PersonalMessageModel = mongoose.models.PersonalMessage || mongoose.model<PersonalMessageType>('PersonalMessage',personalMessageSchema);
export default PersonalMessageModel;
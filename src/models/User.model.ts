import mongoose, { Document, Model, Schema, Types } from "mongoose";
import { nanoid } from "nanoid";

export interface User extends Document {
  _id: Types.ObjectId;
  name: string;
  email: string;
  image:string;
  createdAt: Date;
}

const UserSchema: Schema<User> = new Schema ({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true,
  },
},{timestamps: true});

const UserModel = mongoose.models.User || mongoose.model('User', UserSchema);
export default UserModel as Model<User>
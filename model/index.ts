import mongoose from "mongoose";

// user schema in mongoose?
export interface IUser {
  id: mongoose.Schema.Types.ObjectId;
  username: string;
  email: string;
  password: string;
};

export const UserSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model<IUser>('User', UserSchema);
export default User;



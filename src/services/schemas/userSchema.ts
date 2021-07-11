import { Schema, model } from 'mongoose';
import { User } from '../../models';

export const UserSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true},
  phone: { type: String, required: true},
  avatar: String
});

export const UserModel = model<User>('User', UserSchema);
import { Schema, model } from 'mongoose';
import { IUser } from './user.types';

const userSchema: Schema = new Schema<IUser>({
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
  },
  apt: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
  },
  plan: {
    type: Object,
    required: true,
  }
}, {
  timestamps: true,
  versionKey: false,
})

const User = model<IUser>('User', userSchema);

export default User;
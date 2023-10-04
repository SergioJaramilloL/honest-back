import { Schema, model } from 'mongoose';

const userSchema = new Schema({
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

const User = model('User', userSchema);

export default User;
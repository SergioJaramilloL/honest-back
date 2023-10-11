import { Document } from "mongoose";
import { Plan } from "../plan/plan.types";

export interface IUser extends Document {
  firstname: string;
  lastname: string;
  address: string;
  apt: string;
  email: string;
  phone: string;
  plan: Plan;

  createdAt: Date;
  updatedAt: Date;
}

export interface UserWithoutDates extends Omit<IUser, 'createdAt' | 'updatedAt'> {}
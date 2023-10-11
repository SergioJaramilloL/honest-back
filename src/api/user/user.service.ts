import { Model } from 'mongoose';
import User from './user.model';
import { IUser, UserWithoutDates } from './user.types';

export const createUser = async (input: Model<UserWithoutDates> ): Promise<IUser> => {
  try{
    const user: IUser = await User.create(input);
    return user;
  } catch(error: any) {
    throw new Error(error);
  }
}

export const getUsers = async (): Promise<IUser[]> => {
  try {
    const users: IUser[] = await User.find();
    return users;
  } catch(error: any) {
    throw new Error(error);
  }
}
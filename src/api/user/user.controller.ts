import { Request, Response, NextFunction } from 'express';
import { IUser } from './user.types';

import { 
  createUser,
  getUsers
 } from './user.service';

export const createUserHandler =  async (
  req: Request, 
  res: Response, 
  next: NextFunction
): Promise<void> => {
  try {
    const user: IUser = await createUser(req.body);
    res.status(201).json({ message: 'user created', data: user  });
  } catch (error: any) {
    next(error);
  }
}

export const getUsersHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const users: IUser[] = await getUsers();
    res.status(200).json({ message: 'users found', data: users  });
  } catch (error: any) {
    next(error);
  }
}
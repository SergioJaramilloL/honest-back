import { Request, Response, NextFunction } from 'express';

import { 
  createUser,
  getUsers
 } from './user.service';

export const createUserHandler =  async (
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json({ message: 'user created', data: user  });
  } catch (error) {
    next(error);
  }
}

export const getUsersHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await getUsers();
    res.status(200).json({ message: 'users found', data: users  });
  } catch (error) {
    next(error);
  }
}
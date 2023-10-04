import User from './user.model';

export const createUser = async (input: any) => {
  try{
    const user = await User.create(input);
    return user;
  } catch(error: any) {
    throw new Error(error);
  }
}


export const getUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch(error: any) {
    throw new Error(error);
  }
}
import { NextFunction, Request, Response } from 'express';
import { verifyJWT } from '../utils/verifyToken';
import { User } from '../models';

export type UserJWT = Required<Pick<User, 'id' | 'name' | 'role'>>;

export const isAuth = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // try {
  const headerToken = req.header('Authorization');
  const authToken = headerToken?.split('Bearer ')?.[1];
  if (!authToken) {
    throw new Error('Unauthorized');
  }
  const user = await verifyJWT<UserJWT>(authToken);
  req.user = user;
  next();
};

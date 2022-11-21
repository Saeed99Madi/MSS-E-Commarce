import { UserJWT } from '../../middlewares/auth.middleware';

declare global {
  namespace Express {
    export interface Request {
      user?: UserJWT;
    }
  }
}

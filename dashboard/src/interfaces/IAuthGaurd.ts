import { Dispatch, SetStateAction } from 'react';
import { IUser } from './IUser';

export default interface IAuthGaurd {
  user?: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  signIn: (info: ISignIn) => Promise<void>;
  signOut: () => void;
}
export interface ISignIn {
  email: string;
  password: string;
}

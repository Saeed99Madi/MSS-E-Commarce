import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';
// import { useNavigate } from 'react-router-dom';

import IAuthGaurd, { ISignIn } from '../interfaces/IAuthGaurd';
import { IUser } from '../interfaces/IUser';

import ApiServices from '../servises/ApiService';
import JwtService from '../servises/JwtService';

const AuthGaurdContext = createContext({} as IAuthGaurd);
const ProvideAuthGaurd = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  // const navigate = useNavigate();
  const signIn = async ({ email, password }: ISignIn) => {
    try {
      const { data } = await ApiServices.post('/sign-in', {
        email,
        password,
      });
      setUser({
        id: data?.data?.id,
        name: data?.data?.name,
        role: data?.data?.role,
        email: data?.data?.email,
      });
      JwtService.setToken(data.data.token);
    } catch (err: any) {
      console.error(err);
    }
  };

  const signOut = useCallback(() => {
    JwtService.destroyToken();
    setUser(null);
  }, []);

  const authGaurdValues = useMemo(
    () => ({
      user,
      setUser,
      signOut,
      signIn,
    }),
    [signOut, user],
  );

  return (
    <AuthGaurdContext.Provider value={authGaurdValues}>
      {children}
    </AuthGaurdContext.Provider>
  );
};
export { ProvideAuthGaurd, AuthGaurdContext };

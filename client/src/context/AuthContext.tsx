import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import IAuthGaurd, { ISignIn } from '../interfaces/IAuthGaurd';
import { IUser } from '../interfaces/IUser';

import ApiServices from '../servises/ApiService';
import JwtService from '../servises/JwtService';

const AuthGaurdContext = createContext({} as IAuthGaurd);
const ProvideAuthGaurd = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const signIn = useCallback(async ({ email, password }: ISignIn) => {
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
  }, []);

  const signOut = useCallback(() => {
    JwtService.destroyToken();
    setUser(null);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        ApiServices.init();
        const { data } = await ApiServices.get('/user/me');

        setUser({
          name: data?.user?.name,
          role: data?.user?.role,
          email: data?.user?.email,
        });
      } catch (error: any) {
        console.error(error);
      }
    })();
  }, []);

  const authGaurdValues = useMemo(
    () => ({
      user,
      setUser,
      signOut,
      signIn,
    }),
    [signIn, signOut, user],
  );

  return (
    <AuthGaurdContext.Provider value={authGaurdValues}>
      {children}
    </AuthGaurdContext.Provider>
  );
};
export { ProvideAuthGaurd, AuthGaurdContext };

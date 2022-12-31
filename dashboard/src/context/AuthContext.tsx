import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import IAuthGaurd, { ISignIn } from '../interfaces/IAuthGaurd';
import { IUser } from '../interfaces/IUser';
import ApiServices from '../servises/ApiService';
import JwtService from '../servises/JwtService';

const AuthGaurdContext = createContext({} as IAuthGaurd);

const ProvideAuthGaurd = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();
  const signIn = useCallback(async ({ email, password }: ISignIn) => {
    try {
      const { data } = await ApiServices.post('/sign-in', {
        email,
        password,
      });
      JwtService.setToken(data.data.token);
      setUser({
        id: data?.data?.id,
        name: data?.data?.name,
        role: data?.data?.role,
        email: data?.data?.email,
      });
    } catch (err: any) {
      console.error(err);
    }
  }, []);

  const signOut = useCallback(() => {
    JwtService.destroyToken();
    setUser(null);
  }, []);

  const me = useCallback(async () => {
    try {
      const { data } = await ApiServices.get('/user/me');
      setUser({ ...data?.data });
    } catch (error: any) {
      console.error(error);
    }
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

  useEffect(() => {
    (async () => {
      const token = JwtService.getToken();
      if (token) {
        await me();
        navigate('/admin/dashboard');
      }
    })();
  }, []);

  return (
    <AuthGaurdContext.Provider value={authGaurdValues}>
      {children}
    </AuthGaurdContext.Provider>
  );
};

export { ProvideAuthGaurd, AuthGaurdContext };

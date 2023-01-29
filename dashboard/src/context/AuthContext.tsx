import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
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
      if (data.data.status === 200) {
        toast.success(`user login successfully`);
        // window.location.reload();
      }
    } catch (err: any) {
      toast.error(err);
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
      if (data.data.status === 200) {
        toast.success(`user alredy logined successfully`);
        // window.location.reload();
      }
    } catch (error: any) {
      toast.error(error);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthGaurdContext.Provider value={authGaurdValues}>
      {children}
    </AuthGaurdContext.Provider>
  );
};

export { ProvideAuthGaurd, AuthGaurdContext };

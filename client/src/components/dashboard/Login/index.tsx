import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Typography } from '@mui/material';

import { RowBox } from '../SettingsManage/components.styled';

import TextInput from './LoginTextInput';
import { DrawerHeader } from '../components.styled';

import { AuthGaurdContext } from '../../../context/AuthContext';
import ApiServices from '../../../servises/ApiService';

export const LoginDashboard = () => {
  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
  });

  const { signIn, setUser } = useContext(AuthGaurdContext);
  const navigate = useNavigate();

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignInData(prev => ({ ...prev, [name]: value }));
  };

  const handleSignIn = async () => {
    try {
      await signIn(signInData);
      navigate('/admin/dashboard', { replace: true });
    } catch (error: any) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };
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
        if (data) {
          navigate('/admin/dashboard', { replace: true });
        }
      } catch (error: any) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <Box
      sx={{
        textAlign: 'center',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        gap: '1rem',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        background: '#141417',
      }}
    >
      <DrawerHeader />
      <img
        src={`${process.env.REACT_APP_BASEE_URL}/settings/Logo.png`}
        alt="logo"
        style={{
          height: '3rem',
          width: '4rem',
          marginBottom: '1rem',
          alignSelf: 'center',
          borderRadius: '12px',
          boxSizing: 'border-box',
        }}
      />
      <Typography
        sx={{ color: '#FFFFFF', marginLeft: 'auto', ml: 2, flex: 1 }}
        variant="h4"
        component="div"
      >
        WELCOME MSS ADMIN !
      </Typography>
      <RowBox sx={{ justifyContent: 'center' }}>
        <TextInput
          handleUserChange={handleUserChange}
          name="email"
          user={signInData}
          label="Email"
          width="50%"
          isMultiline={false}
          rows={0}
          password={false}
        />
      </RowBox>
      <RowBox sx={{ justifyContent: 'center' }}>
        <TextInput
          handleUserChange={handleUserChange}
          name="password"
          user={signInData}
          label="Password"
          width="50%"
          isMultiline={false}
          rows={0}
          password
        />
      </RowBox>
      <DrawerHeader />
      <RowBox sx={{ justifyContent: 'center' }}>
        <Button
          sx={{
            borderRadius: '0.5rem',
            padding: '1rem 0',
            width: '50%',
            background: '#E52535',
          }}
          component="label"
          variant="contained"
          onClick={handleSignIn}
        >
          Login
        </Button>
      </RowBox>
    </Box>
  );
};

import { useState } from 'react';

import { Box, Button, Typography } from '@mui/material';

import { RowBox } from '../SettingsManage/components.styled';

import { IUser } from '../../../interfaces/IUser';
import ApiServices from '../../../servises/ApiService';
import TextInput from './LoginTextInput';
import { DrawerHeader } from '../components.styled';

ApiServices.init();
export const LoginDashboard = () => {
  const [user, setUser] = useState<IUser>({
    email: '',
    password: '',
  });

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveSettings = () => {
    ApiServices.put('sign-in', user);
  };

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
          user={user}
          label="Email"
          width="50%"
          isMultiline={false}
          rows={0}
        />
      </RowBox>
      <RowBox sx={{ justifyContent: 'center' }}>
        <TextInput
          handleUserChange={handleUserChange}
          name="password"
          user={user}
          label="Password"
          width="50%"
          isMultiline={false}
          rows={0}
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
          onClick={handleSaveSettings}
        >
          Login
        </Button>
      </RowBox>
    </Box>
  );
};

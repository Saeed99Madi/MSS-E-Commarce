import Box from '@mui/material/Box';
import { useContext } from 'react';
import { Main } from '../components.styled';

import { DashboardContext } from '../../../context/DashboardContext';
import ContactsList from './ContactsList';

export const Contacts = () => {
  const { openSideBar } = useContext(DashboardContext);
  return (
    <Box
      sx={{
        width: '100vw',
      }}
    >
      <Main
        open={openSideBar}
        sx={{
          background: '#141417',
          color: '#FFFFFF',
          height: '100vh',
          display: 'flex',
          overflow: 'hidden',
        }}
      >
        <ContactsList open={openSideBar} />
      </Main>
    </Box>
  );
};

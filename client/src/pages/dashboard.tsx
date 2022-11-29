// import * as React from 'react';
import * as React from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { NavBar } from '../components/dashboard/NavBar';
import { SideBar } from '../components/dashboard/SideBar';

type ContextType = { open: boolean };

const Dashboard = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <NavBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <SideBar
        theme={theme}
        open={open}
        handleDrawerClose={handleDrawerClose}
      />
      <Outlet context={{ open }} />
    </Box>
  );
};

export default Dashboard;
export function useDashboard() {
  return useOutletContext<ContextType>();
}

// import * as React from 'react';
// import * as React from 'react';
import { Outlet } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { NavBar } from '../components/dashboard/NavBar';
import { SideBar } from '../components/dashboard/SideBar';
import { ProvideDashboard } from '../context/DashboardContext';

const Dashboard = () => {
  const theme = useTheme();

  return (
    <ProvideDashboard>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <NavBar />
        <SideBar theme={theme} />
        <Outlet />
      </Box>
    </ProvideDashboard>
  );
};

export default Dashboard;

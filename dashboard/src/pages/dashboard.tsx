import { Navigate, Outlet } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { useContext } from 'react';

import { NavBar } from '../components/dashboard/NavBar';
import { SideBar } from '../components/dashboard/SideBar';
import { ProvideDashboard } from '../context/DashboardContext';
import { AuthGaurdContext } from '../context/AuthContext';

const Dashboard = () => {
  const theme = useTheme();
  const { user } = useContext(AuthGaurdContext);

  if (!user) return <Navigate to="/admin/login" />;

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

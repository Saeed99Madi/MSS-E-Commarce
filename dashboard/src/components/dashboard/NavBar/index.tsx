import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import { AppBar } from '../components.styled';
import { DashboardContext } from '../../../context/DashboardContext';

export const NavBar = () => {
  const { openSideBar, setOpenSideBar } = useContext(DashboardContext);
  const handleOpenside = () => {
    setOpenSideBar(true);
  };

  return (
    <AppBar position="fixed" open={openSideBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleOpenside}
          edge="start"
          sx={{ mr: 2, ...(openSideBar && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" noWrap component="div">
          Good Afternoon, Jamal
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

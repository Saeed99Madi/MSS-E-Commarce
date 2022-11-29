import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';

import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import StorefrontIcon from '@mui/icons-material/Storefront';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import ForumIcon from '@mui/icons-material/Forum';
import { Link } from 'react-router-dom';
import { DrawerHeader } from '../components.styled';

const drawerWidth = 240;

type Props = {
  open: boolean;
  handleDrawerClose: any;
  theme: any;
};
export const SideBar = (props: Props) => {
  const { theme, open, handleDrawerClose } = props;

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          background: '#141417',
          color: '#FFFFFF',
          boxShadow: 'inset -1px 0px 0px rgba(255, 255, 255, 0.1)',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <img
          src="/Logo.png"
          alt="logo"
          style={{ marginRight: 'auto', paddingLeft: '0.7rem' }}
        />
        <IconButton sx={{ color: '#FFFFFF' }} onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <Link style={{ color: '#FFFFFF', textDecoration: 'none' }} to="/">
          <ListItem key="home" disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: '#FFFFFF' }}>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          style={{ color: '#FFFFFF', textDecoration: 'none' }}
          to="/categories"
        >
          <ListItem key="categories" disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: '#FFFFFF' }}>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText primary="Categories" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          style={{ color: '#FFFFFF', textDecoration: 'none' }}
          to="/products"
        >
          <ListItem key="products" disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: '#FFFFFF' }}>
                <InventoryIcon />
              </ListItemIcon>
              <ListItemText primary="Products" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          style={{ color: '#FFFFFF', textDecoration: 'none' }}
          to="/contacts"
        >
          <ListItem key="contacts" disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: '#FFFFFF' }}>
                <ForumIcon />
              </ListItemIcon>
              <ListItemText primary="Contacts" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider />
    </Drawer>
  );
};

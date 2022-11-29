import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar } from '../components.styled';

type Props = {
  open: boolean;
  handleDrawerOpen: any;
};
export const NavBar = (props: Props) => {
  const { open, handleDrawerOpen } = props;

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: 'none' }) }}
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

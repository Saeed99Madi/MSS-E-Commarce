import Box from '@mui/material/Box';
import { useContext } from 'react';
import { DrawerHeader, Main } from '../components.styled';
import CategoriesList from './CategoriesList';
import { DashboardContext } from '../../../context/DashboardContext';
import AddCategories from './AddCategories';

export const Categories = () => {
  const { openSideBar } = useContext(DashboardContext);

  return (
    <Box
      sx={{
        display: 'flex',
        background: '#141417',
        color: '#FFFFFF',
      }}
      className="wrapper"
      style={{
        maxWidth: '100%',
      }}
    >
      <Main
        open={openSideBar}
        sx={{
          background: '#141417',
          color: '#FFFFFF',
          height: '100vh',
        }}
      >
        <DrawerHeader />
        <CategoriesList open={openSideBar} />
      </Main>
      <AddCategories />
    </Box>
  );
};

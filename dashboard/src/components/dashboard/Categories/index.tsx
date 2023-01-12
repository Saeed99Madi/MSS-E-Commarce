import Box from '@mui/material/Box';
import { useContext } from 'react';
import { Main } from '../components.styled';
import CategoriesList from './CategoriesList';
import { DashboardContext } from '../../../context/DashboardContext';
import AddCategories from './AddCategories';

export const Categories = () => {
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
        <CategoriesList open={openSideBar} />
        <AddCategories />
      </Main>
    </Box>
  );
};

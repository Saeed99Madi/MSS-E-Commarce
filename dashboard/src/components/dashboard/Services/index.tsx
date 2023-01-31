import { useContext, useState } from 'react';

import { Box } from '@mui/material';
import { ServiceCard } from './Card';
import { DrawerHeader, Main } from '../components.styled';

import { Actions } from './Actions';

import { DashboardContext } from '../../../context/DashboardContext';

import ApiServices from '../../../servises/ApiService';
import AddService from './AddService';
import EditService from './EditService';

ApiServices.init();
export const ServicesList = () => {
  const [openAddProduct, setOpenAddProduct] = useState(false);
  const { openSideBar, services } = useContext(DashboardContext);

  return (
    <Main open={openSideBar} sx={{ background: '#141417' }}>
      <DrawerHeader />
      <Actions />
      <EditService />
      <Box
        sx={{
          textAlign: 'center',
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '1rem',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <AddService open={openAddProduct} setOpen={setOpenAddProduct} />

        {services ? (
          services.map(service => {
            return <ServiceCard key={service.id} service={service} />;
          })
        ) : (
          <h3>No services</h3>
        )}
      </Box>
    </Main>
  );
};

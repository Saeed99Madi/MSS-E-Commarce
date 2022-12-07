import { useContext, useEffect, useState } from 'react';

import { Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { ProductCard } from './Card';
import useProducts from '../../../hooks/getProducts';
import { DrawerHeader, Main } from '../components.styled';

import { Actions } from '../Search';
import { IProduct } from '../../../interfaces/IProduct';

import { DashboardContext } from '../../../context/DashboardContext';

export const ProductsList = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const { openSideBar } = useContext(DashboardContext);

  const productsfetch = useProducts();
  useEffect(() => {
    (async () => {
      setProducts(await productsfetch());
    })();
  }, []);

  return (
    <Main open={openSideBar} sx={{ background: '#141417' }}>
      <DrawerHeader />
      <Actions />
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
        <Box
          sx={{
            width: '15rem',
            height: 'auto',
            background:
              'linear-gradient(125.86deg, rgba(255, 255, 255, 0.18) -267.85%, rgba(255, 255, 255, 0) 138.29%)',
            backdropFilter: 'blur(5.73932px)',
            borderRadius: '12px',
            color: '#FFFFFF',
          }}
        >
          <AddIcon />
          <Typography>Add Product</Typography>
        </Box>

        {products ? (
          products.map(product => {
            return <ProductCard key={product.id} product={product} />;
          })
        ) : (
          <h1>seeded</h1>
        )}
      </Box>
    </Main>
  );
};

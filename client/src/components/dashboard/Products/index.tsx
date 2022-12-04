// import * as React from 'react';

import { Box, Typography } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { ProductCard } from './Card';
import useProducts from '../../../hooks/getProducts';
import { IProduct } from '../../../interfaces/IProduct';
import { DrawerHeader, Main } from '../components.styled';
import { useDashboard } from '../../../pages/dashboard';

// type Props = {
//   // eslint-disable-next-line react/require-default-props, react/no-unused-prop-types
//   products: Array<Product>;
// };

export const ProductsList = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [checkedProducts, setIsCheckedProducts] = useState<Array<number>>([]);
  const productsfetch = useProducts();
  const { open } = useDashboard();
  useEffect(() => {
    (async () => {
      setProducts(await productsfetch());
    })();
  }, []);
  return (
    <Main open={open} sx={{ background: '#141417' }}>
      <DrawerHeader />
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
            return (
              <ProductCard
                key={product.id}
                product={product}
                setIsCheckedProducts={setIsCheckedProducts}
              />
            );
          })
        ) : (
          <h1>seeded</h1>
        )}
      </Box>
    </Main>
  );
};

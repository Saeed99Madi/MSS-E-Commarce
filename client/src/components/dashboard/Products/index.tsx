import { useContext, useEffect, useState } from 'react';

import { Box } from '@mui/material';
import { ProductCard } from './Card';
import useProducts from '../../../hooks/getProducts';
import { DrawerHeader, Main } from '../components.styled';

import { Actions } from '../Search';
import { IProduct } from '../../../interfaces/IProduct';

import { DashboardContext } from '../../../context/DashboardContext';
import AddProduct from './AddProduct';

export const ProductsList = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [openAddProduct, setOpenAddProduct] = useState(false);
  const { openSideBar } = useContext(DashboardContext);

  const productsfetch = useProducts();
  useEffect(() => {
    (async () => {
      setProducts(await productsfetch());
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          justifyContent: 'center',
        }}
      >
        <AddProduct open={openAddProduct} setOpen={setOpenAddProduct} />

        {products ? (
          products.map(product => {
            return <ProductCard key={product.id} product={product} />;
          })
        ) : (
          <h3>No Products</h3>
        )}
      </Box>
    </Main>
  );
};

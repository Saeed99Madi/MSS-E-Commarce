import { useContext, useEffect, useState } from 'react';

import { Box } from '@mui/material';
import { ProductCard } from './Card';
// import useProducts from '../../../hooks/getProducts';
import { DrawerHeader, Main } from '../components.styled';

import { Actions } from '../Actions';
import { IProduct } from '../../../interfaces/IProduct';

import { DashboardContext } from '../../../context/DashboardContext';
import AddProduct from './AddProduct';
import ApiServices from '../../../servises/ApiService';

ApiServices.init();
export const ProductsList = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [openAddProduct, setOpenAddProduct] = useState(false);
  const { openSideBar, productSearch, searchFilterCategory } =
    useContext(DashboardContext);

  // const productsfetch = useProducts();
  useEffect(() => {
    (async () => {
      if (productSearch && searchFilterCategory) {
        const { data } = await ApiServices.get(
          `products/${productSearch}/${searchFilterCategory}`,
        );
        setProducts(data.data);
      } else if (searchFilterCategory && !productSearch) {
        const { data } = await ApiServices.get(
          `/category/products/${searchFilterCategory}`,
        );
        setProducts(data.data);
      } else if (!searchFilterCategory && productSearch) {
        const { data } = await ApiServices.get(
          `products/${productSearch}/${searchFilterCategory}`,
        );
        setProducts(data.data);
      } else {
        const { data } = await ApiServices.get(`products`);
        setProducts(data.data);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productSearch, searchFilterCategory]);

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

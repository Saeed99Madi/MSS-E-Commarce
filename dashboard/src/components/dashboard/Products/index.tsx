import { useContext, useState } from 'react';

import { ProductCard } from './Card';
// import useProducts from '../../../hooks/getProducts';
import { DrawerHeader, Main, ProductsWrapper } from '../components.styled';

import { Actions } from '../Actions';

import { DashboardContext } from '../../../context/DashboardContext';
import AddProduct from './AddProduct';
import ApiServices from '../../../servises/ApiService';
import EditProduct from './EditProduct';

ApiServices.init();
export const ProductsList = () => {
  const [openAddProduct, setOpenAddProduct] = useState(false);
  // const [] = useState(false);
  const { openEditProduct, setOpenEditProduct, openSideBar, products } =
    useContext(DashboardContext);

  return (
    <Main
      open={openSideBar}
      sx={{
        background: '#141417',
      }}
    >
      <DrawerHeader />
      <Actions />
      <ProductsWrapper>
        <AddProduct open={openAddProduct} setOpen={setOpenAddProduct} />
        <EditProduct open={openEditProduct} setOpen={setOpenEditProduct} />
        {products ? (
          products.map(product => {
            return <ProductCard key={product.id} product={product} />;
          })
        ) : (
          <h3>No Products</h3>
        )}
      </ProductsWrapper>
    </Main>
  );
};

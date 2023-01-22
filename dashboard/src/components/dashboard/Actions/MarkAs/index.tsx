/* eslint-disable no-param-reassign */
import { useContext, useState } from 'react';

import { Box, MenuItem } from '@mui/material';
import { arrowIcon } from '../../components.styled';
import { SelectCats } from '../../Products/AddProduct/components.styled';
import ApiServices from '../../../../servises/ApiService';
import { DashboardContext } from '../../../../context/DashboardContext';

const actions = [
  { id: 1, name: 'Puplish' },
  { id: 2, name: 'Un Puplish' },
  { id: 3, name: 'Delete' },
  { id: 4, name: 'Select All' },
  { id: 5, name: 'un Select All' },
];
ApiServices.init();

export const MarkAs = () => {
  const { checkedProducts, setIsCheckedProducts, products, setProducts } =
    useContext(DashboardContext);
  const [markas, setmarkAs] = useState<Array<string>>([]);
  const handleMarkAs = (e: any) => {
    const { value } = e.target;
    setmarkAs(e.target.value);
    switch (value) {
      case '1':
        // ApiServices.put('products/publish', { products: [...checkedProducts] });
        (async () => {
          await ApiServices.put('products/publish', {
            products: [...checkedProducts],
          });
          const updatedProducts = products.map(element => {
            if (checkedProducts.includes(element.id || 0)) {
              element.active = true;
              return element;
            }
            return element;
          });
          setProducts(updatedProducts);
          setProducts(
            products.map(ele => {
              // eslint-disable-next-line no-param-reassign
              ele.checked = false;
              return { ...ele };
            }),
          );
          setIsCheckedProducts([]);
        })();
        break;
      case '2':
        (async () => {
          await ApiServices.put('products/unpublish', {
            products: [...checkedProducts],
          });
          const updatedProducts = products.map(element => {
            if (checkedProducts.includes(element.id || 0)) {
              element.active = false;
              return element;
            }
            return element;
          });
          setProducts(updatedProducts);
          setProducts(
            products.map(ele => {
              // eslint-disable-next-line no-param-reassign
              ele.checked = false;
              return { ...ele };
            }),
          );
          setIsCheckedProducts([]);
        })();

        break;
      case '3':
        (async () => {
          await ApiServices.destroy(`products/delete/${[...checkedProducts]}`);
          const updatedProducts = products.filter(
            element => !checkedProducts.includes(element.id || 0),
          );
          setProducts(updatedProducts);
          setProducts(
            products.map(ele => {
              // eslint-disable-next-line no-param-reassign
              ele.checked = false;
              return { ...ele };
            }),
          );
          setIsCheckedProducts([]);
        })();
        break;
      case '4':
        // eslint-disable-next-line no-case-declarations
        const newproduct = products.map(ele => {
          // eslint-disable-next-line no-param-reassign
          ele.checked = true;
          return { ...ele };
        });
        setProducts([...newproduct]);
        setIsCheckedProducts(products.map(ele => ele.id ?? 0));

        break;
      case '5':
        setProducts(
          products.map(ele => {
            // eslint-disable-next-line no-param-reassign
            ele.checked = false;
            return { ...ele };
          }),
        );
        setIsCheckedProducts([]);

        break;
      default:
        throw new Error('error in Mark As actions');
    }
  };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '2rem 12.9rem 2rem 0',
        width: '10%',
        color: '#FFFFFF',
      }}
    >
      <SelectCats
        sx={{ width: '100%' }}
        IconComponent={arrowIcon}
        name="acrion"
        value={markas}
        onChange={handleMarkAs}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value="">
          <em>Mark As</em>
        </MenuItem>
        {actions.map(ele => {
          return (
            <MenuItem key={ele.id} value={`${ele.id}`}>
              {ele.name}
            </MenuItem>
          );
        })}
      </SelectCats>
    </Box>
  );
};

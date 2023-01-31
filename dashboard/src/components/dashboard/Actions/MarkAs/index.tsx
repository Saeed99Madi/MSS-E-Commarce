/* eslint-disable no-param-reassign */
import { useContext, useState } from 'react';

import { Box, MenuItem } from '@mui/material';
import { toast } from 'react-toastify';
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
  const {
    checkedProducts,
    setIsCheckedProducts,
    products,
    setProducts,
    setOpenConfermAlert,
    setConfermHandler,
    setConfermMessage,
  } = useContext(DashboardContext);
  const [markas, setmarkAs] = useState<string>('');
  const handleMarkAs = (e: any) => {
    const { value } = e.target;
    setmarkAs(e.target.value);
    switch (value) {
      case '1':
        // ApiServices.put('products/publish', { products: [...checkedProducts] });
        setConfermMessage('Are You Sure To puplish Product/s ?');
        setOpenConfermAlert(true);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        setConfermHandler(prev => {
          return async () => {
            const { data } = await ApiServices.put('products/publish', {
              products: [...checkedProducts],
            });
            if (data.status === 200) {
              toast.success('Product/s have been published !');
            } else {
              toast.error(`${data.msg} Product/s have been published !`);
            }
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
            setmarkAs('');
            setOpenConfermAlert(false);
          };
        });

        break;
      case '2':
        setConfermMessage('Are You Sure To Unpuplish Product/s ?');
        setOpenConfermAlert(true);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        setConfermHandler(prev => {
          return async () => {
            const { data } = await ApiServices.put('products/unpublish', {
              products: [...checkedProducts],
            });
            if (data.status === 200) {
              toast.success('Product/s have been unpublished !');
            } else {
              toast.error(`${data.msg} Product/s have been unpublished !`);
            }
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
            setmarkAs('');
            setOpenConfermAlert(false);
          };
        });
        break;
      case '3':
        setConfermMessage('Are You Sure To Delete Product/s ?');
        setOpenConfermAlert(true);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        setConfermHandler(prev => {
          return async () => {
            const { data } = await ApiServices.destroy(
              `products/delete/${[...checkedProducts]}`,
            );
            if (data.status === 200) {
              toast.success('Product/s have been deleted !');
            } else {
              toast.error(`${data.msg} Product/s have been deleted !`);
            }

            const updatedProducts = products.filter(
              element => !checkedProducts.includes(element.id || 0),
            );
            setProducts(updatedProducts);
            setProducts(
              updatedProducts.map(ele => {
                // eslint-disable-next-line no-param-reassign
                ele.checked = false;
                return { ...ele };
              }),
            );
            setIsCheckedProducts([]);
            setmarkAs('');
            setOpenConfermAlert(false);
          };
        });

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

        toast.success('All Products have been Selected !');

        setmarkAs('');
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
        toast.success('All Products have been UnSelected !');
        setmarkAs('');
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

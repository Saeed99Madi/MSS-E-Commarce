import { useContext, useState } from 'react';

import { Box, MenuItem } from '@mui/material';
import { arrowIcon } from '../../components.styled';
import { SelectCats } from '../../Products/AddProduct/components.styled';
import ApiServices from '../../../../servises/ApiService';
import { DashboardContext } from '../../../../context/DashboardContext';
import { IProduct } from '../../../../interfaces/IProduct';
// type Props = {
// };
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
        ApiServices.put('products/publish', [...checkedProducts]);
        break;
      case '2':
        ApiServices.put('products/unpublish', [...checkedProducts]);
        break;
      case '3':
        ApiServices.destroy(`products/delete/${[...checkedProducts]}`);
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
        console.log(checkedProducts);

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

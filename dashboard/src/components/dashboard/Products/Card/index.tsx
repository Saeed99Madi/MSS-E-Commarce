import { ChangeEvent, useContext, useEffect, useState } from 'react';

import { Box, Typography } from '@mui/material';

import { DashboardContext } from '../../../../context/DashboardContext';
import { IProduct } from '../../../../interfaces/IProduct';
import ApiServices from '../../../../servises/ApiService';

ApiServices.init();
type Props = {
  product: IProduct;
};

export const ProductCard = (props: Props) => {
  const { product } = props;
  // console.log('product');

  const [isChecked, setIsChecked] = useState(false);
  const [categoryName, setCategoryName] = useState('');

  const { setIsCheckedProducts } = useContext(DashboardContext);
  useEffect(() => {
    (async () => {
      const { data } = await ApiServices.get(
        `categories/show/${product.CategoryId}`,
      );
      setCategoryName(data.data.title);
    })();
    if (product.checked) {
      setIsChecked(product.checked);
    } else {
      setIsChecked(false);
    }
  }, [product]);
  const handleIsChecked = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;
    const productId = +value;
    if (checked) {
      setIsCheckedProducts((prev: Array<number>) => {
        return [...prev, productId];
      });
    } else if (!checked) {
      setIsCheckedProducts((prev: Array<number>) => {
        return prev.filter(ele => ele !== productId);
      });
    }
    setIsChecked(checked);
  };

  return (
    <Box
      sx={{
        width: '15rem',
        height: 'auto',
        background:
          'linear-gradient(125.86deg, rgba(255, 255, 255, 0.18) -267.85%, rgba(255, 255, 255, 0) 138.29%)',
        backdropFilter: 'blur(5.73932px)',
        borderRadius: '12px',
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingTop: '8px',
        }}
      >
        <Box
          sx={{
            width: '13rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            margin: '8px 0',
            paddingLeft: '1rem',
          }}
        >
          <Typography sx={{ color: '#FFFFFF', margin: '0' }} paragraph>
            {product.title}
          </Typography>
          <Typography
            sx={{ color: '#F6CD06', fontSize: '12px', margin: '0' }}
            paragraph
          >
            {categoryName}
          </Typography>
        </Box>
        <img
          style={{
            height: '10rem',
            width: '13rem',
            marginBottom: '1rem',
            alignSelf: 'center',
            borderRadius: '12px',
            boxSizing: 'border-box',
          }}
          src={`${process.env.REACT_APP_BASEE_URL}/products/${product.cover}`}
          alt="Renewable energy"
          loading="lazy"
        />
        <input
          style={{
            position: 'absolute',
            top: '8px',
            right: '1rem',
            padding: '0.5rem 1rem',
            borderRadius: '50',
          }}
          value={product.id}
          type="checkbox"
          onChange={handleIsChecked}
          checked={isChecked}
        />
      </Box>
    </Box>
  );
};

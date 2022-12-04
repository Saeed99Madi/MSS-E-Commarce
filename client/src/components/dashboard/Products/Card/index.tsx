// import * as React from 'react';

import { Box, Typography } from '@mui/material';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { IProduct } from '../../../../interfaces/IProduct';

type Props = {
  product: IProduct;
  setIsCheckedProducts: Dispatch<SetStateAction<Array<number>>>;
};

export const ProductCard = (props: Props) => {
  const { product, setIsCheckedProducts } = props;
  const [isChecked, setIsChecked] = useState(false);
  const handleIsChecked = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;
    const productId = +value;
    if (checked) {
      setIsCheckedProducts(prev => {
        console.log(prev);

        return [...prev, productId];
      });
    } else if (!checked) {
      setIsCheckedProducts(prev => {
        console.log(prev);

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
            Category name
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
          src="https://images.unsplash.com/photo-1594818379496-da1e345b0ded?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
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

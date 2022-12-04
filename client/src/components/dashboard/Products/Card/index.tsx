// import * as React from 'react';

import { Box, Typography } from '@mui/material';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

type Product = {
  id: number;
  name: string;
  category: string;
  image: string;
};
type Props = {
  product: Product;
  setIsCheckedProducts: Dispatch<SetStateAction<Array<number>>>;
};

export const ProductCard = (props: Props) => {
  const { product, setIsCheckedProducts } = props;
  const [isChecked, setIsChecked] = useState(false);
  const handleIsChecked = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;
    const productId = +value;
    if (checked) {
      setIsCheckedProducts(prev => [...prev, productId]);
    } else if (!checked) {
      setIsCheckedProducts(prev => {
        return prev.filter(ele => ele !== productId);
      });
    }
    setIsChecked(checked);
  };

  return (
    <Box sx={{ width: '10rem', height: '10rem' }} key={product.id}>
      <Box
        sx={{
          textAlign: 'center',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <Typography paragraph>ProductName</Typography>
          <Typography paragraph>Category name</Typography>
        </Box>
        <img
          style={{ height: '8rem', width: '8rem' }}
          src="https://images.unsplash.com/photo-1594818379496-da1e345b0ded?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          alt="Renewable energy"
          loading="lazy"
        />
      </Box>
      <input
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          padding: '0.5rem 1rem',
        }}
        value={product.id}
        type="checkbox"
        onChange={handleIsChecked}
        checked={isChecked}
      />
    </Box>
  );
};

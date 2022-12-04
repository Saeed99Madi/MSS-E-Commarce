// import * as React from 'react';

import { Box, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { ProductCard } from './Card';

type Product = {
  id: number;
  name: string;
  category: string;
  image: string;
};
type Props = {
  // eslint-disable-next-line react/require-default-props, react/no-unused-prop-types
  products: Array<Product>;
};

export const ProductsList = (props: Props) => {
  const { products } = props;
  const [checkedProducts, setIsCheckedProducts] = useState<Array<number>>([]);

  return (
    <Box
      sx={{
        textAlign: 'center',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {products.map(product => {
        return (
          <ProductCard
            product={product}
            setIsCheckedProducts={setIsCheckedProducts}
          />
        );
      })}
    </Box>
  );
};

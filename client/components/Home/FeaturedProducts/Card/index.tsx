import { Typography } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Axios, BASE_UEL } from '../../../../config';
import { IProduct } from '../../../../interfaces/IProduct';
import { ImageCard } from '../components.styled';

const Card = ({ product }: { product: IProduct }) => {
  const [categoryName, setCategoryName] = useState('');
  useEffect(() => {
    (async () => {
      const { data } = await Axios.get(`categories/show/${product.CategoryId}`);
      setCategoryName(data.data.title);
    })();
  }, [product]);
  return (
    <ImageCard key={product.id}>
      <div className="overview">
        <Typography
          sx={{
            fontSize: '14px',
            margin: '0',
            paddingLeft: '0.3rem',
            '& > a': { textDecoration: 'none', color: '#f6b400' },
          }}
          paragraph
        >
          <Link href={`product/${product.id}`}>{product.title}</Link>
        </Typography>
        <Typography
          sx={{ fontSize: '8px', margin: '0', paddingLeft: '0.3rem' }}
          paragraph
        >
          {categoryName}
        </Typography>
      </div>
      <img
        src={`${BASE_UEL}/products/${product.cover}?w=248&fit=crop&auto=format`}
        srcSet={`${BASE_UEL}/products/${product.cover}?w=248&fit=crop&auto=format&dpr=2 2x`}
        // src={`${product.img}?w=248&fit=crop&auto=format`}
        // srcSet={`${product.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={product.title}
        loading="lazy"
      />
    </ImageCard>
  );
};

export default Card;

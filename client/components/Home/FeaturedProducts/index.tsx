import { Box, ImageList, ImageListItem, Typography } from '@mui/material';
import { ImageCard, ProductsListContainer } from './components.styled';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
];

const FeaturedProducts = () => {
  return (
    <ProductsListContainer>
      <h2 style={{ margin: '0' }}>Featured Products</h2>
      <p style={{ margin: '0' }}>
        Top bought Solar Products sales in Mooie Sterk Solar
      </p>
      <Box
        sx={{
          overflow: 'hidden',
          maxWidth: '80%',
          height: 'auto',
          marginBottom: '2rem',
        }}
      >
        <ImageList
          sx={{ padding: '2rem 2rem 2rem 2rem' }}
          variant="masonry"
          cols={4}
          gap={10}
        >
          {itemData.map(item => (
            <ImageCard key={item.img}>
              <div className="overview">
                <Typography
                  sx={{ color: '#f6b400', fontSize: '14px', margin: '0' }}
                  paragraph
                >
                  Product Name
                </Typography>
                <Typography sx={{ fontSize: '8px', margin: '0' }} paragraph>
                  Category Name
                </Typography>
              </div>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageCard>
          ))}
        </ImageList>
      </Box>
    </ProductsListContainer>
  );
};

export default FeaturedProducts;

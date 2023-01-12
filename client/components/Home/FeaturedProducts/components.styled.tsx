import { ImageListItem, styled } from '@mui/material';

const ProductsListContainer = styled('section')({
  height: 'auto',
  width: '100%',
  background: '#FFFFFF',
  display: 'flex',
  gap: '1rem',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '5rem',
});
const ImageCard = styled(ImageListItem)({
  position: 'relative',
  overflow: 'hidden',

  background: '#FFFFFF',
  transition: 'all .5s ease-in-out',
  '.overview': {
    position: 'absolute',
    paddingBottom: '0.2rem',

    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: '#edeee6',
    transform: 'translateY(101%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '',
    overflow: 'hidden',
    transition: 'transform 0.4s ease-in',
  },
  '&:hover': {
    '& .overview': {
      transform: 'translateY(3%)',
    },
    transform: 'scale(1.04)',
  },
});

export { ProductsListContainer, ImageCard };

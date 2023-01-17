import { Button, styled } from '@mui/material';

const TopCategoriesContainer = styled('section')({
  display: 'flex',
  paddingTop: '2rem',
  justifyContent: 'space-around',
  flexDirection: 'column',
  gap: '1rem',
});
const CategoriesList = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  gap: '1rem',
  flexWrap: 'wrap',

  //   height: 'auto',
});
const RedCard = styled('div')({
  borderRadius: '15px',
  background: 'linear-gradient(90deg, #FF5362 0%, #E52535 100%)',
  display: 'flex',
  flexDirection: 'column',
  width: '22rem',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: '2rem',
  gap: '2rem',
  height: '30rem',
});
const YellowCard = styled('div')({
  borderRadius: '15px',
  display: 'flex',
  width: '22rem',
  justifyContent: 'space-between',
  paddingTop: '2rem',
  background: 'linear-gradient(90deg, #F6CD06 0%, #FFB900 100%)',
  flexDirection: 'column-reverse',
  alignItems: 'center',
  gap: '2rem',
  height: '30rem',
});
const BlackCard = styled('div')({
  paddingTop: '2rem',
  borderRadius: '15px',
  display: 'flex',
  width: '22rem',

  background: 'linear-gradient(90.9deg, #1F1F22 0.72%, #141417 99.18%)',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem',
  height: '30rem',
});
const BlackCardInfo = styled('div')({
  display: 'flex',
  flexDirection: 'row-reverse',
  width: '100%',
  height: '79%',
  gap: '2rem',
});
const BlackCardOverview = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: '40%',
});
const ImageWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '80%',
  height: '60%',
  background: 'linear-gradient(to right, red, #ffffffb8)',
  textAlign: 'center',
});
const CategoryCardImage = styled('img')({
  width: '98.8%',
  height: '99.2%',
});
const WhiteButton = styled(Button)({
  textTransform: 'none',
  color: '#000000',
  width: '80%',
  background: '#FFFFFF',
  '&:hover': { background: '#c7c4c4' },
});
const BlackButton = styled(Button)({
  textTransform: 'none',
  color: '#FFFFFF',
  width: '80%',
  background: '#1F1F22',
  '&:hover': { background: '#141417' },
});
const GrayButton = styled(Button)({
  textTransform: 'none',
  color: '#F6CD06',
  width: '80%',
  background:
    'linear-gradient(125.86deg, rgba(255, 255, 255, 0.18) -267.85%, rgba(255, 255, 255, 0) 138.29%)',
  '&:hover': { background: '#141417' },
});

export {
  BlackCard,
  BlackCardOverview,
  YellowCard,
  TopCategoriesContainer,
  CategoriesList,
  RedCard,
  ImageWrapper,
  CategoryCardImage,
  WhiteButton,
  BlackButton,
  BlackCardInfo,
  GrayButton,
};

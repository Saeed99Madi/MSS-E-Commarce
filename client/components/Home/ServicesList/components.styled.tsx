import { styled } from '@mui/material';

const ServicesContainer = styled('section')({
  padding: '3rem 1rem',
  marginTop: '1.5rem',
  display: 'flex',
  background: 'linear-gradient(90.9deg, #1F1F22 0.72%, #141417 99.18%)',
  justifyContent: 'center',
  alignItems: 'center',
  transition: '1s ease',
  gap: '3rem',
  '@media screen and (max-width: 850px)': {
    flexWrap: 'wrap',
  },
});
const ServiceCard = styled('div')({
  display: 'flex',
  width: '30rem',
  gap: '1.5rem',
});
const IconContainer = styled('div')({
  height: '10%',
  textAlign: 'center',
  padding: '2rem',
  borderRadius: '70% 50% 40% 50%',
  background:
    'linear-gradient(125.86deg, rgba(255, 255, 255, 0.18) -267.85%, rgba(255, 255, 255, 0) 138.29%)',
  '@media screen and (max-width: 850px)': {
    padding: '1rem',
  },
});
const BoxColumn = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  '@media screen and (max-width: 850px)': {
    '> p': {
      fontSize: '1.1rem',
    },
  },
});

export { ServicesContainer, ServiceCard, IconContainer, BoxColumn };

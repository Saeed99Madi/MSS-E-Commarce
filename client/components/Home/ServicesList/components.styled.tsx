import { styled } from '@mui/material';

const ServicesContainer = styled('section')({
  background: 'linear-gradient(90.9deg, #1F1F22 0.72%, #141417 99.18%)',
  display: 'flex',
  justifyContent: 'space-around',
  height: '50%',
  alignItems: 'center',
  padding: '3rem 6rem',
  transition: '0.5s ease',
  '@media screen and (max-width: 850px)': {
    flexDirection: 'column',
    gap: '2rem',
    padding: '3rem 1rem',
  },
});
const ServiceCard = styled('div')({
  display: 'flex',
  gap: '1rem',
  width: '40%',
  transition: '0.5s ease',
  '@media screen and (max-width: 850px)': {
    width: '100%',
  },
});
const IconContainer = styled('div')({
  height: '10%',
  textAlign: 'center',
  padding: '0.8rem',
  borderRadius: '70% 50% 40% 50%',
  background:
    'linear-gradient(125.86deg, rgba(255, 255, 255, 0.18) -267.85%, rgba(255, 255, 255, 0) 138.29%)',
});
const ServiceInfo = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

export { ServicesContainer, ServiceCard, IconContainer, ServiceInfo };

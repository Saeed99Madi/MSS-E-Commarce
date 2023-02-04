import { Button, styled, Typography } from '@mui/material';

const ContactContainer = styled('section')({
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
const ContactCard = styled('div')({
  display: 'flex',
  width: '30rem',
  gap: '1.5rem',
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
const ImageIcon = styled('img')({
  '@media screen and (max-width: 850px)': {
    width: '1.7rem',
  },
});
const IconWrapper = styled('div')({
  height: '10%',
  textAlign: 'center',
  padding: '2rem',
  borderRadius: '70% 50% 40% 50%',
  background:
    'linear-gradient(125.86deg, rgba(255, 255, 255, 0.18) -267.85%, rgba(255, 255, 255, 0) 138.29%)',
  '@media screen and (max-width: 850px)': {
    padding: '1rem',
  },
  '@keyframes spin': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
  animation: 'spin infinite 20s linear',
});
const ReflectedIconWrapper = styled('div')({
  '@keyframes spin': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
  animation: 'spin infinite 20s linear',
  height: '10%',
  textAlign: 'center',
  padding: '2rem',
  borderRadius: '40% 50% 70% 50%',
  background:
    'linear-gradient(125.86deg, rgba(255, 255, 255, 0.18) -267.85%, rgba(255, 255, 255, 0) 138.29%)',
  '@media screen and (max-width: 850px)': {
    padding: '1rem',
  },
});
const GrediantPargraph = styled(Typography)({
  fontSize: '2.5rem',
  background: 'linear-gradient(90deg, #EA4335 0%, #2E7DFF 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});
const GrediantGreenPargraph = styled(Typography)({
  fontSize: '2.5rem',
  background: 'linear-gradient(90deg, #25D366 0%, #128C7E 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});
const CustomButton = styled(Button)({
  textTransform: 'none',
  borderRadius: '50px',
  width: '50%',
  color: '#FFFFFF',
});

export {
  ContactContainer,
  ImageIcon,
  ContactCard,
  BoxColumn,
  IconWrapper,
  GrediantPargraph,
  GrediantGreenPargraph,
  ReflectedIconWrapper,
  CustomButton,
};

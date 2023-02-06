import { Button, styled, Typography } from '@mui/material';
import { device } from '../../utils/devices';

const ContactContainer = styled('section')({
  padding: '3rem 1rem',
  marginTop: '1.5rem',
  display: 'flex',
  background: 'linear-gradient(90.9deg, #1F1F22 0.72%, #141417 99.18%)',
  justifyContent: 'center',
  alignItems: 'center',
  transition: '1s ease',

  '@media screen and (max-width: 850px)': {
    flexWrap: 'wrap',
  },
});
const ContactCard = styled('div')({
  position: 'relative',
  display: 'flex',
  width: '50%',
  gap: '1.5rem',
  alignItems: 'center',
  justifyContent: 'center',
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
  height: '50px',
  width: '46px',
  marginBottom: '1rem',
  textAlign: 'center',
  padding: '1.5rem',
  borderRadius: '70% 50% 40% 50%',
  background: 'linear-gradient(90deg, #EA4335 0%, #2E7DFF 100%)',
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
  height: '50px',
  width: '46px',
  marginBottom: '1rem',
  '@keyframes spin': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
  animation: 'spin infinite 20s linear',
  textAlign: 'center',
  padding: '1.5rem',
  borderRadius: '40% 50% 70% 50%',
  background: 'linear-gradient(90deg, #25D366 0%, #128C7E 100%)',
  '@media screen and (max-width: 850px)': {
    padding: '1rem',
  },
});
const GrediantPargraph = styled(Typography)({
  fontSize: '2.5rem',
  fontWeight: '600',
  background: 'linear-gradient(90deg, #EA4335 0%, #2E7DFF 40%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});
const GrediantGreenPargraph = styled(Typography)({
  fontSize: '2.5rem',
  background: 'linear-gradient(90deg, #25D366 0%, #128C7E 60%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});
const CustomButton = styled(Button)({
  textTransform: 'none',
  borderRadius: '50px',
  width: '50%',
  color: '#FFFFFF',
});

const Spot = styled('div')(
  ({ hoverForm, whatsapp }: { hoverForm: boolean; whatsapp: boolean }) => ({
    width: `${hoverForm ? '10%' : '20%'}`,
    height: `${hoverForm ? '10%' : '20%'}`,
    background: `${
      whatsapp
        ? 'linear-gradient(90deg, #25D366 0%, #128C7E 100%)'
        : 'linear-gradient(3600deg, #EA4335 0%, #2E7DFF 100%)'
    }`,
    position: 'absolute',
    filter: 'blur(50px)',
    top: `${hoverForm ? '50%' : '5%'}`,
    left: `${hoverForm ? '50%' : '5%'}`,
    [`@media ${device.tablet}`]: {
      top: `${hoverForm ? '50%' : '10%'}`,
      left: `${hoverForm ? '50%' : '10%'}`,
    },
  }),
);

export {
  Spot,
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

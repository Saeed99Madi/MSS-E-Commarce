import { styled, Typography } from '@mui/material';

const ContactContainer = styled('section')({
  padding: '3rem 0',
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
});
const IconWrapper = styled('div')({
  height: '10%',
  textAlign: 'center',
  padding: '2rem',
  borderRadius: '70% 50% 40% 50%',
  background:
    'linear-gradient(125.86deg, rgba(255, 255, 255, 0.18) -267.85%, rgba(255, 255, 255, 0) 138.29%)',
});
const ReflectedIconWrapper = styled('div')({
  height: '10%',
  textAlign: 'center',
  padding: '2rem',
  borderRadius: '40% 50% 70% 50%',
  background:
    'linear-gradient(125.86deg, rgba(255, 255, 255, 0.18) -267.85%, rgba(255, 255, 255, 0) 138.29%)',
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

export {
  ContactContainer,
  ContactCard,
  BoxColumn,
  IconWrapper,
  GrediantPargraph,
  GrediantGreenPargraph,
  ReflectedIconWrapper,
};

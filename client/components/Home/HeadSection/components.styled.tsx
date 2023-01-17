import { Button, styled } from '@mui/material';

const HeadContainer = styled('section')({
  height: '100vh',
  width: '100vw',
  background: 'url("/assets/background.png")',
  display: 'flex',
  gap: '1rem',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  alignItems: 'center',
});

const HeadText = styled('h1')({
  fontFamily: 'Cairo',
  fontWeight: 700,
  fontSize: '48px',
  width: '594px',
  textAlign: 'center',
  marginTop: '0',
});

const HeadParagraph = styled('h1')({
  marginTop: '-1%',
  width: '427px',
  fontSize: '24px',
  textAlign: 'center',
});
const CenterdFlexContainer = styled('h1')({
  display: 'flex',
  justifyItems: 'flex-start',
  alignItems: 'center',
  gap: '1rem',
  flexWrap: 'wrap',
});
const CustomButtonCheck = styled(Button)({
  pl: '2rem',
  pr: '2rem',
  textTransform: 'none',
  borderRadius: '50px',
  color: '#FFFFFF',
  background: 'linear-gradient(90deg, #FF5362 0%, #E52535 100%)',
});
const CustomButtonWho = styled(Button)({
  textTransform: 'none',
  borderRadius: '50px',
  border: '1px solid ',
  color: '#161619',
});
const ServiceCard = styled('div')({
  width: '25rem',
  display: 'flex',
  justifyContent: 'center',
  padding: '1rem',
  borderRadius: '40px',
  alignItems: 'center',
  gap: '1rem',
  background: '#FFFFFF',
  boxShadow:
    '0px 6px 12px rgba(8, 35, 48, 0.1), 0px 16px 24px rgba(8, 35, 48, 0.04)',
});

const CardParagraph = styled('p')({
  fontFamily: 'Cairo',
  fontWeight: 500,
  fontSize: '24px',
  width: '100%',
  color: '#EFB92A',
  textAlign: 'center',
  marginTop: '0',
});

const CardHdParagraph = styled('p')({
  marginTop: '-5%',
  width: '260px',
  fontSize: '16px',
  textAlign: 'center',
});
const CardButton = styled(Button)({
  height: '2.5rem',
  background: 'linear-gradient(90.9deg, #1F1F22 0.72%, #141417 99.18%);',
  borderRadius: '50px',
  border: '1px solid ',
  color: '#FFFFFF',
});
export {
  HeadContainer,
  HeadText,
  HeadParagraph,
  CenterdFlexContainer,
  CustomButtonCheck,
  CustomButtonWho,
  ServiceCard,
  CardParagraph,
  CardHdParagraph,
  CardButton,
};

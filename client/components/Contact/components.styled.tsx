import { styled } from '@mui/material/styles';
import { Typography, TextField } from '@mui/material';
import { device } from '../../utils/devices';

const ContactPageWrapper = styled('main')(() => ({
  border: '1px solid red',
  display: 'flex',
  flexDirection: 'column',
  background: 'linear-gradient(90.9deg, #1F1F22 0.72%, #141417 99.18%)',
  padding: '1rem',
  [`@media ${device.tablet}`]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding: '0',
    height: '80vh',
  },
}));

const ContactFormSection = styled('div')(
  ({ hoverForm }: { hoverForm: boolean }) => ({
    border: '1px solid green',
    // width: `${hoverForm ? '50%' : '50%'}`,
    background: `${
      hoverForm
        ? 'inherit'
        : 'linear-gradient(90.9deg, #1F1F22 100%, #251417 99.18%)'
    }`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    height: '100%',
    [`@media ${device.tablet}`]: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 'auto',
      width: `${hoverForm ? '80%' : '50%'}`,
      paddingLeft: '3rem',
    },
  }),
);
const ContactWhatsAppSection = styled('div')(() => ({
  border: '1px solid blue',
  display: 'flex',
  background: `${
    false ? 'inherit' : 'linear-gradient(90.9deg, #1F1F22 100%, #141417 99.18%)'
  }`,
  [`@media ${device.tablet}`]: {
    border: '1px solid #fff',
    width: '50%',
  },
}));

const FormWrapper = styled('div')(({ hoverForm }: { hoverForm: boolean }) => ({
  border: '1px solid gold',
  width: '100%',
  height: '100%',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.5s ease-in-out',
  position: 'relative',

  [`@media ${device.tablet}`]: {
    border: '1px solid red',
    paddingLeft: `${hoverForm ? '144px' : '0px'}`,
    width: `${hoverForm ? '60%' : '100%'}`,
    justifyContent: 'center',
  },
}));

const WhatsAppWrapper = styled('div')(() => ({
  margin: 'auto',
}));

const FormSection = styled('div')(({ hoverForm }: { hoverForm: boolean }) => ({
  border: '1px solid gold',
  width: '100%',
  height: '100%',
  margin: 'auto',
  transform: `${hoverForm ? 'translateX(0%)' : 'translateX(1000%)'}`,
  transition: 'all 0.5s ease-in-out',
  display: `${hoverForm ? 'flex' : 'none'}`,
  alignItems: 'center',
  flexDirection: 'column',
  gap: '2rem',
  marginRight: '3rem',
  [`@media ${device.tablet}`]: {
    border: '1px solid red',
    transform: `${hoverForm ? 'translateX(0%)' : 'translateX(1000%)'}`,
    display: 'flex',
    justifyContent: 'center',
    width: '50%',
    height: '100%',
  },
}));

const Spot = styled('div')(({ hoverForm }: { hoverForm: boolean }) => ({
  width: `${hoverForm ? '10%' : '30%'}`,
  height: `${hoverForm ? '10%' : '30%'}`,
  background: 'linear-gradient(3600deg, #EA4335 0%, #2E7DFF 100%)',
  position: 'absolute',
  filter: 'blur(50px)',
  top: `${hoverForm ? '50%' : '-10%'}`,
  left: `${hoverForm ? '50%' : '-10%'}`,
}));

const ImageIcon = styled('img')(() => ({
  width: '60%',
  height: '60%',
  position: 'relative',
  top: '10%',
}));

const ImageWrapper = styled('div')(() => ({
  width: '100px',
  height: '100px',
  background: 'linear-gradient(90deg, #EA4335 0%, #2E7DFF 100%)',
  padding: '1rem',
  borderRadius: '67% 33% 32% 68% / 66% 60% 40% 34%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const CustomTypography = styled(Typography)(() => ({
  color: '#fff',
  marginTop: '1rem',
  fontWeight: '400',
  fontSize: '24px',
  lineHeight: '33px',
  letterSpacing: '0.02em',
}));

const HeaderTypography = styled(Typography)(
  () => ({
    color: '#fff',
    marginTop: '1rem',
    fontWeight: '700',
    fontSize: '48px',
    lineHeight: '50px',
    letterSpacing: '0.02em',
    '& span': {
      background: '-webkit-linear-gradient(90deg, #EA4335 0%, #2E7DFF 100%)',
      webkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
  }),
  `
    & span {
        background-image: -webkit-linear-gradient(180deg, #EA4335 0%, #2E7DFF 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    `,
);

const SubmitBtn = styled('button')(() => ({
  background: 'linear-gradient(90deg, #EA4335 0%, #2E7DFF 100%)',
  fontSize: '1rem',
  fontWeight: '700',
  color: '#fff',
  padding: '16px 45px',

  width: '100%',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  borderRadius: '8px',
  marginTop: '2rem',
  [`@media ${device.tablet}`]: {
    maxWidth: '80%',
  },
}));

const InputsWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: '100%',
}));

const CustomTextField = styled(TextField)(() => ({
  background:
    'linear-gradient(130.79deg, rgba(255, 255, 255, 0.08) -37.1%, rgba(255, 255, 255, 0) 134.47%)',
  border: 'none',
  borderRadius: '8px',
  input: {
    color: '#fff',
  },
  label: {
    color: '#5D5D5F',
  },
  textArea: {
    color: '#fff',
  },
  svg: {
    color: '#fff',
  },
  div: {
    color: '#fff',
  },
}));

export {
  ContactPageWrapper,
  ContactFormSection,
  ContactWhatsAppSection,
  FormWrapper,
  WhatsAppWrapper,
  FormSection,
  SubmitBtn,
  Spot,
  ImageWrapper,
  ImageIcon,
  HeaderTypography,
  CustomTypography,
  CustomTextField,
  InputsWrapper,
};

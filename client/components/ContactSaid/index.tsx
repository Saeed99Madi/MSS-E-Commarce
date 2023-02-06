import { Typography } from '@mui/material';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import EastIcon from '@mui/icons-material/East';
import {
  BoxColumn,
  ContactCard,
  ContactContainer,
  GrediantGreenPargraph,
  GrediantPargraph,
  IconWrapper,
  ImageIcon,
  CustomButton,
  ReflectedIconWrapper,
  Spot,
} from './components.styled';
// type Props = {
//   error: { error: string };
// };

const ConatctWithForms = () => {
  return (
    <ContactContainer>
      <ContactCard>
        <Spot hoverForm={false} whatsapp={false} />
        <BoxColumn sx={{ gap: '1rem' }}>
          <BoxColumn>
            <IconWrapper>
              <AlternateEmailIcon
                sx={{ color: '#FFFFFF', fontSize: '3rem', margin: '0' }}
              />
            </IconWrapper>
            <Typography
              sx={{
                margin: '0',
                fontSize: '1.5rem',
                color: '#FFFFFF',
              }}
            >
              Contct Us
            </Typography>
            <Typography sx={{ fontSize: '2.5rem', color: '#FFFFFF' }}>
              By Contact
            </Typography>
            <GrediantPargraph>Form</GrediantPargraph>
          </BoxColumn>
          <BoxColumn sx={{ gap: '1rem' }}>
            <Typography
              sx={{
                width: '80%',
                color: '#FFFFFF',
              }}
            >
              Submit Form {'>>'}
            </Typography>
          </BoxColumn>
        </BoxColumn>
      </ContactCard>
      <ContactCard>
        <Spot hoverForm={false} whatsapp />
        <BoxColumn sx={{ gap: '1rem' }}>
          <BoxColumn>
            <ReflectedIconWrapper>
              <WhatsAppIcon
                sx={{ color: '#FFFFFF', fontSize: '3rem', margin: '0' }}
              />
            </ReflectedIconWrapper>
            <Typography
              sx={{
                margin: '0',
                fontSize: '1.5rem',
                color: '#FFFFFF',
              }}
            >
              Contct Us
            </Typography>
            <Typography sx={{ fontSize: '2.5rem', color: '#FFFFFF' }}>
              By Contact
            </Typography>
            <GrediantGreenPargraph>whatsApp</GrediantGreenPargraph>
          </BoxColumn>
          <BoxColumn sx={{ gap: '1rem' }}>
            <Typography sx={{ width: '80%', color: '#FFFFFF' }}>
              Link {'>>'}
            </Typography>
          </BoxColumn>
        </BoxColumn>
      </ContactCard>
    </ContactContainer>
  );
};

export default ConatctWithForms;

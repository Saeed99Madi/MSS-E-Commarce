import { Button, Typography } from '@mui/material';
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
} from './components.styled';
// type Props = {
//   error: { error: string };
// };

const ContactSection = () => {
  return (
    <ContactContainer>
      <ContactCard>
        <IconWrapper>
          <ImageIcon src="/assets/contact.png" alt="contact" />
        </IconWrapper>
        <BoxColumn sx={{ gap: '1rem' }}>
          <BoxColumn>
            <Typography
              sx={{
                margin: '0',
                fontSize: '2.5rem',
                color: '#FFFFFF',
              }}
            >
              Contct Us By
            </Typography>
            <GrediantPargraph>Contact Form</GrediantPargraph>
          </BoxColumn>
          <BoxColumn sx={{ gap: '1rem' }}>
            <Typography sx={{ width: '80%', color: '#FFFFFF' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              adipisci temporibus perspiciatis iste perferendis odio minus,
              iusto itaque aut assumenda distinctio reiciendis alias quisquam.
              Minima commodi natus fuga amet nihil!
            </Typography>
            <CustomButton
              sx={{
                background: 'linear-gradient(90deg, #EA4335 0%, #2E7DFF 100%)',
              }}
            >
              Contact Us
            </CustomButton>
          </BoxColumn>
        </BoxColumn>
      </ContactCard>
      <ContactCard>
        <ReflectedIconWrapper>
          <ImageIcon src="/assets/whatsapp.png" alt="contact" />
        </ReflectedIconWrapper>
        <BoxColumn sx={{ gap: '1rem' }}>
          <BoxColumn>
            <Typography
              sx={{ margin: '0', fontSize: '2.5rem', color: '#FFFFFF' }}
            >
              Contct Us By
            </Typography>
            <GrediantGreenPargraph>whatsApp</GrediantGreenPargraph>
          </BoxColumn>
          <BoxColumn sx={{ gap: '1rem' }}>
            <Typography sx={{ width: '80%', color: '#FFFFFF' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              adipisci temporibus perspiciatis iste perferendis odio minus,
              iusto itaque aut assumenda distinctio reiciendis alias quisquam.
              Minima commodi natus fuga amet nihil!
            </Typography>
            <CustomButton
              sx={{
                background: 'linear-gradient(90deg, #25D366 0%, #128C7E 100%)',
              }}
            >
              Contact Us
            </CustomButton>
          </BoxColumn>
        </BoxColumn>
      </ContactCard>
    </ContactContainer>
  );
};

export default ContactSection;

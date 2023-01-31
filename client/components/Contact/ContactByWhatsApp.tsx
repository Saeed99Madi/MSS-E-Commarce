import CloseIcon from '@mui/icons-material/Close';
import {
  ContactWhatsAppSection,
  WhatsAppWrapper,
  ImageWrapper,
  ImageIcon,
  Spot,
  CustomTypography,
  SubmitBtn,
  HeaderTypography,
  WhatsAppSection,
  LogoWrapper,
  WhatsAppSectionWrapper,
} from './components.styled';
import { Logo } from '../Header/Logo';

type Props = {
  openWhatsApp: boolean;
  openForm: boolean;
  seOpenWhatsApp: Function;
  SetOpenForm: Function;
};

const ContactByWhatsApp = ({
  openWhatsApp,
  seOpenWhatsApp,
  SetOpenForm,
  openForm,
}: Props) => {
  return (
    <ContactWhatsAppSection
      onMouseEnter={() => {
        SetOpenForm(false);
      }}
      openWhatsApp
      openForm={openForm}
    >
      <WhatsAppWrapper openWhatsApp={openWhatsApp}>
        <div>
          <ImageWrapper whatsapp>
            <Spot hoverForm={openForm} whatsapp />
            <ImageIcon src="/assets/contact-whatsapp.png" alt="contact" />
          </ImageWrapper>
          <CustomTypography>Contact Us</CustomTypography>
          <HeaderTypography whatsapp>
            Contact By <span>WhatsApp</span>
          </HeaderTypography>
        </div>
        {!openWhatsApp && (
          <SubmitBtn
            whatsapp
            onMouseEnter={() => {
              seOpenWhatsApp(true);
            }}
          >
            Chat with us
          </SubmitBtn>
        )}
      </WhatsAppWrapper>
      <WhatsAppSection openWhatsApp={openWhatsApp}>
        <CloseIcon
          sx={{ color: '#fff', alignSelf: 'flex-end', cursor: 'pointer' }}
          onClick={() => {
            seOpenWhatsApp(false);
          }}
        />
        <WhatsAppSectionWrapper>
          <LogoWrapper>
            {/* <ImageIcon src="/assets/logo.png" alt="contact" /> */}
            <Logo />
          </LogoWrapper>
          {openWhatsApp && <SubmitBtn whatsapp>Chat with us</SubmitBtn>}
        </WhatsAppSectionWrapper>
      </WhatsAppSection>
    </ContactWhatsAppSection>
  );
};

export default ContactByWhatsApp;

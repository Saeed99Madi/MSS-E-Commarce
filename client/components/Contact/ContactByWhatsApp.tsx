import { ContactWhatsAppSection, WhatsAppWrapper } from './components.styled';

type Props = {
  hoverForm: boolean;
  SetHoverForm: Function;
};

const ContactByWhatsApp = ({ hoverForm, SetHoverForm }: Props) => {
  return (
    <ContactWhatsAppSection
      onMouseEnter={() => {
        SetHoverForm(false);
      }}
    >
      <WhatsAppWrapper>whatsApp section</WhatsAppWrapper>
    </ContactWhatsAppSection>
  );
};

export default ContactByWhatsApp;

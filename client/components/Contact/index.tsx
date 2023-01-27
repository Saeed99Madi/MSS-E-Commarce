import { useState } from 'react';
import { ContactPageWrapper } from './components.styled';
import ContactByForm from './ContactByForm';
import ContactByWhatsApp from './ContactByWhatsApp';

const ContactPage = () => {
  const [hoverForm, SetHoverForm] = useState<boolean>(false);
  return (
    <ContactPageWrapper>
      <ContactByForm hoverForm={hoverForm} SetHoverForm={SetHoverForm} />
      <ContactByWhatsApp hoverForm={hoverForm} SetHoverForm={SetHoverForm} />
    </ContactPageWrapper>
  );
};

export default ContactPage;

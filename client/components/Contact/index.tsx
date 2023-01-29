import { useState } from 'react';
import { ContactPageWrapper } from './components.styled';
import ContactByForm from './ContactByForm';
import ContactByWhatsApp from './ContactByWhatsApp';

const ContactPage = () => {
  const [openForm, SetOpenForm] = useState<boolean>(true);
  const [openWhatsApp, seOpenWhatsApp] = useState<boolean>(false);
  return (
    <ContactPageWrapper>
      <ContactByForm
        openForm={openForm}
        SetOpenForm={SetOpenForm}
        openWhatsApp={openWhatsApp}
        seOpenWhatsApp={seOpenWhatsApp}
      />
      <ContactByWhatsApp
        openForm={openForm}
        SetOpenForm={SetOpenForm}
        openWhatsApp={openWhatsApp}
        seOpenWhatsApp={seOpenWhatsApp}
      />
    </ContactPageWrapper>
  );
};

export default ContactPage;

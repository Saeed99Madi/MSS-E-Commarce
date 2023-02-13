import { ReactNode } from 'react';
import ConatctWithForms from '../../components/ContactSaid';
import Layout from '../../layouts/main';

const ContactUs = () => {
  return <ConatctWithForms />;
};

ContactUs.getLayout = (page: ReactNode) => <Layout>{page}</Layout>;
export default ContactUs;

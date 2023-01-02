import { ReactNode } from 'react';
// import { GetStaticProps } from 'next';
import Footer from '../components/Footer';
import Header from '../components/Header';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

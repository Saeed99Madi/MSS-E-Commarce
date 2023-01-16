/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode } from 'react';

import useTranslation from 'next-translate/useTranslation';
import { GetServerSideProps } from 'next';

import Layout from '../layouts/main';
import { IProduct } from '../interfaces/IProduct';

import FeaturedProducts from '../components/Home/FeaturedProducts';
import HeadSection from '../components/Home/HeadSection';
import ServicesList from '../components/Home/ServicesList';

import Axios from '../config';
import ContactSection from '../components/Home/ContactSection';

type Props = {
  products: IProduct[];
  error: { error: string };
};

const Home = (props: Props) => {
  const { t } = useTranslation('home');
  const { products, error } = props;
  return (
    <div style={{ margin: '0' }}>
      <HeadSection />
      <FeaturedProducts products={products} />
      {/* <ServicesList /> */}
      <ContactSection />
      <h1>{t('title')}</h1>

      {error ? (
        <h1>{error.error}</h1>
      ) : (
        products.map((product: IProduct) => {
          return <h1 key={product.id}>{product.title}</h1>;
        })
      )}
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getServerSideProps: GetServerSideProps = async context => {
  try {
    const { data } = await Axios.get('products');

    return {
      props: {
        products: data.data,
      },
    };
  } catch (error: unknown) {
    return {
      props: {
        error: { error: 'somthing went wrong' },
      },
    };
  }
};

Home.getLayout = (page: ReactNode) => <Layout>{page}</Layout>;
export default Home;

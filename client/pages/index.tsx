import { ReactNode } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { GetServerSideProps } from 'next';
import Layout from '../layouts/main';
import { IProduct } from '../interfaces/IProduct';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import Axios from '../config';
import HeadSection from '../components/Home/HeadSection';

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
      <h1>{t('title')}</h1>

      <FeaturedProducts products={products} />
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

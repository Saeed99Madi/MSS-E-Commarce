import { ReactNode } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { GetServerSideProps } from 'next';
// import Link from 'next/link';
import Layout from '../layouts/main';
import ApiServices from '../services/ApiService';
import { IProduct } from '../interfaces/IProduct';
import Axios from '../config';

type Props = {
  products: IProduct[];
  error: { error: string };
};

const Home = (props: Props) => {
  const { t } = useTranslation('home');
  const { products, error } = props;
  return (
    <div style={{ margin: '0' }}>
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

export const getServerSideProps: GetServerSideProps = async context => {
  try {
    const { data } = await Axios.get('/products');
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

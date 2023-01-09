/* eslint-disable react/jsx-props-no-spreading */
// import '../styles/globals.css';
// import { GetServerSideProps } from 'next';
import type { AppProps } from 'next/app';

import Layout from '../layouts/main';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;

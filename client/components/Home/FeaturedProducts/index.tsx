import { GetServerSideProps } from 'next';

import ApiServices from '../../../services/ApiService';

type Props = {
  error: { error: string };
};

const FeaturedProducts = (props: Props) => {
  const { error } = props;
  return (
    <div>
      <h1>{error.error} FeaturedProducts</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  try {
    ApiServices.init();

    return {
      props: {
        products: [],
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
export default FeaturedProducts;

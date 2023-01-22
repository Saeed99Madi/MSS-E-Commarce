import ProductName from '../../components/Product/ProductName';
import ProductFeatures from '../../components/Product/ProductFeatures';
import RelatedProducts from '../../components/Product/RelatedProducts';
import { GlobalStyle } from '../../components/Product/components.styled';

const Product = () => {
  return (
    <GlobalStyle>
      <ProductName />
      <ProductFeatures />
      <RelatedProducts />
    </GlobalStyle>
  );
};

export default Product;

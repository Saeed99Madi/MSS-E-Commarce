import {
  RelatedProductWrapper,
  ProductsCardWrapper,
} from '../components.styled';
import ProductCard from './ProductCard';

const RelatedProducts = () => {
  return (
    <RelatedProductWrapper>
      <h2>Related products</h2>
      <ProductsCardWrapper>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductsCardWrapper>
    </RelatedProductWrapper>
  );
};

export default RelatedProducts;

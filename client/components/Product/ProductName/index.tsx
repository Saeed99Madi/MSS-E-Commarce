import { SectionWithPadding } from '../components.styled';
import ProductDetails from './ProductDetails';
import ProductImages from './ProductImages';

const ProductName = () => {
  return (
    <SectionWithPadding>
      <ProductDetails />
      <ProductImages />
    </SectionWithPadding>
  );
};

export default ProductName;

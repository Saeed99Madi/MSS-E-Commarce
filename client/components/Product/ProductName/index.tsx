import { Dispatch, SetStateAction, useEffect } from 'react';
import { IProduct } from '../../../interfaces/IProduct';
import { SectionWithPadding } from '../components.styled';
import ProductDetails from './ProductDetails';
import ProductImages from './ProductImages';

const ProductName = ({
  product,
  setProduct,
}: {
  product: IProduct;
  setProduct: Dispatch<SetStateAction<IProduct | undefined>>;
}) => {
  useEffect(() => {
    if (!product.cover) {
      return;
    }
    const newProduct = product;
    newProduct.productGallery.unshift({
      id: 999,
      image: product.cover,
    });
    setProduct(newProduct);
  }, []);
  return (
    <SectionWithPadding>
      <ProductDetails product={product} />
      <ProductImages product={product} />
    </SectionWithPadding>
  );
};

export default ProductName;

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ProductName from '../../components/Product/ProductName';
import ProductFeatures from '../../components/Product/ProductFeatures';
import RelatedProducts from '../../components/Product/RelatedProducts';
import { GlobalStyle } from '../../components/Product/components.styled';
import { Axios } from '../../config';
import { IProduct } from '../../interfaces/IProduct';

const Product = () => {
  const [product, setProduct] = useState<IProduct>();

  const {
    query: { id },
  } = useRouter();
  useEffect(() => {
    if (!id) {
      return;
    }
    (async () => {
      try {
        const { data } = await Axios.get(`product/${id}`);
        setProduct(data.data[0]);
      } catch (err) {
        console.log(err, 'the error');
      }
    })();
  }, [id]);

  return (
    <GlobalStyle>
      {product ? (
        <ProductName product={product} setProduct={setProduct} />
      ) : null}
      {product ? <ProductFeatures product={product} /> : null}
      {product ? <RelatedProducts product={product} /> : null}
    </GlobalStyle>
  );
};

export default Product;

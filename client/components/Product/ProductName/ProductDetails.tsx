import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Axios, BASE_UEL } from '../../../config';
import { IProduct } from '../../../interfaces/IProduct';
import {
  ProductDetailsWrapper,
  CategoryTag,
  DownloadButton,
  ContactButton,
  ButtonsWrapper,
} from '../components.styled';

const ProductDetails = ({ product }: { product: IProduct }) => {
  const [categoryName, setCategoryName] = useState('');
  useEffect(() => {
    console.log(product, product.CategoryId, 'hello');

    if (product) {
      (async () => {
        const { data } = await Axios.get(
          `categories/show/${product.CategoryId}`,
        );
        setCategoryName(data.data.title);
      })();
    }
  }, [product]);
  return (
    <ProductDetailsWrapper>
      <div>
        {categoryName ? <CategoryTag>{categoryName}</CategoryTag> : null}
        <h1>{product.title}</h1>
        <p>{product.description}</p>
      </div>
      <ButtonsWrapper>
        {product.catalog ? (
          <Link
            href={`${BASE_UEL}/products/${product.catalog}`}
            style={{ textDecoration: 'none' }}
          >
            <DownloadButton startIcon={<FileDownloadIcon />}>
              Download Catalog
            </DownloadButton>
          </Link>
        ) : null}
        <Link href="/contacts" style={{ textDecoration: 'none' }}>
          <ContactButton>contact us</ContactButton>
        </Link>
      </ButtonsWrapper>
    </ProductDetailsWrapper>
  );
};

export default ProductDetails;

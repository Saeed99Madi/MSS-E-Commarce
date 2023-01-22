import FileDownloadIcon from '@mui/icons-material/FileDownload';
import {
  ProductDetailsWrapper,
  CategoryTag,
  DownloadButton,
  ContactButton,
  ButtonsWrapper,
} from '../components.styled';

const ProductDetails = () => {
  return (
    <ProductDetailsWrapper>
      <div>
        <CategoryTag>SubCategory</CategoryTag>
        <h1>Product Name</h1>
        <p>
          We deliver solar products to all countries, Check Our Products & Enjoy
          We deliver solar products to all countries, Check Our Products & Enjoy
          We deliver solar products to all countries, Check Our Products & Enjoy
          .
        </p>
      </div>
      <ButtonsWrapper>
        <DownloadButton startIcon={<FileDownloadIcon />}>
          Download Catalog
        </DownloadButton>
        <ContactButton>contact us</ContactButton>
      </ButtonsWrapper>
    </ProductDetailsWrapper>
  );
};

export default ProductDetails;

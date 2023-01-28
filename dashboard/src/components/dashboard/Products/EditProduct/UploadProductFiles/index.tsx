import { Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Dispatch, SetStateAction, useEffect } from 'react';
import PDFViewer from 'pdf-viewer-reactjs';
import { IProduct } from '../../../../../interfaces/IProduct';

interface IProductC extends IProduct {
  gallary?: File[];
  image?: File;
  catalogFile?: File;
}

type Props = {
  product: IProductC;
  setNewProduct: Dispatch<SetStateAction<IProductC>>;
};

export const UploadProductFiles = ({ product, setNewProduct }: Props) => {
  const handleProductFillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;

    if (name === 'cover') {
      setNewProduct(prev => ({ ...prev, image: (files as any)[0] }));
    } else if (name === 'catalog') {
      setNewProduct(prev => ({ ...prev, catalogFile: (files as any)[0] }));
    } else {
      console.log(files);
      setNewProduct(prev => ({ ...prev, [name]: files }));
    }
  };
  useEffect(() => {
    console.log(product);
  }, [product]);
  return (
    <>
      <Button
        sx={{
          borderRadius: '0.5rem',
          padding: '1rem 0',
          width: '50%',
          background:
            'linear-gradient(130.79deg, rgba(255, 255, 255, 0.08) -37.1%, rgba(255, 255, 255, 0) 134.47%)',
        }}
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
      >
        Product Cover
        <input
          onChange={handleProductFillsChange}
          hidden
          name="cover"
          accept="image/*"
          type="file"
        />
      </Button>
      {product.cover ? (
        <div>
          <img
            style={{ width: '12rem', height: '12rem' }}
            src={`${process.env.REACT_APP_BASEE_URL}/products/${product.cover}`}
            alt={product.title}
          />
        </div>
      ) : null}

      <Button
        sx={{
          borderRadius: '0.5rem',
          padding: '1rem 0',
          width: '50%',
          background:
            'linear-gradient(130.79deg, rgba(255, 255, 255, 0.08) -37.1%, rgba(255, 255, 255, 0) 134.47%)',
        }}
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
      >
        Product Gallery
        <input
          name="gallary"
          onChange={handleProductFillsChange}
          hidden
          accept="image/*"
          multiple
          type="file"
        />
      </Button>
      {product.productGallery ? (
        product.productGallery?.length > 0 ? (
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {product.productGallery.map(ele => {
              return (
                <img
                  style={{ width: '12rem', height: '12rem' }}
                  src={`${process.env.REACT_APP_BASEE_URL}/products/${ele.image}`}
                  alt={product.title}
                />
              );
            })}
          </div>
        ) : null
      ) : null}

      <Button
        sx={{
          borderRadius: '0.5rem',
          padding: '1rem 0',
          width: '50%',
          background:
            'linear-gradient(130.79deg, rgba(255, 255, 255, 0.08) -37.1%, rgba(255, 255, 255, 0) 134.47%)',
        }}
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
      >
        Product Catalog
        <input
          name="catalog"
          onChange={handleProductFillsChange}
          hidden
          accept=".pdf"
          multiple
          type="file"
        />
      </Button>
      {product.catalog ? (
        <div>
          <PDFViewer
            document={{
              url: `${process.env.REACT_APP_BASEE_URL}/products/${product.catalog}`,
            }}
          />
        </div>
      ) : null}
    </>
  );
};

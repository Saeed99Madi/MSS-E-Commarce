import { Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Dispatch, SetStateAction } from 'react';
import { IProduct } from '../../../../../interfaces/IProduct';

type Props = {
  setNewProduct: Dispatch<SetStateAction<IProduct>>;
};

export const UploadProductFiles = (props: Props) => {
  const { setNewProduct } = props;

  const handleProductFillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;

    if (name === 'cover') {
      setNewProduct(prev => ({ ...prev, cover: (files as any)[0] }));
    } else if (name === 'catalog') {
      setNewProduct(prev => ({ ...prev, catalog: (files as any)[0] }));
    } else {
      setNewProduct(prev => ({ ...prev, [name]: files }));
    }
  };
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
          name="gallery"
          onChange={handleProductFillsChange}
          hidden
          accept="image/*"
          multiple
          type="file"
        />
      </Button>
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
    </>
  );
};

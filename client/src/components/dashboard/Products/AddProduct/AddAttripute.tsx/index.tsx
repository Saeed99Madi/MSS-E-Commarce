import { TextField } from '@mui/material';
import { ChangeEventHandler } from 'react';
// import { IProduct } from '../../../../interfaces/IProduct';

type Product = {
  title: string;
  cover: string;
  description: string;
  CategoryId: string;
  catalog: string;
};
type Props = {
  handleProductChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  name: string;
  newProduct: Product;
  label: string;
};
const TextInput = (props: Props) => {
  const { label, handleProductChange, name, newProduct } = props;
  return (
    <TextField
      sx={{
        borderRadius: '0.5rem',
        input: {
          color: '#FFFFFF',
        },
        label: { color: '#b1a9a9' },
        width: '50%',

        background:
          'linear-gradient(130.79deg, rgba(255, 255, 255, 0.08) -37.1%, rgba(255, 255, 255, 0) 134.47%)',
      }}
      name="description"
      onChange={handleProductChange}
      value={newProduct.description}
      id="outlined-multiline-static"
      label="Product Description"
      multiline
      rows={4}
    />
  );
};
export default TextInput;

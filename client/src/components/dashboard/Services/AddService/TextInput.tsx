import { ChangeEventHandler } from 'react';

import { TextField } from '@mui/material';
import { IService } from '../../../../interfaces/IService';

type Props = {
  handleProductChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  name: string;
  newService: IService;
  label: string;
};
const TextInput = (props: Props) => {
  const { label, handleProductChange, name, newService } = props;
  return (
    <TextField
      name={name}
      sx={{
        borderRadius: '0.5rem',
        input: { paddingLeft: '0.9rem', color: '#FFFFFF' },
        textarea: { paddingLeft: '0.9rem', color: '#FFFFFF' },
        label: { color: '#b1a9a9', marginLeft: '1rem' },
        width: '50%',
        background:
          'linear-gradient(130.79deg, rgba(255, 255, 255, 0.08) -37.1%, rgba(255, 255, 255, 0) 134.47%)',
      }}
      onChange={handleProductChange}
      value={newService[name as keyof IService]}
      id="standard-basic"
      label={label}
      variant="standard"
    />
  );
};
export default TextInput;

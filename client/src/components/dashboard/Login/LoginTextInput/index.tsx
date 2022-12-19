import { ChangeEventHandler } from 'react';

import { TextField } from '@mui/material';

import { IUser } from '../../../../interfaces/IUser';

type Props = {
  handleUserChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  name: string;
  user: IUser;
  label: string;
  width: string;
  isMultiline: boolean;
  rows: number;
};

const TextInput = (props: Props) => {
  const { label, handleUserChange, name, user, width, isMultiline, rows } =
    props;
  return (
    <TextField
      name={name}
      sx={{
        borderRadius: '0.5rem',
        input: { color: '#FFFFFF' },
        label: { color: '#b1a9a9', marginLeft: '1rem' },
        width,
        background:
          'linear-gradient(130.79deg, rgba(255, 255, 255, 0.08) -37.1%, rgba(255, 255, 255, 0) 134.47%)',
      }}
      onChange={handleUserChange}
      value={user[name as keyof IUser]}
      id="standard-basic"
      label={label}
      variant="standard"
      multiline={isMultiline}
      rows={rows}
    />
  );
};
export default TextInput;

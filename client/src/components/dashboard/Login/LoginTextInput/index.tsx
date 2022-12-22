import { ChangeEventHandler } from 'react';

import { TextField } from '@mui/material';

import { ISignIn } from '../../../../interfaces/IAuthGaurd';

type Props = {
  handleUserChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  name: string;
  user: ISignIn;
  label: string;
  width: string;
  isMultiline: boolean;
  rows: number;
  password: boolean;
};

const TextInput = (props: Props) => {
  const {
    label,
    handleUserChange,
    name,
    user,
    width,
    isMultiline,
    rows,
    password,
  } = props;
  return (
    <TextField
      name={name}
      sx={{
        borderRadius: '0.5rem',
        input: { paddingLeft: '1rem', color: '#FFFFFF' },
        label: { color: '#b1a9a9', marginLeft: '1rem' },
        width,
        background:
          'linear-gradient(130.79deg, rgba(255, 255, 255, 0.08) -37.1%, rgba(255, 255, 255, 0) 134.47%)',
      }}
      onChange={handleUserChange}
      value={user[name as keyof ISignIn]}
      id={`login ${name}`}
      label={label}
      variant="standard"
      multiline={isMultiline}
      rows={rows}
      type={password ? 'password' : 'text'}
    />
  );
};
export default TextInput;

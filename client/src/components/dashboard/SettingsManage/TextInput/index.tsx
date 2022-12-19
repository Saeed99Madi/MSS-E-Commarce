import { TextField } from '@mui/material';

import { ChangeEventHandler } from 'react';
import { ISettings } from '../../../../interfaces/ISettings';

type Props = {
  handleSettingsChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  name: string;
  settings: ISettings;
  label: string;
  width: string;
  isMultiline: boolean;
  rows: number;
};

const TextInput = (props: Props) => {
  const {
    label,
    handleSettingsChange,
    name,
    settings,
    width,
    isMultiline,
    rows,
  } = props;
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
      onChange={handleSettingsChange}
      value={settings[name as keyof ISettings]}
      id="standard-basic"
      label={label}
      variant="standard"
      multiline={isMultiline}
      rows={rows}
    />
  );
};
export default TextInput;

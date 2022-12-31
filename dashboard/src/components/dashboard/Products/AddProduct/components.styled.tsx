import { styled } from '@mui/material/styles';

import { Button, List, Select, TextField } from '@mui/material';

const InputsList = styled(List)({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  background: '#141417',
  gap: '1.5rem',
  minHeight: 'auto',
});
const DescriptionInput = styled(TextField)({
  borderRadius: '0.5rem',
  input: { marginLeft: '1rem', color: '#FFFFFF' },
  label: { color: '#b1a9a9' },
  width: '50%',
  textarea: { color: '#FFFFFF' },
  background:
    'linear-gradient(130.79deg, rgba(255, 255, 255, 0.08) -37.1%, rgba(255, 255, 255, 0) 134.47%)',
});
const SelectCats = styled(Select)({
  borderRadius: '0.5rem',
  background:
    'linear-gradient(130.79deg, rgba(255, 255, 255, 0.08) -37.1%, rgba(255, 255, 255, 0) 134.47%)',
  width: '50%',
  color: '#FFFFFF',
});
const UploadButton = styled(Button)({
  borderRadius: '0.5rem',
  padding: '1rem 0',
  width: '50%',
  background:
    'linear-gradient(130.79deg, rgba(255, 255, 255, 0.08) -37.1%, rgba(255, 255, 255, 0) 134.47%)',
});

export { InputsList, DescriptionInput, SelectCats, UploadButton };

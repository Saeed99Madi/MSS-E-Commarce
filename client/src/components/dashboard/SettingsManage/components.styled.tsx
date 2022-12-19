import { styled } from '@mui/material/styles';

import { Box } from '@mui/material';

const RowBox = styled(Box)({
  textAlign: 'center',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '1rem',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

export { RowBox };

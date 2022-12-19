// type Props = {
// };

import { Box } from '@mui/material';
import { MarkAs } from './MarkAs';
import ServiceSearch from './Search';

export const Actions = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '2rem 0',
        color: '#FFFFFF',
      }}
    >
      <ServiceSearch />
      <MarkAs />
    </Box>
  );
};

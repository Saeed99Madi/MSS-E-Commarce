import { useState } from 'react';

import { Box, MenuItem } from '@mui/material';
import { arrowIcon } from '../../components.styled';
import { SelectCats } from '../../Products/AddProduct/components.styled';
// type Props = {
// };
const actions = [
  { id: 1, name: 'Puplish' },
  { id: 2, name: 'Un Puplish' },
  { id: 3, name: 'Delete' },
  { id: 4, name: 'Select All' },
  { id: 5, name: 'un Select All' },
];

export const MarkAs = () => {
  const [markas, setmarkAs] = useState<Array<string>>([]);
  const handleMarkAs = (e: any) => {
    setmarkAs(e.target.value);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '2rem 12.9rem 2rem 0',
        width: '10%',
        color: '#FFFFFF',
      }}
    >
      <SelectCats
        sx={{ width: '100%' }}
        IconComponent={arrowIcon}
        name="acrion"
        value={markas}
        onChange={handleMarkAs}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value="">
          <em>Mark As</em>
        </MenuItem>
        {actions.map(ele => {
          return (
            <MenuItem key={ele.id} value={`${ele.id}`}>
              {ele.name}
            </MenuItem>
          );
        })}
      </SelectCats>
    </Box>
  );
};

import { ChangeEvent, useContext, useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import { TextField } from '@mui/material';

import { DashboardContext } from '../../../../../context/DashboardContext';
import depounce from '../../../../../servises/debounce';

const Search = () => {
  const { setServicesSearch } = useContext(DashboardContext);
  const [searchInput, setSearchInput] = useState('');
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  // change Context value
  useEffect(() => {
    const timer = depounce(() => {
      if (setServicesSearch) {
        setServicesSearch(searchInput);
      }
    }, 1500);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  return (
    <Box
      sx={{
        display: 'flex',
        background:
          'linear-gradient(125.57deg, rgba(255, 255, 255, 0.2) -211.9%, rgba(255, 255, 255, 0) 128.55%)',
        justifyContent: 'space-between',
        margin: '2rem 0',
        width: '50%',
        color: '#FFFFFF',
      }}
    >
      <TextField
        sx={{
          input: { color: '#FFFFFF' },
          label: { color: '#b1a9a9' },
          width: '80%',
          marginLeft: '1rem',
        }}
        onChange={handleSearchChange}
        value={searchInput}
        id="standard-basic"
        label="Search Services..."
        variant="standard"
      />
    </Box>
  );
};
export default Search;

import { ChangeEvent, useContext } from 'react';

import Box from '@mui/material/Box';
import { MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { arrowIcon } from '../components.styled';
import { DashboardContext } from '../../../context/DashboardContext';

export const Actions = () => {
  const {
    searchFilterCategory,
    setSearchFilterCategory,
    productSearch,
    setProductSearch,
  } = useContext(DashboardContext);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProductSearch(event.target.value);
  };
  const handleFilterCategoryChange = (event: SelectChangeEvent) => {
    setSearchFilterCategory(event.target.value);
  };
  // change Context value
  //   useEffect(() => {
  //     depounce(() => {
  //       if (setFilter) {
  //         setFilter({ ...filter, content: searchInput });
  //       }
  //     }, 1500);
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [searchInput]);
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
        value={productSearch}
        id="standard-basic"
        label="Search Products..."
        variant="standard"
      />
      <Select
        sx={{
          color: '#FFFFFF',
        }}
        IconComponent={arrowIcon}
        MenuProps={{
          PaperProps: {
            style: { width: '250px', height: '50%', overflowY: 'scroll' },
          },
        }}
        value={searchFilterCategory}
        onChange={handleFilterCategoryChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value="">
          <em>Category</em>
        </MenuItem>
        <MenuItem value="10">Ten</MenuItem>
        <MenuItem value="20">Twenty</MenuItem>
        <MenuItem value="30">Thirty</MenuItem>
        <MenuItem value="10">Ten</MenuItem>
        <MenuItem value="20">Twenty</MenuItem>
        <MenuItem value="30">Thirty</MenuItem>
        <MenuItem value="10">Ten</MenuItem>
        <MenuItem value="20">Twenty</MenuItem>
        <MenuItem value="30">Thirty</MenuItem>
        <MenuItem value="20">Twenty</MenuItem>
        <MenuItem value="30">Thirty</MenuItem>
        <MenuItem value="10">Ten</MenuItem>
        <MenuItem value="20">Twenty</MenuItem>
        <MenuItem value="30">Thirty</MenuItem>
      </Select>
    </Box>
  );
};

import { ChangeEvent, useContext, useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import { MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { arrowIcon } from '../../components.styled';
import { DashboardContext } from '../../../../context/DashboardContext';
import depounce from '../../../../servises/debounce';
import getAllCategories from '../../../../hooks/getAllCategories';
import { ICategories } from '../../../../interfaces/ICategories';

export const Search = () => {
  const { searchFilterCategory, setSearchFilterCategory, setProductSearch } =
    useContext(DashboardContext);
  const [searchInput, setSearchInput] = useState('');
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };
  const [categories, setcategories] = useState<ICategories[]>([]);
  const handleFilterCategoryChange = (event: SelectChangeEvent) => {
    setSearchFilterCategory(event.target.value);
  };
  // change Context value
  useEffect(() => {
    const timer = depounce(() => {
      if (setProductSearch) {
        setProductSearch(searchInput);
      }
    }, 1500);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  const allCategories = getAllCategories();
  useEffect(() => {
    (async () => {
      setcategories(await allCategories());
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
        {categories.map((ele: ICategories) => {
          return (
            <MenuItem key={ele.id} value={`${ele.id}`}>
              {ele.title as string}
            </MenuItem>
          );
        })}
      </Select>
    </Box>
  );
};

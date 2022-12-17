import React, { useEffect, useContext, useState } from 'react';
import Typography from '@mui/material/Typography';
import { CreateNewFolderOutlined } from '@mui/icons-material';
import { TextField, Button, Checkbox } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { DrawerHeader, Main } from '../../components.styled';
import { DashboardContext } from '../../../../context/DashboardContext';
import {
  AddCategoryButton,
  CategoryDescriptionInput,
  CategoryNameWrapper,
  CategoryDetailsWrapper,
} from './component.styled';
import { SelectCategories } from './SelectCategory';
import useCategories from '../../../../hooks/getCategories';
import { ICategories } from '../../../../interfaces/ICategories';
import { useForm } from '../../../../hooks/useForm';
import ApiServices from '../../../../servises/ApiService';

const AddCategory = () => {
  const { openSideBar } = useContext(DashboardContext);
  const [isChecked, setIsChecked] = useState(true);
  const [category, setCategory] = useState('');

  const initialState = {
    title: '',
    description: '',
    parentId: '',
  };

  // **********************

  // getting the event handlers
  const { onChange, values } = useForm(initialState);
  const [categories, setCategories] = useState<ICategories[]>([]);

  const handleCategory = (event: any) => {
    event.preventDefault();
    const { value } = event.target;

    if (typeof value === 'string') {
      setCategory(value);
    } else {
      throw new Error();
    }
  };

  const fetchCategories = useCategories();

  useEffect(() => {
    (async () => {
      setCategories(await fetchCategories());
    })();
  }, []);

  const handleIsChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setIsChecked(checked);
  };

  // "Async"  function to send the data
  ApiServices.init();
  const AddCategoryCB = () => {
    const data = new FormData();
    if (!values.cover) return;
    data.append('title', values.title);
    data.append('description', values.description);
    data.append('cover', values.cover);
    data.append('parentId', values.parentId);
    console.log({ data });
    console.log({ values });
    ApiServices.post('/categories', data);
  };

  return (
    <Main
      open={openSideBar}
      sx={{
        background: '#141417',
        color: '#FFFFFF',
        height: '100vh',
      }}
      style={{
        border: '1px solid red',
      }}
    >
      <DrawerHeader />
      <div
        style={{
          border: '1px solid green',
          height: '95.6%',
          padding: '36px',
          background: '#1E1E21',
          borderTopLeftRadius: '2rem',
          minWidth: '420px',
        }}
      >
        <Typography
          paragraph
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <CreateNewFolderOutlined
            fontSize="large"
            style={{
              marginRight: '1rem',
              fontSize: '28px',
            }}
          />
          Add Category
        </Typography>

        <CategoryNameWrapper>
          <TextField
            sx={{
              borderRadius: '0.5rem',
              input: { color: '#FFFFFF' },
              label: { color: '#b1a9a9', marginLeft: '1rem' },
              width: '100%',
              height: '50px',
              background:
                'linear-gradient(130.79deg, rgba(255, 255, 255, 0.08) -37.1%, rgba(255, 255, 255, 0) 134.47%)',
            }}
            id="standard-basic"
            label="Category Name"
            variant="standard"
            name="title"
            onChange={onChange}
          />
          <div>
            <Checkbox
              onChange={handleIsChecked}
              defaultChecked
              value={isChecked}
              sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
            />{' '}
            subcategory
          </div>
        </CategoryNameWrapper>

        <CategoryDetailsWrapper>
          {!isChecked && (
            <SelectCategories
              category={category}
              categories={categories}
              handleCategory={handleCategory}
              onChange={onChange}
            />
          )}

          <CategoryDescriptionInput
            key="Category Description"
            name="description"
            onChange={onChange}
            id="outlined-multiline-static"
            label="Category Description"
            multiline
            rows={4}
            sx={{
              borderRadius: '0.5rem',
              input: { color: '#FFFFFF' },
              label: { color: '#b1a9a9', marginLeft: '1rem' },
              background:
                'linear-gradient(130.79deg, rgba(255, 255, 255, 0.08) -37.1%, rgba(255, 255, 255, 0) 134.47%)',
            }}
          />

          <Button
            sx={{
              borderRadius: '0.5rem',
              padding: '1rem 0',
              width: '100%',
              background:
                'linear-gradient(130.79deg, rgba(255, 255, 255, 0.08) -37.1%, rgba(255, 255, 255, 0) 134.47%)',
            }}
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Category Cover
            <input
              name="cover"
              onChange={onChange}
              hidden
              accept="image/*"
              type="file"
            />
          </Button>
          <AddCategoryButton onClick={AddCategoryCB}>
            <CreateNewFolderOutlined />
          </AddCategoryButton>
        </CategoryDetailsWrapper>
      </div>
    </Main>
  );
};

export default AddCategory;

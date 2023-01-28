import React, { useEffect, useContext, useState } from 'react';
import { CreateNewFolderOutlined } from '@mui/icons-material';
import { Checkbox } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { toast } from 'react-toastify';
import { DrawerHeader } from '../../components.styled';
import { DashboardContext } from '../../../../context/DashboardContext';
import {
  AddCategoryButton,
  CategoryDescriptionInput,
  CategoryNameWrapper,
  CategoryDetailsWrapper,
  CustomTextField,
  CategoryMain,
  CategoryWrapper,
  CustomTypography,
  FolderIcon,
  CustomCoverButton,
} from '../component.styled';
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
    // we have to return to ensure from this line
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleIsChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setIsChecked(checked);
  };

  // "Async"  function to send the data
  ApiServices.init();
  const AddCategoryCB = async () => {
    const data = new FormData();
    if (!values.cover) {
      toast.error('you should add cover image');
      return;
    }
    data.append('title', values?.title);
    data.append('description', values.description);
    data.append('cover', values.cover);
    data.append('parentId', values.parentId as string);
    try {
      const res = await ApiServices.post('/categories', data);
      if (res.status === 201) {
        toast.success(`added category successfully`);
        window.location.reload();
      }
    } catch (err: any) {
      toast.error(`${err?.response?.data?.msg}`);
    }
  };

  return (
    <CategoryMain open={openSideBar}>
      <DrawerHeader />
      <CategoryWrapper>
        <CustomTypography paragraph>
          <FolderIcon />
          Add Category
        </CustomTypography>

        <CategoryNameWrapper>
          <CustomTextField
            id="standard-basic"
            label="Category Name"
            variant="standard"
            name="title"
            onChange={onChange}
            sx={{
              input: { color: '#FFFFFF' },
              label: { color: '#b1a9a9', marginLeft: '1rem' },
            }}
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
              input: { color: '#FFFFFF' },
              label: { color: '#b1a9a9', marginLeft: '1rem' },
            }}
          />
          <CustomCoverButton
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
          </CustomCoverButton>
          <AddCategoryButton onClick={AddCategoryCB}>
            <CreateNewFolderOutlined />
          </AddCategoryButton>
        </CategoryDetailsWrapper>
      </CategoryWrapper>
    </CategoryMain>
  );
};

export default AddCategory;

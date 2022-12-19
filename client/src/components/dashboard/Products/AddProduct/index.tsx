import * as React from 'react';
import uuid from 'react-uuid';

import {
  Box,
  Button,
  Dialog,
  Checkbox,
  Toolbar,
  IconButton,
  Typography,
  Divider,
  AppBar,
  Slide,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import { TransitionProps } from '@mui/material/transitions';
import AddIcon from '@mui/icons-material/Add';
import TextInput from './TextInput';

import { DescriptionInput, InputsList } from './components.styled';
import ApiServices from '../../../../servises/ApiService';
import { IProduct } from '../../../../interfaces/IProduct';

import { SelectCategories } from './SelectCategories';
import { UploadProductFiles } from './UploadProductFiles';
import { AttriputeReducer } from '../../../../helpers/AttriputeReducer';

import { AttriputeForms } from './AttriputeForms';

ApiServices.init();
const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
  ) => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Slide direction="up" ref={ref} {...props} />;
  },
);

const initialState = [{ id: uuid(), title: '', description: '' }];
type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const AddProduct = (props: Props) => {
  const { open, setOpen } = props;
  const [category, setCategory] = React.useState('');
  const [newProduct, setNewProduct] = React.useState<IProduct>({
    title: '',
    description: '',
    CategoryId: '',
    active: false,
    gallery: [],
  });
  const [isChecked, setIsChecked] = React.useState(false);

  const [attriputes, attriputesDispatch] = React.useReducer(
    AttriputeReducer,
    initialState,
  );

  const handleIsChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setIsChecked(checked);
    setNewProduct(prev => ({ ...prev, active: checked }));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleProductChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveProduct = () => {
    const data = new FormData();
    if (!newProduct.cover || !newProduct.gallery || !newProduct.catalog) {
      return;
    }
    data.append('cover', newProduct.cover);
    data.append('catalog', newProduct.catalog);
    const productGallery = [...newProduct.gallery];
    productGallery.forEach(image => {
      data.append('gallery', image, image.name);
    });

    data.append('title', newProduct.title);
    data.append('CategoryId', newProduct.CategoryId);
    data.append('description', newProduct.description);
    const AttriputesStr = JSON.stringify(attriputes);
    data.append('attriputes', AttriputesStr);
    console.log(data);
    ApiServices.post('products', data);
  };

  return (
    <Box>
      <Button
        sx={{
          width: '15rem',
          height: 'auto',
          background:
            'linear-gradient(125.86deg, rgba(255, 255, 255, 0.18) -267.85%, rgba(255, 255, 255, 0) 138.29%)',
          backdropFilter: 'blur(5.73932px)',
          borderRadius: '12px',
          color: '#FFFFFF',
        }}
        variant="outlined"
        onClick={handleClickOpen}
        startIcon={<AddIcon />}
      >
        Add Product
      </Button>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{ height: 'auto', top: '4rem', background: '#141417' }}
      >
        <AppBar
          sx={{
            position: 'relative',
            background: '#141417',
          }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Add Product
            </Typography>
            <Button
              autoFocus
              color="inherit"
              onClick={() => {
                handleClose();
                handleSaveProduct();
              }}
            >
              save
            </Button>
          </Toolbar>
        </AppBar>

        <InputsList>
          <Typography sx={{ marginRight: 'auto', color: '#FFFFFF' }}>
            Add New Product
          </Typography>
          <TextInput
            handleProductChange={handleProductChange}
            name="title"
            newProduct={newProduct}
            label="Product Title"
          />

          <DescriptionInput
            key="Product Description"
            name="description"
            onChange={handleProductChange}
            value={newProduct.description}
            id="outlined-multiline-static"
            label="Product Description"
            multiline
            rows={4}
          />

          <SelectCategories
            setCategory={setCategory}
            category={category}
            setNewProduct={setNewProduct}
          />

          <UploadProductFiles setNewProduct={setNewProduct} />
          <AttriputeForms
            attriputes={attriputes}
            attriputesDispatch={attriputesDispatch}
          />
          <Divider sx={{ height: '1px', width: '50%' }} color="#FFFFFF" />
          <Checkbox
            onChange={handleIsChecked}
            defaultChecked
            name="active"
            value={isChecked}
            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
          />
        </InputsList>
      </Dialog>
    </Box>
  );
};
export default AddProduct;

import {
  Dispatch,
  forwardRef,
  Ref,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import uuid from 'react-uuid';

import {
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
import { AttriputeReducer } from '../../../../helpers/AttriputeReducer';
import { IProduct } from '../../../../interfaces/IProduct';
import ApiServices from '../../../../servises/ApiService';
import { DescriptionInput, InputsList } from '../AddProduct/components.styled';
import TextInput from '../AddProduct/TextInput';
import { SelectCategories } from '../AddProduct/SelectCategories';
import { UploadProductFiles } from '../AddProduct/UploadProductFiles';
import { AttriputeForms } from '../AddProduct/AttriputeForms';
import { DashboardContext } from '../../../../context/DashboardContext';

const Transition = forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: Ref<unknown>,
  ) => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Slide direction="up" ref={ref} {...props} />;
  },
);

const initialState = [{ id: uuid(), title: '', description: '' }];
type Props = {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
};

const EditProduct = ({ open, setOpen }: Props) => {
  const { products, editIdProduct } = useContext(DashboardContext);

  const [category, setCategory] = useState('');
  const [newProduct, setNewProduct] = useState<IProduct>({
    title: '',
    description: '',
    CategoryId: '',
    active: false,
    gallery: [],
  });

  const checkProductId = (product: IProduct) => {
    return product.id === editIdProduct;
  };
  const [attriputes, attriputesDispatch] = useReducer(
    AttriputeReducer,
    initialState,
  );

  useEffect(() => {
    const product = products.find(checkProductId);

    if (product && product?.CategoryId) {
      attriputesDispatch({ type: 'removeAll' });
      attriputesDispatch({
        type: 'addAttriputes',
        attriputes: product?.ProductAttriputes,
      });
      setCategory(product?.CategoryId);
      setNewProduct(product);
    } else {
      console.log('product not found');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editIdProduct]);
  const [isChecked, setIsChecked] = useState(false);

  const handleIsChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setIsChecked(checked);
    setNewProduct(prev => ({ ...prev, active: checked }));
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
    ApiServices.post('products', data);
  };

  return (
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
            sx={{ background: '#E52535' }}
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
        <Typography variant="h4" sx={{ color: '#FFFFFF' }}>
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

        <UploadProductFiles
          product={newProduct}
          setNewProduct={setNewProduct}
        />

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
  );
};

export default EditProduct;

import * as React from 'react';
import uuid from 'react-uuid';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { TextField, Select, MenuItem, SelectChangeEvent } from '@mui/material';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import TextInput from './TextInput';

import { arrowIcon } from '../../components.styled';

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
type Product = {
  title: string;
  cover: string;
  description: string;
  CategoryId: string;
  catalog: string;
};
type Attripute = {
  id: string;
  title: string;
  description: string;
};
const initialState = [{ id: uuid(), title: '', description: '' }];

const reducer = (state: Attripute[], action: any) => {
  let objindex: number;
  let oldAttr: Attripute;

  switch (action.type) {
    case 'add':
      return [...state, { ...action.attripute, id: uuid() }];
    case 'edit':
      objindex = state.findIndex(obj => obj.id === action.id);
      oldAttr = { ...state[objindex] };
      oldAttr.title = action.newAttr.title;
      oldAttr.description = action.newAttr.description;
      // eslint-disable-next-line no-param-reassign
      state[objindex] = { ...oldAttr };
      return [...state];
    case 'remove':
      return state.filter(ele => ele.id !== action.id);
    default:
      throw new Error('error in Attriputes Dispatcher');
  }
};
const AddProduct = () => {
  const [open, setOpen] = React.useState(false);
  const [category, setategory] = React.useState('');
  const [newProduct, setNewProduct] = React.useState<Product>({
    title: '',
    cover: '',
    description: '',
    CategoryId: '',
    catalog: '',
  });

  const [attriputes, attriputesDispatch] = React.useReducer(
    reducer,
    initialState,
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleProductChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(newProduct);

    setNewProduct(prev => ({ ...prev, [name]: value }));
  };
  const handlCategory = (event: SelectChangeEvent) => {
    setategory(event.target.value);
    setNewProduct(prev => ({ ...prev, CategoryId: event.target.value }));
  };
  const handleNewAttrChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(attriputes);
    console.log(e.target.id);

    attriputesDispatch({
      type: 'edit',
      newAttr: { id: e.target.id, description: '', title: e.target.value },
      id: e.target.id,
    });
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{ minHeight: '100%', top: '4rem', background: '#141417' }}
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
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>

        <List
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            background: '#141417',
            gap: '1.5rem',
            minHeight: '100%',
          }}
        >
          <TextInput
            handleProductChange={handleProductChange}
            name="title"
            newProduct={newProduct}
            label="Product Title"
          />

          <TextField
            sx={{
              borderRadius: '0.5rem',
              input: {
                color: '#FFFFFF',
              },
              label: { color: '#b1a9a9' },
              width: '50%',

              background:
                'linear-gradient(130.79deg, rgba(255, 255, 255, 0.08) -37.1%, rgba(255, 255, 255, 0) 134.47%)',
            }}
            name="description"
            onChange={handleProductChange}
            value={newProduct.description}
            id="outlined-multiline-static"
            label="Product Description"
            multiline
            rows={4}
          />

          <Select
            sx={{
              borderRadius: '0.5rem',
              background:
                'linear-gradient(130.79deg, rgba(255, 255, 255, 0.08) -37.1%, rgba(255, 255, 255, 0) 134.47%)',
              width: '50%',
              color: '#FFFFFF',
            }}
            IconComponent={arrowIcon}
            name="CategoryId"
            MenuProps={{
              PaperProps: {
                style: { width: '250px', height: '50%', overflowY: 'scroll' },
              },
            }}
            value={category}
            onChange={handlCategory}
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

          <Button
            sx={{
              borderRadius: '0.5rem',
              padding: '1rem 0',
              width: '50%',
              background:
                'linear-gradient(130.79deg, rgba(255, 255, 255, 0.08) -37.1%, rgba(255, 255, 255, 0) 134.47%)',
            }}
            variant="contained"
            component="label"
          >
            <CloudUploadIcon sx={{ marginRight: '1rem' }} />
            Product Cover
            <input hidden accept="image/*" type="file" />
          </Button>

          <Button
            sx={{
              borderRadius: '0.5rem',
              padding: '1rem 0',
              width: '50%',
              background:
                'linear-gradient(130.79deg, rgba(255, 255, 255, 0.08) -37.1%, rgba(255, 255, 255, 0) 134.47%)',
            }}
            variant="contained"
            component="label"
          >
            <CloudUploadIcon sx={{ marginRight: '1rem' }} />
            Product Gallery
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <Divider sx={{ height: '1px', width: '50%' }} color="#FFFFFF" />
          <Typography>Other Fields</Typography>

          {attriputes.map(attripute => {
            return (
              <TextField
                key={attripute.id}
                sx={{
                  borderRadius: '0.5rem',
                  input: { color: '#FFFFFF' },
                  label: { color: '#b1a9a9', marginLeft: '1rem' },
                  width: '50%',
                  background:
                    'linear-gradient(130.79deg, rgba(255, 255, 255, 0.08) -37.1%, rgba(255, 255, 255, 0) 134.47%)',
                }}
                onChange={handleNewAttrChange}
                value={attripute.title}
                id={attripute.id}
                label="Attripute title"
                variant="standard"
              />
            );
          })}
          <Divider sx={{ height: '1px', width: '50%' }} color="#FFFFFF" />
          <Button
            variant="outlined"
            sx={{ color: '#FFFFFF' }}
            startIcon={<NoteAddIcon />}
          >
            add New Field
          </Button>
          <Divider sx={{ height: '1px', width: '50%' }} color="#FFFFFF" />
        </List>
      </Dialog>
    </div>
  );
};
export default AddProduct;

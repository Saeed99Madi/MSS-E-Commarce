import * as React from 'react';

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

import { UploadServiceFiles } from './UploadServiceFiles';

import { IService } from '../../../../interfaces/IService';

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

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const AddService = (props: Props) => {
  const { open, setOpen } = props;

  const [newService, setNewService] = React.useState<IService>({
    title: '',
    description: '',
    active: false,
  });
  const [isChecked, setIsChecked] = React.useState(false);

  const handleIsChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setIsChecked(checked);
    setNewService(prev => ({ ...prev, active: checked }));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleProductChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewService(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveProduct = () => {
    const data = new FormData();
    if (!newService.cover) {
      return;
    }
    data.append('cover', newService.cover);
    data.append('title', newService.title);
    data.append('description', newService.description);
    ApiServices.post('services', data);
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
        Add Service
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
              Add Service
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
          <Typography sx={{ color: '#FFFFFF' }}>Add New Service</Typography>
          <TextInput
            handleProductChange={handleProductChange}
            name="title"
            newService={newService}
            label="Product Title"
          />

          <DescriptionInput
            key="Product Description"
            name="description"
            onChange={handleProductChange}
            value={newService.description}
            id="outlined-multiline-static"
            label="Product Description"
            multiline
            rows={4}
          />

          <UploadServiceFiles setNewService={setNewService} />

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
export default AddService;

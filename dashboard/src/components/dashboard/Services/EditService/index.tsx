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
import { toast } from 'react-toastify';
import TextInput from '../AddService/TextInput';

import { DescriptionInput, InputsList } from '../AddService/components.styled';
import ApiServices from '../../../../servises/ApiService';

import { UploadServiceFiles } from './UploadServiceFiles';

import { IService } from '../../../../interfaces/IService';
import { DashboardContext } from '../../../../context/DashboardContext';

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

const EditService = () => {
  const {
    openEditService,
    setOpenEditService,
    editIdService,
    services,
    setConfermMessage,
    setOpenConfermAlert,
    setConfermHandler,
    setServices,
  } = React.useContext(DashboardContext);

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

  const handleClose = () => {
    setOpenEditService(false);
  };
  const handleProductChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewService(prev => ({ ...prev, [name]: value }));
  };
  const checkserviceId = (service: IService) => {
    return service.id === editIdService;
  };
  React.useEffect(() => {
    const service = services.find(checkserviceId);
    if (service) {
      setNewService(service);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editIdService]);

  const handleSaveService = async () => {
    const formData = new FormData();
    if (newService.coverEdit) {
      formData.append('cover', newService.coverEdit);
    }
    formData.append('title', newService.title);
    formData.append('description', newService.description);
    try {
      const { data } = await ApiServices.put('services/update', formData);
      setServices(prev => {
        return prev.map(ele => {
          if (ele.id === newService.id) {
            return data.data;
          }
          return ele;
        });
      });
      if (data.status === 200) {
        toast.success(`Service have been updated successfully!`);
      }
      setOpenConfermAlert(false);
    } catch (err: any) {
      toast.error(err.message);
      toast.error(err.msg);
      setOpenConfermAlert(false);
    }
  };
  const handleSaveEdit = async () => {
    setConfermMessage('Are You Sure To Edit Service ?');
    setOpenConfermAlert(true);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setConfermHandler(prev => {
      return handleSaveService;
    });
  };

  return (
    <Box>
      <Dialog
        fullScreen
        open={openEditService}
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
                handleSaveEdit();
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

          <UploadServiceFiles
            servicee={newService}
            setNewService={setNewService}
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
export default EditService;

import * as React from 'react';
// import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import LoadingButton from '@mui/lab/LoadingButton';
import { DashboardContext } from '../../../context/DashboardContext';

const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Slide direction="up" ref={ref} {...props} />;
  },
);

const ConfermAction = () => {
  //   const [conferm, setConfirm] = useState(false);

  const {
    openConfermAlert,
    setOpenConfermAlert,
    confermHandler,
    // setConfermHandler,
    confermMessage,
  } = React.useContext(DashboardContext);

  const handleClose = () => {
    setOpenConfermAlert(false);
    // setConfirm(false);
  };

  return (
    <div>
      <Dialog
        open={openConfermAlert}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{
          style: {
            backgroundColor: '#D9D9D9',
          },
        }}
      >
        <DialogTitle> {confermMessage}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {confermMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            type="button"
            onClick={handleClose}
            sx={{
              padding: '12px 28px',
              background: 'linear-gradient(90deg, #25D366 0%, #128C7E 100%)',
              borderRadius: '50px',
              color: '#fff',
            }}
          >
            Disagree
          </Button>
          <LoadingButton
            sx={{
              padding: '12px 28px',
              background: 'linear-gradient(90deg, #FF5362 0%, #E52535 100%)',
              borderRadius: '50px',
              color: '#fff',
            }}
            onClick={confermHandler}
          >
            Yes Sure
            {openConfermAlert && <LoadingButton loading />}
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfermAction;

import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import LoadingButton from '@mui/lab/LoadingButton';
import { toast } from 'react-toastify';
import ApiServices from '../../../servises/ApiService';
import useSubcategories from '../../../hooks/getSubcategories';
import useCategories from '../../../hooks/getCategories';
import ToastMessage from '../ToastContainer';

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

interface Props {
  setOpen: Function;
  setSubCategory: Function;
  open: boolean;
  selectItemToDelete: string;
  selectedCategory: string;
  isSubcategory: boolean;
}

const AlertDialogSlide = ({
  setOpen,
  open,
  selectItemToDelete,
  setSubCategory,
  selectedCategory,
  isSubcategory,
}: Props) => {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const fetchSubcategories = useSubcategories(selectedCategory);
  const fetchCategories = useCategories();
  const handleClose = () => {
    setOpen(false);
    setConfirmDelete(false);
  };

  ApiServices.init();
  const handleConfirmDeletion = async () => {
    setConfirmDelete(true);
    try {
      const res = await ApiServices.destroy(
        `/categories/${selectItemToDelete}`,
      );

      if (res.status === 202 && isSubcategory) {
        const data = await fetchSubcategories(selectedCategory);
        setSubCategory(data);
        toast.success(`deleted category successfully`);
      } else if (res.status === 202 && !isSubcategory) {
        const data = await fetchCategories();
        setSubCategory(data);
        toast.success(`deleted category successfully`);
      }
    } catch (err: any) {
      toast.error(`${err?.response?.data?.msg}`);
    }
    setConfirmDelete(false);
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
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
        <DialogTitle>Are you sure to delete the category?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            If the category is deleted, the related products will also be
            deleted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            type="button"
            onClick={handleClose}
            style={{
              padding: '12px 28px',
              background: 'linear-gradient(90deg, #25D366 0%, #128C7E 100%)',
              borderRadius: '50px',
              color: '#fff',
            }}
          >
            Disagree
          </Button>
          <LoadingButton
            style={{
              padding: '12px 28px',
              background: 'linear-gradient(90deg, #FF5362 0%, #E52535 100%)',
              borderRadius: '50px',
              color: '#fff',
            }}
            onClick={handleConfirmDeletion}
          >
            Delete
            {confirmDelete && <LoadingButton loading />}
          </LoadingButton>
        </DialogActions>
      </Dialog>
      <ToastMessage />
    </div>
  );
};

export default AlertDialogSlide;

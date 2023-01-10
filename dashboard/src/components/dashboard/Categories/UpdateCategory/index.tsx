import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import { UpdateOutlined } from '@mui/icons-material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CircularProgress from '@mui/material/CircularProgress';
import { toast } from 'react-toastify';
import {
  CategoryDescriptionInput,
  CustomTextField,
  CustomCoverButton,
} from '../component.styled';
import useCategory from '../../../../hooks/getCategory';
import ApiServices from '../../../../servises/ApiService';
import { ICategories } from '../../../../interfaces/ICategories';

interface Props {
  open: boolean;
  setOpenUpdateCategory: Function;
  id: number | undefined | string;
}

const UpdateCategory = ({ open, setOpenUpdateCategory, id }: Props) => {
  const [category, setCategory] = useState<ICategories | undefined>();
  const [loader, setLoader] = useState(true);
  const fetchCategory = useCategory(id);

  useEffect(() => {
    (async () => {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const { id, title, description, cover } = await fetchCategory();
      setCategory({ id, title, description, cover });
      setLoader(false);
    })();
  }, []);

  const handleInput = (e: any) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    const { files } = e.target;

    if (inputName === 'title') {
      setCategory({ ...category, title: inputValue });
    } else if (inputName === 'description') {
      setCategory({ ...category, description: inputValue });
    } else if (inputName === 'cover') {
      setCategory({ ...category, cover: (files as any)[0] });
    }
  };

  // "Async"  function to send the data

  const AddCategoryCB = async () => {
    const data = new FormData();
    data.append('title', category?.title as string);
    data.append('description', category?.description as string);
    data.append('cover', category?.cover as string);
    data.append('id', category?.id as string);

    try {
      const res = await ApiServices.put(`/categories/${id}`, data);

      if (res.status === 200) {
        toast.success(`added category successfully`);
        setOpenUpdateCategory(false);
        window.location.reload();
      }
    } catch (err: any) {
      toast.error(`${err?.response?.data?.msg}`);
    }
  };

  const handleClose = () => {
    setOpenUpdateCategory(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            background: '#141417',
            color: '#FFFFFF',
            minHeight: '50vh',
            minWidth: '50vw',
          },
        }}
      >
        <DialogTitle
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            paragraph
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <UpdateOutlined
              fontSize="large"
              style={{
                marginRight: '1rem',
                fontSize: '28px',
              }}
            />
            Update Category
          </Typography>
          {loader && <CircularProgress size={25} />}
        </DialogTitle>
        <DialogContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          <CustomTextField
            sx={{
              input: { color: '#FFFFFF' },
              label: { color: '#b1a9a9', marginLeft: '1rem' },
            }}
            id="standard-basic"
            label="Category Name"
            variant="standard"
            name="title"
            onChange={handleInput}
            value={`${category?.title}`}
          />
          <CategoryDescriptionInput
            key="Category Description"
            name="description"
            onChange={handleInput}
            value={category?.description}
            id="outlined-multiline-static"
            label="Category Description"
            multiline
            rows={4}
          />
          <CustomCoverButton
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Category Cover
            <input
              name="cover"
              onChange={handleInput}
              hidden
              accept="image/*"
              type="file"
            />
          </CustomCoverButton>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={AddCategoryCB} disabled={loader}>
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UpdateCategory;

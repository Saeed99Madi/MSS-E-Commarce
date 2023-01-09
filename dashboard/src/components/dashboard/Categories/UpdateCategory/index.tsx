import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import { UpdateOutlined } from '@mui/icons-material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CircularProgress from '@mui/material/CircularProgress';
import { toast } from 'react-toastify';
import { CategoryDescriptionInput } from '../AddCategories/component.styled';
import useCategory from '../../../../hooks/getCategory';
import ApiServices from '../../../../servises/ApiService';

interface Props {
  open: boolean;
  setOpenUpdateCategory: Function;
  id: number;
}
interface Category {
  id?: any;
  title?: any;
  description?: any;
  cover?: any;
}

const UpdateCategory = ({ open, setOpenUpdateCategory, id }: Props) => {
  const [category, setCategory] = useState<Category | undefined>();
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
    console.log(inputValue);
    if (inputName === 'title') {
      setCategory({ ...category, title: inputValue });
    } else if (inputName === 'description') {
      setCategory({ ...category, description: inputValue });
    } else if (inputName === 'cover') {
      console.log('on cover block');
      setCategory({ ...category, cover: (files as any)[0] });
    }
    console.log('fffffffffffffffffffffffffffffffffffff');
    console.log(category);
    console.log('fffffffffffffffffffffffffffffffffffff');
  };

  // "Async"  function to send the data
  // ApiServices.init();
  const AddCategoryCB = async () => {
    const data = new FormData();
    data.append('title', category?.title);
    data.append('description', category?.description);
    data.append('cover', category?.cover);
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
              onChange={handleInput}
              hidden
              accept="image/*"
              type="file"
            />
          </Button>
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

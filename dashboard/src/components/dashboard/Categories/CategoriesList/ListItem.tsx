import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SubLIstItem from './SubLIstItem';
import { ICategories } from '../../../../interfaces/ICategories';
import useSubcategories from '../../../../hooks/getSubcategories';
import AlertDialogSlide from '../../DeleteDialog';
import UpdateCategory from '../UpdateCategory';

const theme = createTheme({
  palette: {
    info: {
      main: '#F6CD06',
    },
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

interface Props {
  open: boolean;
  categoryItem: ICategories | undefined;
  id: number;
  setCategory: Function;
}
const ListItem = ({ open, categoryItem, id, setCategory }: Props) => {
  const [openList, setOpenList] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [subCategory, setSubCategory] = useState<ICategories[]>();
  const [openDeleteConfirmation, setOpenDeleteConfirmation] = useState(false);
  const [openUpdateCategory, setOpenUpdateCategory] = useState(false);
  const fetchSubcategories = useSubcategories(selectedCategory);

  useEffect(() => {
    (async () => {
      const data = await fetchSubcategories(selectedCategory);
      setSubCategory(data);
    })();
  }, [selectedCategory]);

  const handleClick = (e: any) => {
    e.stopPropagation();
    setSelectedCategory(e.currentTarget.id);
    setOpenList(!openList);
  };

  const handleEditBtn = (e: any) => {
    e.stopPropagation();
    setOpenUpdateCategory(true);
  };

  const handleDeleteBtn = (e: any) => {
    e.stopPropagation();
    setOpenDeleteConfirmation(true);
    setSelectedCategory(e.currentTarget.parentElement.id);
  };

  return (
    <>
      <List
        sx={{ width: `${!open ? '85%' : '100%'}`, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        style={{
          background:
            'linear-gradient(130.79deg, rgba(255, 255, 255, 0.08) -37.1%, rgba(255, 255, 255, 0) 134.47%)',
          borderRadius: '12px',
          borderTop: '2px solid #424244',
        }}
      >
        <ListItemButton
          onClick={handleClick}
          style={{ height: '54px' }}
          id={`${id}`}
        >
          <ListItemIcon sx={{ pl: 2 }}>
            {openList ? (
              <div
                style={{
                  backgroundColor: '#F6CD06',
                  width: '16px',
                  height: '2px',
                }}
              />
            ) : (
              <div
                style={{
                  color: '#ffff',
                  fontSize: '2rem',
                }}
              >
                {' '}
                +{' '}
              </div>
            )}
          </ListItemIcon>
          <ListItemText>
            <p>
              {categoryItem?.title}
              <span
                style={{
                  color: '#FFFFFF',
                  opacity: '0.5',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {`${
                  subCategory?.length
                    ? `Subcategory - ${subCategory?.length}`
                    : 'Subcategory'
                }`}
              </span>
            </p>
          </ListItemText>
          <ModeEditOutlineOutlinedIcon
            onClick={handleEditBtn}
            style={{ marginRight: '20px' }}
          />
          <DeleteOutlinedIcon onClick={handleDeleteBtn} />
        </ListItemButton>

        <Collapse in={openList} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {subCategory?.length ? (
              subCategory?.map(ele => {
                return (
                  <SubLIstItem
                    key={ele.id}
                    ele={ele}
                    id={ele.id}
                    setSubCategory={setSubCategory}
                    selectedCategory={selectedCategory}
                  />
                );
              })
            ) : (
              <Stack>
                <ThemeProvider theme={theme}>
                  <Alert
                    sx={{ pl: 3.8 }}
                    style={{ backgroundColor: 'inherit', color: '#fff' }}
                    severity="info"
                  >
                    There is no data !
                  </Alert>
                </ThemeProvider>
              </Stack>
            )}
          </List>
        </Collapse>
      </List>
      <AlertDialogSlide
        setOpen={setOpenDeleteConfirmation}
        open={openDeleteConfirmation}
        selectItemToDelete={selectedCategory}
        setSubCategory={setCategory}
        selectedCategory={selectedCategory}
        isSubcategory={false}
      />
      <UpdateCategory
        open={openUpdateCategory}
        setOpenUpdateCategory={setOpenUpdateCategory}
        id={id}
      />
    </>
  );
};

export default ListItem;

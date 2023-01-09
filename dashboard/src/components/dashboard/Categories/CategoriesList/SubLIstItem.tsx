import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useState } from 'react';
import { ICategories } from '../../../../interfaces/ICategories';
import ApiServices from '../../../../servises/ApiService';
import AlertDialogSlide from '../../DeleteDialog';
import UpdateCategory from '../UpdateCategory';

interface Props {
  ele: ICategories;
  id: number;
  setSubCategory: Function;
  selectedCategory: string;
}

const SubLIstItem = ({ ele, id, setSubCategory, selectedCategory }: Props) => {
  const [open, setOpen] = useState(false);
  const [selectItemToDelete, setSelectItemToDelete] = useState('');
  const [openUpdateCategory, setOpenUpdateCategory] = useState(false);

  ApiServices.init();
  const handleDeleteBtn = (e: any) => {
    e.stopPropagation();
    setOpen(true);
    setSelectItemToDelete(e.currentTarget.parentElement.parentElement.id);
  };
  const handleEditBtn = (e: any) => {
    e.stopPropagation();
    setOpenUpdateCategory(true);
  };

  return (
    <>
      <div style={{ borderTop: '2px solid #424244' }} id={`${id}`}>
        <ListItemButton sx={{ pl: 4.5 }}>
          <ListItemIcon>
            <img src="/timeline.svg" alt="logo" />
          </ListItemIcon>
          <p style={{ marginLeft: '-20px' }}> {ele.title}</p>
          <ListItemText />
          <ModeEditOutlineOutlinedIcon
            onClick={handleEditBtn}
            style={{ marginRight: '20px' }}
          />
          <DeleteOutlinedIcon onClick={handleDeleteBtn} />
        </ListItemButton>
      </div>
      <AlertDialogSlide
        setOpen={setOpen}
        open={open}
        selectItemToDelete={selectItemToDelete}
        setSubCategory={setSubCategory}
        selectedCategory={selectedCategory}
        isSubcategory
      />
      <UpdateCategory
        open={openUpdateCategory}
        setOpenUpdateCategory={setOpenUpdateCategory}
        id={id}
      />
    </>
  );
};

export default SubLIstItem;

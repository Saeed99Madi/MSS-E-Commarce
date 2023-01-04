import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useState } from 'react';
import { ICategories } from '../../../../interfaces/ICategories';
import ApiServices from '../../../../servises/ApiService';
import AlertDialogSlide from '../../DeleteDialog';

interface Props {
  ele: ICategories;
  id: number;
  setSubCategory: Function;
  selectedCategory: string;
}

const SubLIstItem = ({ ele, id, setSubCategory, selectedCategory }: Props) => {
  const [open, setOpen] = useState(false);
  const [selectItemToDelete, setSelectItemToDelete] = useState('');

  ApiServices.init();
  const handleDeleteBtn = (e: any) => {
    e.stopPropagation();
    setOpen(true);
    setSelectItemToDelete(e.currentTarget.parentElement.parentElement.id);
  };
  const handleEditBtn = (e: any) => {
    e.stopPropagation();

    console.log('handleEditBtn in subcategories now is running');
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
    </>
  );
};

export default SubLIstItem;

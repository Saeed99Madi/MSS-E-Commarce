import { useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { ICategories } from '../../../../interfaces/ICategories';
import ApiServices from '../../../../servises/ApiService';
import AlertDialogSlide from '../../DeleteDialog';
import UpdateCategory from '../UpdateCategory';
import { SubLIstItemWrapper, EditIcon } from './component.style';

interface Props {
  ele: ICategories;
  id: number | undefined | string;
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
      <SubLIstItemWrapper id={`${id}`}>
        <ListItemButton sx={{ pl: 4.5 }}>
          <ListItemIcon>
            <img src="/timeline.svg" alt="logo" />
          </ListItemIcon>
          <p style={{ marginLeft: '-20px' }}>{ele.title as string}</p>
          <ListItemText />
          <EditIcon onClick={handleEditBtn} />
          <DeleteOutlinedIcon onClick={handleDeleteBtn} />
        </ListItemButton>
      </SubLIstItemWrapper>
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

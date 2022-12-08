import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { ICategories } from '../../../../interfaces/ICategories';

const SubLIstItem = ({ ele }: { ele: ICategories }) => {
  const handleEditBtn = (e: any) => {
    e.stopPropagation();

    console.log('handleEditBtn in subcategories now is running');
  };

  const handleDeleteBtn = (e: any) => {
    e.stopPropagation();

    console.log('handleDeleteBtn in subcategories now is running');
  };

  return (
    <div style={{ borderTop: '2px solid #424244' }}>
      <ListItemButton sx={{ pl: 4.5 }}>
        <ListItemIcon>
          {/* <StarBorder /> */}
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
  );
};

export default SubLIstItem;

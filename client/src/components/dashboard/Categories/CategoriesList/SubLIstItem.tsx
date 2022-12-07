import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const SubLIstItem = () => {
  const handleEditBtn = (e: any) => {
    e.stopPropagation();

    console.log('handleEditBtn now is running');
  };

  const handleDeleteBtn = (e: any) => {
    e.stopPropagation();

    console.log('handleDeleteBtn now is running');
  };

  return (
    <ListItemButton sx={{ pl: 4.5 }}>
      <ListItemIcon>
        {/* <StarBorder /> */}
        <img src="/timeline.svg" alt="logo" />
      </ListItemIcon>
      <p style={{ marginLeft: '-20px' }}> Subcategory Name</p>
      <ListItemText />
      <ModeEditOutlineOutlinedIcon
        onClick={handleEditBtn}
        style={{ marginRight: '20px' }}
      />
      <DeleteOutlinedIcon onClick={handleDeleteBtn} />
    </ListItemButton>
  );
};

export default SubLIstItem;

import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import SubLIstItem from './SubLIstItem';

const ListItem = ({ open }: { open: boolean }) => {
  const [openList, setOpenList] = React.useState(true);

  const handleClick = (e: any) => {
    e.stopPropagation();

    console.log('handleClick now is running');

    setOpenList(!openList);
  };

  const handleEditBtn = (e: any) => {
    e.stopPropagation();

    console.log('handleEditBtn now is running');
  };

  const handleDeleteBtn = (e: any) => {
    e.stopPropagation();

    console.log('handleDeleteBtn now is running');
  };

  return (
    <List
      sx={{ width: `${!open ? '85%' : '100%'}`, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      style={{
        background:
          'linear-gradient(130.79deg, rgba(255, 255, 255, 0.08) -37.1%, rgba(255, 255, 255, 0) 134.47%)',
        borderRadius: '12px',
      }}
    >
      <ListItemButton onClick={handleClick} style={{ height: '54px' }}>
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
            Category Name{' '}
            <span
              style={{
                color: '#FFFFFF',
                opacity: '0.5',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              Subcategory - 5
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
          <SubLIstItem />
          <SubLIstItem />
          <SubLIstItem />
        </List>
      </Collapse>
    </List>
  );
};

export default ListItem;

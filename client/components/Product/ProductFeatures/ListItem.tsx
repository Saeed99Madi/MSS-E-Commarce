import { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { FeaturesList } from '../components.styled';

type Props = {
  feature: {
    id: string;
    title: string;
    description: string;
    productID?: number;
    createdAt?: string;
    updatedAt?: string;
  };
};

const ListItem = ({ feature }: Props) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <FeaturesList aria-labelledby="nested-list-subheader">
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={`${feature.title}`} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary={`${feature.description}`} />
          </ListItemButton>
        </List>
      </Collapse>
    </FeaturesList>
  );
};

export default ListItem;

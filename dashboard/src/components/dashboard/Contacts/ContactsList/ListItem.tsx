// import { useState, useEffect } from 'react';
// import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import VisibilityIcon from '@mui/icons-material/Visibility';
// import Collapse from '@mui/material/Collapse';
// import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
// import Alert from '@mui/material/Alert';
// import Stack from '@mui/material/Stack';

import { useContext } from 'react';
import {
  ParentListItem,
  CloseSign,
  OpenSign,
  CustomSpan,
} from './component.style';

import { DrawerHeader } from '../../components.styled';

import { IContact } from '../../../../interfaces/IContact';
import { DashboardContext } from '../../../../context/DashboardContext';

// const theme = createTheme({
//   palette: {
//     info: {
//       main: '#F6CD06',
//     },
//   },
// });

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
type Props = {
  contact: IContact;
};
const ListItem = ({ contact }: Props) => {
  const { setSlectedContact, setOpenShowContact } =
    useContext(DashboardContext);

  const handleOpenShowContact = () => {
    setOpenShowContact(true);
    setSlectedContact(contact.id);
  };
  return (
    <>
      <DrawerHeader />
      <ParentListItem
        onClick={handleOpenShowContact}
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton
          sx={{
            height: '54px',
          }}
        >
          <ListItemIcon sx={{ pl: 2 }}>
            <VisibilityIcon
              onClick={handleOpenShowContact}
              sx={{ color: '#FFFFFF' }}
            />
          </ListItemIcon>
          <ListItemText>
            <p>
              {contact.name}
              <CustomSpan>{contact.shortContent}...</CustomSpan>
            </p>
          </ListItemText>
        </ListItemButton>
      </ParentListItem>
    </>
  );
};

export default ListItem;

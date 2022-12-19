import { useContext, useState } from 'react';

import { Box, MenuItem } from '@mui/material';
import { arrowIcon } from '../../../components.styled';
import { SelectCats } from '../../AddService/components.styled';
import ApiServices from '../../../../../servises/ApiService';
import { DashboardContext } from '../../../../../context/DashboardContext';

const actions = [
  { id: 1, name: 'Puplish' },
  { id: 2, name: 'Un Puplish' },
  { id: 3, name: 'Delete' },
  { id: 4, name: 'Select All' },
  { id: 5, name: 'un Select All' },
];
ApiServices.init();

export const MarkAs = () => {
  const { checkedServices, setIsCheckedServices, services, setServices } =
    useContext(DashboardContext);
  const [markas, setmarkAs] = useState<Array<string>>([]);
  const handleMarkAs = (e: any) => {
    const { value } = e.target;
    setmarkAs(e.target.value);
    switch (value) {
      case '1':
        ApiServices.put('services/publish', [...checkedServices]);
        break;
      case '2':
        ApiServices.put('services/unpublish', [...checkedServices]);
        break;
      case '3':
        ApiServices.destroy(`services/delete/${[...checkedServices]}`);
        break;
      case '4':
        // eslint-disable-next-line no-case-declarations
        const newproduct = services.map(ele => {
          // eslint-disable-next-line no-param-reassign
          ele.checked = true;
          return { ...ele };
        });
        setServices([...newproduct]);
        setIsCheckedServices(services.map(ele => ele.id ?? 0));
        break;
      case '5':
        setServices(
          services.map(ele => {
            // eslint-disable-next-line no-param-reassign
            ele.checked = false;
            return { ...ele };
          }),
        );
        setIsCheckedServices([]);

        break;
      default:
        throw new Error('error in Mark As actions');
    }
  };
  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '2rem 12.9rem 2rem 0',
      width: '10%',
      color: '#FFFFFF',
    },
  };

  return (
    <Box sx={styles.header}>
      <SelectCats
        sx={{ width: '100%' }}
        IconComponent={arrowIcon}
        name="acrion"
        value={markas}
        onChange={handleMarkAs}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value="">
          <em>Mark As</em>
        </MenuItem>
        {actions.map(ele => {
          return (
            <MenuItem key={ele.id} value={`${ele.id}`}>
              {ele.name}
            </MenuItem>
          );
        })}
      </SelectCats>
    </Box>
  );
};

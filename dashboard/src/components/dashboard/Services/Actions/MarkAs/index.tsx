/* eslint-disable no-param-reassign */
import { useContext, useState } from 'react';

import { Box, MenuItem } from '@mui/material';
import { toast } from 'react-toastify';
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
  const {
    checkedServices,
    setIsCheckedServices,
    services,
    setServices,
    setConfermMessage,
    setOpenConfermAlert,
    setConfermHandler,
  } = useContext(DashboardContext);
  const [markas, setmarkAs] = useState<string>('');
  const handleMarkAs = async (e: any) => {
    const { value } = e.target;
    setmarkAs(e.target.value);
    switch (value) {
      case '1':
        setConfermMessage('Are You Sure To publish Service/s ?');
        setOpenConfermAlert(true);
        setmarkAs('');
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        setConfermHandler(prev => {
          return async () => {
            // eslint-disable-next-line no-case-declarations
            try {
              const { data } = await ApiServices.put('services/publish', [
                ...checkedServices,
              ]);
              if (data.status === 200) {
                toast.success('Service/s have been published successfuly!');
              }
            } catch (err: any) {
              toast.error(err.message);
              toast.error(err.msg);
            }

            const updatedServices = services.map(element => {
              if (checkedServices.includes(element.id || 0)) {
                element.active = true;
                return element;
              }
              return element;
            });
            setServices(updatedServices);
            setServices(
              updatedServices.map(ele => {
                // eslint-disable-next-line no-param-reassign
                ele.checked = false;
                return { ...ele };
              }),
            );
            setIsCheckedServices([]);
            setmarkAs('');
            setOpenConfermAlert(false);
          };
        });

        break;
      case '2':
        setConfermMessage('Are You Sure To Unpuplish Service/s ?');
        setOpenConfermAlert(true);
        setmarkAs('');
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        setConfermHandler(prev => {
          return async () => {
            // eslint-disable-next-line no-case-declarations
            try {
              // eslint-disable-next-line no-case-declarations
              const { data } = await ApiServices.put('services/unpublish', [
                ...checkedServices,
              ]);
              if (data.status === 200) {
                toast.success('Service/s have been unpublished successfuly!');
              }
            } catch (err: any) {
              toast.error(err.message);
              toast.error(err.msg);
            }

            const updatedServices = services.map(element => {
              if (checkedServices.includes(element.id || 0)) {
                element.active = true;
                return element;
              }
              return element;
            });
            setServices(updatedServices);
            setServices(
              updatedServices.map(ele => {
                // eslint-disable-next-line no-param-reassign
                ele.checked = false;
                return { ...ele };
              }),
            );
            setIsCheckedServices([]);
            setmarkAs('');
            setOpenConfermAlert(false);
          };
        });

        break;
      case '3':
        setConfermMessage('Are You Sure To Delete Service/s ?');
        setOpenConfermAlert(true);
        setmarkAs('');
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        setConfermHandler(prev => {
          return async () => {
            // eslint-disable-next-line no-case-declarations
            try {
              // eslint-disable-next-line no-case-declarations
              const { data } = await ApiServices.destroy(
                `services/delete/${[...checkedServices]}`,
              );
              if (data.status === 200) {
                toast.success('Service/s have been deleted successfuly!');
              }
            } catch (err: any) {
              toast.error(err.message);
              toast.error(err.msg);
            }

            const updatedServices = services.filter(
              element => !checkedServices.includes(element.id || 0),
            );

            setServices(updatedServices);
            setServices(
              updatedServices.map(ele => {
                // eslint-disable-next-line no-param-reassign
                ele.checked = false;
                return { ...ele };
              }),
            );
            setIsCheckedServices([]);
            setmarkAs('');
            setOpenConfermAlert(false);
          };
        });
        break;
      case '4':
        // eslint-disable-next-line no-case-declarations
        const newproduct = services.map(ele => {
          // eslint-disable-next-line no-param-reassign
          ele.checked = true;
          return { ...ele };
        });
        setServices([...newproduct]);
        toast.success('All Services have been selected successfuly!');
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
        toast.success('All Services have been unselected successfuly!');

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

import { ChangeEvent, useContext, useEffect, useState } from 'react';

import { Box, Button, Typography } from '@mui/material';

import { DashboardContext } from '../../../../context/DashboardContext';

import ApiServices from '../../../../servises/ApiService';
import { IService } from '../../../../interfaces/IService';
import { EditIcon } from '../../Categories/CategoriesList/component.style';

ApiServices.init();
type Props = {
  service: IService;
};

export const ServiceCard = ({ service }: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  const { setIsCheckedServices, setEditIdService, setOpenEditService } =
    useContext(DashboardContext);
  useEffect(() => {
    if (service.checked) {
      setIsChecked(service.checked);
    } else {
      setIsChecked(false);
    }
  }, [service]);
  const handleIsChecked = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;
    const serviceId = +value;
    if (checked) {
      setIsCheckedServices((prev: Array<number>) => {
        return [...prev, serviceId];
      });
    } else if (!checked) {
      setIsCheckedServices((prev: Array<number>) => {
        return prev.filter(ele => ele !== serviceId);
      });
    }
    setIsChecked(checked);
  };
  const handleOpenEditService = () => {
    if (service.id) {
      setEditIdService(service.id);
    }
    setOpenEditService(true);
  };

  return (
    <Box
      sx={{
        width: '15rem',
        height: 'auto',
        background:
          'linear-gradient(125.86deg, rgba(255, 255, 255, 0.18) -267.85%, rgba(255, 255, 255, 0) 138.29%)',
        backdropFilter: 'blur(5.73932px)',
        borderRadius: '12px',
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingTop: '8px',
        }}
      >
        <Box
          sx={{
            width: '13rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            margin: '8px 0',
            paddingLeft: '1rem',
          }}
        >
          <Typography sx={{ color: '#FFFFFF', margin: '0' }} paragraph>
            {service.title}
          </Typography>
        </Box>
        <img
          style={{
            height: '10rem',
            width: '13rem',
            marginBottom: '1rem',
            alignSelf: 'center',
            borderRadius: '12px',
            boxSizing: 'border-box',
          }}
          src={`${process.env.REACT_APP_BASEE_URL}/services/${service.cover}`}
          alt="Renewable energy"
          loading="lazy"
        />

        <div
          style={{
            position: 'absolute',
            display: 'flex',
            top: '8px',
            right: '1rem',
            borderRadius: '50',
          }}
        >
          <Button
            onClick={handleOpenEditService}
            sx={{ minWidth: 'auto', margin: '0', padding: '0' }}
            startIcon={<EditIcon sx={{ margin: '0', padding: '0' }} />}
          />
          <input
            style={{
              borderRadius: '50',
            }}
            value={service.id}
            type="checkbox"
            onChange={handleIsChecked}
            checked={isChecked}
          />
        </div>
      </Box>
    </Box>
  );
};

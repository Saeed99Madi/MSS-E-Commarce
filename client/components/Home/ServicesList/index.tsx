import OutboxOutlinedIcon from '@mui/icons-material/OutboxOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { Button, Typography } from '@mui/material';
import {
  IconContainer,
  ServiceCard,
  ServiceInfo,
  ServicesContainer,
} from './components.styled';
// type Props = {
//   error: { error: string };
// };

const ServicesList = () => {
  return (
    <ServicesContainer>
      <ServiceCard>
        <IconContainer>
          <OutboxOutlinedIcon sx={{ color: '#cf9f1c ' }} />
        </IconContainer>
        <ServiceInfo>
          <Typography sx={{ fontSize: '1.5rem', color: '#FFFFFF' }} paragraph>
            Make A Deal On Our Products.
          </Typography>
          <Typography
            sx={{ fontSize: '0.7rem', width: '80%', color: '#FFFFFF' }}
            paragraph
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            esse quaerat soluta dolores possimus deserunt animi perferendis hic
            pariatur natus beatae.
          </Typography>
          <Button
            sx={{
              color: '#FFFFFF',
              background: 'linear-gradient(90deg, #F6CD06 0%, #EFB92A 100%)',
            }}
          >
            Check Products
          </Button>
        </ServiceInfo>
      </ServiceCard>
      <ServiceCard>
        <IconContainer>
          <LocalShippingOutlinedIcon sx={{ color: '#FF5362 ' }} />
        </IconContainer>
        <ServiceInfo>
          <Typography sx={{ fontSize: '1.5rem', color: '#FFFFFF' }} paragraph>
            Make A Deal On Our Products.
          </Typography>
          <Typography
            sx={{ fontSize: '0.7rem', width: '80%', color: '#FFFFFF' }}
            paragraph
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            esse quaerat soluta dolores possimus deserunt animi perferendis hic
            pariatur natus beatae.
          </Typography>
          <Button
            sx={{
              color: '#FFFFFF',
              background: 'Linear-gradient(90deg, #FF5362 0%, #E52535 100%)',
            }}
          >
            Check Products
          </Button>
        </ServiceInfo>
      </ServiceCard>
    </ServicesContainer>
  );
};

export default ServicesList;

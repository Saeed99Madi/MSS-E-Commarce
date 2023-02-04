import OutboxOutlinedIcon from '@mui/icons-material/OutboxOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { Button, Typography } from '@mui/material';
import {
  BoxColumn,
  IconContainer,
  ServiceCard,
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
          <OutboxOutlinedIcon
            sx={{
              color: '#cf9f1c ',
              fontSize: '2.5rem',
              '@media screen and (max-width: 850px)': {
                width: '1.7rem',
                fontSize: 'auto',
              },
            }}
          />
        </IconContainer>
        <BoxColumn>
          <Typography
            sx={{ margin: '0', fontSize: '2.5rem', color: '#FFFFFF' }}
            paragraph
          >
            Make A Deal On Our Products.
          </Typography>
          <Typography sx={{ width: '80%', color: '#FFFFFF' }} paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            esse quaerat soluta dolores possimus deserunt animi perferendis hic
            pariatur natus beatae.
          </Typography>
          <Button
            sx={{
              textTransform: 'none',
              color: '#FFFFFF',
              background: 'linear-gradient(90deg, #F6CD06 0%, #EFB92A 100%)',
            }}
          >
            Check Products
          </Button>
        </BoxColumn>
      </ServiceCard>
      <ServiceCard>
        <IconContainer>
          <LocalShippingOutlinedIcon
            sx={{
              color: '#FF5362',
              fontSize: '2.5rem',
              '@media screen and (max-width: 850px)': {
                width: '1.7rem',
                fontSize: 'auto',
              },
            }}
          />
        </IconContainer>
        <BoxColumn>
          <Typography
            sx={{ margin: '0', fontSize: '2.5rem', color: '#FFFFFF' }}
            paragraph
          >
            Make A Deal On Our Products.
          </Typography>
          <Typography sx={{ width: '80%', color: '#FFFFFF' }} paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            esse quaerat soluta dolores possimus deserunt animi perferendis hic
            pariatur natus beatae.
          </Typography>
          <Button
            sx={{
              color: '#FFFFFF',
              background: 'Linear-gradient(90deg, #FF5362 0%, #E52535 100%)',
              textTransform: 'none',
            }}
          >
            Check Products
          </Button>
        </BoxColumn>
      </ServiceCard>
    </ServicesContainer>
  );
};

export default ServicesList;

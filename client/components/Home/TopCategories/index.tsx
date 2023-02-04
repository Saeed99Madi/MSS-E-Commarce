import { Typography } from '@mui/material';
import {
  BlackButton,
  BlackCard,
  BlackCardInfo,
  BlackCardOverview,
  CategoriesList,
  GrayButton,
  ImageWrapper,
  TopCategoriesContainer,
  WhiteButton,
  YellowCard,
  RedCard,
} from './components.styled';
// type Props = {
//   error: { error: string };
// };background:'linear-gradient(90deg, #FF5362 0%, #E52535 100%)'

const TopCategories = () => {
  return (
    <TopCategoriesContainer>
      <Typography
        sx={{ textAlign: 'center', fontSize: '1.5rem', padding: '1.5rem' }}
      >
        Top Categories
      </Typography>
      <CategoriesList>
        <BlackCard>
          <BlackCardInfo>
            <img
              style={{ width: '40%', height: '100%' }}
              src="https://images.unsplash.com/photo-1673868077539-9c3120f78420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="Solar Food"
            />
            <BlackCardOverview>
              <Typography sx={{ color: '#FFFFFF', fontSize: '0.7rem' }}>
                Category Name
              </Typography>
              <Typography sx={{ color: '#F6CD06' }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                adipisicing elit. Nesciunt dolorum eaque suscipit! adipisicing
                adipisicing elit.
              </Typography>
            </BlackCardOverview>
          </BlackCardInfo>
          <GrayButton>More Info</GrayButton>
        </BlackCard>

        <YellowCard>
          <ImageWrapper
            sx={{
              background: 'linear-gradient(to right, #FFFFFF, #F6CD06)',
            }}
          >
            <img
              style={{
                width: '99%',
                height: '99.8%',
                marginTop: 'auto',
              }}
              src="https://plus.unsplash.com/premium_photo-1661695337810-0f56cde8bdfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="solar legs"
            />
          </ImageWrapper>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                width: '50%',
                textAlign: 'center',
                color: '#FFFFFF',
                fontSize: '0.7rem',
              }}
            >
              Category Name
            </Typography>
            <Typography sx={{ width: '80%', textAlign: 'center' }}>
              Lorem ipsum dolor amet consectetur elit.
            </Typography>
            <BlackButton>More Info</BlackButton>
          </div>
        </YellowCard>

        <RedCard>
          <ImageWrapper>
            <img
              style={{
                width: '99%',
                height: '99.8%',
                marginBottom: 'auto',
              }}
              src="https://plus.unsplash.com/premium_photo-1661695337810-0f56cde8bdfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="solar legs"
            />
          </ImageWrapper>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{ width: '50%', textAlign: 'center', fontSize: '0.7rem' }}
            >
              Category Name
            </Typography>
            <Typography sx={{ width: '80%', textAlign: 'center' }}>
              Lorem ipsum dolor amet consectetur elit.
            </Typography>
            <WhiteButton>More Info</WhiteButton>
          </div>
        </RedCard>
      </CategoriesList>
    </TopCategoriesContainer>
  );
};

export default TopCategories;

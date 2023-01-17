import {
  Grid,
  Input,
  InputAdornment,
  Link,
  Tooltip,
  Typography,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
  CustomEmailIcon,
  FooterContainer,
  IconWrapper,
  InputContainer,
  RedButton,
  SocialList,
  SubscribeContainer,
} from './components.styled';

const LinkStyle = { color: '#000000', textDecoration: 'none', padding: '1rem' };
const Footer = () => {
  return (
    <FooterContainer>
      <img
        src={`${process.env.REACT_APP_BASEE_URL}settings/Group.png`}
        alt="logo"
      />
      <Grid container justifyContent="center">
        <Grid item>
          <Tooltip disableFocusListener title="Home">
            <Link sx={LinkStyle} href="/">
              Home
            </Link>
          </Tooltip>
        </Grid>

        <Grid item>
          <Tooltip disableFocusListener title="Home">
            <Link sx={LinkStyle} href="/">
              All Categories
            </Link>
          </Tooltip>
        </Grid>

        <Grid item>
          <Tooltip disableFocusListener title="Home">
            <Link sx={LinkStyle} href="/">
              Contact Us
            </Link>
          </Tooltip>
        </Grid>

        <Grid item>
          <Tooltip disableFocusListener title="Home">
            <Link sx={LinkStyle} href="/">
              About Us
            </Link>
          </Tooltip>
        </Grid>
      </Grid>
      <SubscribeContainer>
        <InputContainer>
          <Input
            disableUnderline
            placeholder="Start Now"
            startAdornment={
              <InputAdornment position="start">
                <CustomEmailIcon />
              </InputAdornment>
            }
          />
          <RedButton>Subscripe Now</RedButton>
        </InputContainer>
        <IconWrapper />
      </SubscribeContainer>
      <SocialList>
        <Link href="/">
          <FacebookIcon sx={{ color: '#1877F2', fontSize: '2rem' }} />
        </Link>
        <Link href="/">
          <GoogleIcon sx={{ color: '#EA4335', fontSize: '2rem' }} />
        </Link>
        <Link href="/">
          <TwitterIcon sx={{ color: '#55ACEE', fontSize: '2rem' }} />
        </Link>
      </SocialList>
      <Typography
        sx={{
          color: '#666666',
          fontSize: '0.7rem',
          '@media screen and (max-width: 850px)': {
            fontSize: '0.5rem',
          },
        }}
        paragraph
      >
        All Rights Are Reserveed By MSS. By Dev. Said Madi
      </Typography>
    </FooterContainer>
  );
};

export default Footer;

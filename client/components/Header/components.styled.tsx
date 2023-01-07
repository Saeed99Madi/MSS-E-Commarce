import { styled } from '@mui/system';

import { Avatar, Box, Button, Input, Typography } from '@mui/material';

import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import SearchIcon from '@mui/icons-material/Search';

import HomeIcon from '@mui/icons-material/Home';
import Diversity1Icon from '@mui/icons-material/Diversity1';

import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import CloseIcon from '@mui/icons-material/Close';
import AppsIcon from '@mui/icons-material/Apps';
import Link from 'next/link';

const IconsStyle = {
  display: 'none',
  '@media screen and (max-width: 850px)': {
    display: 'inline-block',
    fontSize: '1.5em',
    marginRight: '5px',
  },
};

const CloseIconNav = styled(CloseIcon)({
  display: 'none',
  '@media screen and (max-width: 850px)': {
    display: 'block',
    color: '#222',
    position: 'absolute',
    top: '0',
    right: '0',
    fontSize: '1.3em',
    margin: '10px',
    cursor: 'pointer',
  },
});

const AppsIconNav = styled(AppsIcon)({
  display: 'none',
  '@media screen and (max-width: 850px)': {
    display: 'block',
    fontSize: '1.5em',
    marginRight: '5px',
    order: '10',
  },
});

const HomeIconNav = styled(HomeIcon)(IconsStyle);

const HomeRepairServiceIconNav = styled(HomeRepairServiceIcon)(IconsStyle);

const Diversity1IconNav = styled(Diversity1Icon)(IconsStyle);

const StyledHeader = styled('header')({
  zIndex: '10',
  position: 'relative',
  background: 'rgba(90, 89, 89, 0.0)',
  backdropFilter: 'blur(1px)',
  height: '5em',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  top: '0',
  left: '0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 35px',
  transition: '0.5s ease',
  gap: '1rem',
  '@media screen and (max-width: 850px)': {
    padding: '0 20px',
    gap: '0.5rem',
    height: '3em',
  },
});

const NavigationAnchor = styled(Link)({
  color: '#000116',
  fontSize: '1em',
  textDecoration: 'none',
  marginLeft: '50px',
  fontWeight: 'bold',
  '@media screen and (max-width: 850px)': {
    color: '#222',
    fontSize: '1em',
    margin: '15px 50px',
  },
});

const Navigations = styled(Box)({
  '.nav-items': {
    justifyContent: 'center',
  },
  '@media screen and (max-width: 850px)': {
    zIndex: '99999',
    position: 'fixed',
    background: 'rgba(223, 219, 219, 0.5)',
    width: '100%',
    height: '100vh',
    top: '0',
    left: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    visibility: 'hidden',
    opacity: '0',
    transition: '0.3s ease',

    '&.active': {
      visibility: 'visible',
      opacity: '1',
    },
    '&.active .nav-items': {
      transform: 'translateY(0)',
    },

    '.nav-items': {
      position: 'relative',
      background: '#fff',
      width: '400px',
      maxWidth: '400px',
      display: 'grid',
      placeContent: 'center',
      margin: '20px',
      padding: '40px',
      borderRadius: '20px',
      boxShadow: '0 5px 25px rgba(0, 0, 0, 0.8)',
      transform: 'translateY(-10px)',
      transition: '0.3s ease',
      '@media screen and (max-width: 850px)': { transform: 'translateY(0)' },
    },
  },
});

const NavItems = styled('nav')({
  fontWeight: '500',
});

const LogoImage = styled('img')({
  width: '5rem',
  '@media screen and (max-width: 850px)': { width: '4rem' },
});

const ActionsBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1rem',
  '@media screen and (max-width:850px)': {
    marginLeft: 'auto',
    gap: '0.5rem',
  },
});

const SearchInput = styled(Input)({
  '@media screen and (max-width:450px)': {
    fontSize: '0.5rem',
  },
});

const SearchInputIcon = styled(SearchIcon)({
  '@media screen and (max-width:450px)': {
    fontSize: '0.5rem',
  },
});

const EmergencyAvatar = styled(Avatar)({
  backgroundColor: '#D53449',
  width: 40,
  height: 40,
  cursor: 'pointer',
  '@media screen and (max-width:850px)': {
    width: 25,
    height: 25,
    marginRight: 'auto',
  },
  '@media screen and (max-width:450px)': {
    width: 23,
    height: 23,
  },
});

const EmergencyPhoneIcon = styled(PhoneForwardedIcon)({
  '@media screen and (max-width:850px)': {
    fontSize: '1rem',
  },
});

const UserTicketBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  textAlign: 'center',
  marginRight: '1rem',
  order: '5',
  gap: '0.1rem',
  '@media screen and (max-width:450px)': {
    gap: '0.1rem',
    fontSize: '0.5rem',
    marginRight: '0',
  },
});

const UserAvatar = styled(Avatar)({
  width: 40,
  height: 40,
  '@media screen and (max-width:850px)': {
    width: 25,
    height: 25,
  },
  '@media screen and (max-width:450px)': {
    width: 23,
    height: 23,
  },
});

const UserNameText = styled(Typography)({
  paddingTop: '0.4rem',
  color: '#2D9B9B',
  fontWeight: '600',
  '@media screen and (max-width:850px)': {
    fontSize: '1rem',
  },
  '@media screen and (max-width:450px)': {
    fontSize: '0.5rem',
  },
});

const AuthButtonsBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1rem',
  '@media screen and (max-width:850px)': {
    gap: '0.5rem',
    paddingLeft: '0.3rem',
  },
});

const LoginButton = styled(Button)({
  color: '#FFFFFF',
  background: 'linear-gradient(90deg, #FF5362 0%, #E52535 100%)',
  borderColor: '#E52535',
  '@media screen and (max-width:450px)': {
    fontSize: '0.45rem',
    padding: '0.1rem',
    margin: '0',
  },
});

const SignUpButton = styled(Button)({
  backgroundColor: '#D53449',
  '@media screen and (max-width:450px)': {
    fontSize: '0.5rem',
    padding: '0.1rem',
  },
});

export {
  StyledHeader,
  Navigations,
  NavItems,
  CloseIconNav,
  AppsIconNav,
  HomeIconNav,
  HomeRepairServiceIconNav,
  Diversity1IconNav,
  LogoImage,
  NavigationAnchor,
  ActionsBox,
  SearchInput,
  SearchInputIcon,
  EmergencyAvatar,
  EmergencyPhoneIcon,
  UserTicketBox,
  UserAvatar,
  UserNameText,
  AuthButtonsBox,
  LoginButton,
  SignUpButton,
};

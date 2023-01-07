import { Box } from '@mui/material';

import Link from 'next/link';
import { LogoImage } from '../components.styled';

export const Logo = () => (
  <Box className="logo">
    <Link href="/">
      <LogoImage
        src={`${process.env.REACT_APP_BASEE_URL}settings/Group.png`}
        alt="logo"
      />
    </Link>
  </Box>
);

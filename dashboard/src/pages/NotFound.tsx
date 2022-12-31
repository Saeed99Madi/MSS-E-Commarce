import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: `url(${process.env.REACT_APP_BASEE_URL}/notFound.jpg)`,
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundSize: 'cover',
      }}
    >
      <Typography variant="h1" style={{ color: '#FFFFFF' }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: '#FFFFFF' }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#d0361b',
            color: '#FFFFFF',
          }}
        >
          Back Home
        </Button>
      </Link>
    </Box>
  );
};
export default NotFound;

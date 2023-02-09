import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const ProductCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 350,
        borderRadius: '40px',
        backgroundColor: ' #F1F1F1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: '1.3rem',
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="green iguana"
          sx={{ borderRadius: '40px' }}
        />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              color: '#1F1F22',
              fontWeight: '700',
            }}
          >
            Product name
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              color: '#353C46',
              textAlign: 'center',
              lineHeight: '1.5rem !important',
              fontSize: '1.2rem !important',
            }}
          >
            Lizards are a widespread group of squamate reptiles
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" sx={{ color: '#FF5362' }}>
          Check Product
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

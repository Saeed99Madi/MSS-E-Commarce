import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { ArrowBtn } from '../components.styled';

export const ArrowsLeft = (props: any) => {
  const { onClick } = props;
  return (
    <ArrowBtn onClick={onClick} left={false}>
      <KeyboardArrowRight sx={{ color: '#18181B', fontSize: '2rem' }} />
    </ArrowBtn>
  );
};
export const ArrowsRight = (props: any) => {
  const { onClick } = props;

  return (
    <ArrowBtn left onClick={onClick}>
      <KeyboardArrowLeft sx={{ color: '#18181B', fontSize: '2rem' }} />
    </ArrowBtn>
  );
};

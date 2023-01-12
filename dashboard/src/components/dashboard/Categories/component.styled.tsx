import { styled } from '@mui/material/styles';
import { Button, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { CreateNewFolderOutlined } from '@mui/icons-material';
import { DescriptionInput } from '../Products/AddProduct/components.styled';
import { Main } from '../components.styled';
import { ICustomCoverButton } from './interfaces.styled';

export const CategoryDescriptionInput = styled(DescriptionInput)`
  width: 100%;
  color: 'red';
  background: linear-gradient(
    130.79deg,
    rgba(255, 255, 255, 0.08) -37.1%,
    rgba(255, 255, 255, 0) 134.47%
  );
`;

export const AddCategoryButton = styled(Button)`
  width: 100%;
  background-color: #e52535;
  height: 54px;
  border-radius: 12px;
  color: #fff;
  margin-top: 102px;
  &:hover {
    background-color: #cc1a29;
  }
`;

export const CustomTextField = styled(TextField)`
  width: 100%;
  border-radius: 0.5rem;
  height: 50px;
  background: linear-gradient(
    130.79deg,
    rgba(255, 255, 255, 0.08) -37.1%,
    rgba(255, 255, 255, 0) 134.47%
  );
`;

export const CategoryNameWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 12px;
`;

export const CategoryDetailsWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 12px;
`;

export const CategoryMain = styled(Main)`
  background: #141417;
  color: #fff;
`;

export const CategoryWrapper = styled('div')`
  height: 100%;
  padding: 25px;
  background: #1e1e21;
  border-top-left-radius: 2rem;
  min-width: 470px;
  padding-right: 220px;
  margin-left: 100px;
`;

export const CustomTypography = styled(Typography)`
  display: flex;
  align-items: center;
`;

export const FolderIcon = styled(CreateNewFolderOutlined)`
  margin-right: 1rem;
  font-size: 28px;
`;

export const CustomCoverButton = styled(Button)(
  ({ component, variant, startIcon }: ICustomCoverButton) => ({
    borderRadius: '0.5rem',
    padding: '1rem',
    width: '100%',
    background:
      'linear-gradient(130.79deg, rgba(255, 255, 255, 0.08) -37.1%, rgba(255, 255, 255, 0) 134.47%)',
  }),
);

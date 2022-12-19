import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { DescriptionInput } from '../../Products/AddProduct/components.styled';

export const CategoryDescriptionInput = styled(DescriptionInput)`
  width: 100%;
  color: 'red';
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

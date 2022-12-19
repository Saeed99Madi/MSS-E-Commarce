import { MenuItem } from '@mui/material';
import { ICategories } from '../../../../interfaces/ICategories';
import { arrowIcon } from '../../components.styled';
import { SelectCats } from '../../Products/AddProduct/components.styled';

type Props = {
  category: string;
  categories: ICategories[];
  handleCategory: (event: any) => void;
  onChange: (event: any) => void;
};

export const SelectCategories = (props: Props) => {
  const { categories, handleCategory, category, onChange } = props;

  return (
    <SelectCats
      IconComponent={arrowIcon}
      name="parentId"
      MenuProps={{
        PaperProps: {
          style: { width: '250px', overflowY: 'scroll' },
        },
      }}
      value={category}
      onChange={e => {
        handleCategory(e);
        onChange(e);
      }}
      displayEmpty
      inputProps={{ 'aria-label': 'Without label' }}
      style={{ width: '100%' }}
    >
      <MenuItem value="">
        <em>Category</em>
      </MenuItem>
      {categories.map((ele: ICategories) => {
        return (
          <MenuItem key={ele.id} value={`${ele.id}`}>
            {ele.title}
          </MenuItem>
        );
      })}
    </SelectCats>
  );
};

import { MenuItem } from '@mui/material';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { IProduct } from '../../../../../interfaces/IProduct';
import { arrowIcon } from '../../../components.styled';
import { SelectCats } from '../components.styled';
import getAllCategories from '../../../../../hooks/getAllCategories';
import { ICategories } from '../../../../../interfaces/ICategories';

type Props = {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  setNewProduct: Dispatch<SetStateAction<IProduct>>;
};

export const SelectCategories = (props: Props) => {
  const { category, setCategory, setNewProduct } = props;
  const [categories, setcategories] = useState<ICategories[]>([]);

  const handlCategory = (event: any) => {
    event.preventDefault();
    const { value } = event.target;
    if (typeof value === 'string') {
      setCategory(event.target.value);
      setNewProduct(prev => ({ ...prev, CategoryId: event.target.value }));
    } else {
      throw new Error();
    }
  };

  const allCategories = getAllCategories();
  useEffect(() => {
    (async () => {
      setcategories(await allCategories());
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SelectCats
      IconComponent={arrowIcon}
      name="CategoryId"
      MenuProps={{
        PaperProps: {
          style: { width: '250px', height: '50%', overflowY: 'scroll' },
        },
      }}
      value={category}
      onChange={handlCategory}
      displayEmpty
      inputProps={{ 'aria-label': 'Without label' }}
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

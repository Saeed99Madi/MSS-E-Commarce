import { useEffect, useState } from 'react';
import ListItem from './ListItem';
import useCategories from '../../../../hooks/getCategories';
import { ICategories } from '../../../../interfaces/ICategories';

const CategoriesList = ({ open }: { open: boolean }) => {
  const [category, setCategory] = useState<ICategories[]>();

  const fetchCategories = useCategories();

  useEffect(() => {
    (async () => {
      setCategory(await fetchCategories());
    })();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      {category?.map((categoryItem: ICategories) => {
        return (
          <ListItem
            id={categoryItem.id}
            key={categoryItem.id}
            open={open}
            categoryItem={categoryItem}
          />
        );
      })}
    </div>
  );
};

export default CategoriesList;

import { useEffect, useState } from 'react';
import ListItem from './ListItem';
import useCategories from '../../../../hooks/getCategories';
import { ICategories } from '../../../../interfaces/ICategories';
import { CategoriesListWrapper } from './component.style';

const CategoriesList = ({ open }: { open: boolean }) => {
  const [category, setCategory] = useState<ICategories[]>();
  console.log({ open });
  const fetchCategories = useCategories();

  useEffect(() => {
    (async () => {
      setCategory(await fetchCategories());
    })();
  }, []);

  return (
    <CategoriesListWrapper open={open}>
      {category?.map((categoryItem: ICategories) => {
        return (
          <ListItem
            id={categoryItem.id as number}
            key={categoryItem.id}
            open={open}
            categoryItem={categoryItem}
            setCategory={setCategory}
          />
        );
      })}
    </CategoriesListWrapper>
  );
};

export default CategoriesList;

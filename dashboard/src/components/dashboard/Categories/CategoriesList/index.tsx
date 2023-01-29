import { useEffect, useState } from 'react';
import ListItem from './ListItem';
import useCategories from '../../../../hooks/getCategories';
import { ICategories } from '../../../../interfaces/ICategories';
import { CategoriesListWrapper } from './component.style';

const CategoriesList = ({ open }: { open: boolean }) => {
  const [category, setCategory] = useState<ICategories[]>();

  const fetchCategories = useCategories();

  useEffect(() => {
    (async () => {
      setCategory(await fetchCategories());
    })();
    // we have to ensure from this line
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

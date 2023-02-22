import { MenuItem, Select } from '@mui/material';

import useTranslation from 'next-translate/useTranslation';
import { useEffect, useState } from 'react';

import { Axios } from '../../../config';
import { ICategory } from '../../../interfaces/ICategory';

import {
  AppsIconNav,
  CloseIconNav,
  Diversity1IconNav,
  HomeIconNav,
  HomeRepairServiceIconNav,
  NavigationAnchor,
  Navigations,
  NavItems,
} from '../components.styled';

const categoryItem = {
  fontStyle: 'italic',
  fontWeight: 'bold',
  margin: '5px 0px',
  color: '#000000',
  opacity: '1 !important',
};

export const NavHeader = () => {
  const [active, setActive] = useState(false);
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    (async () => {
      const response = await Axios.get('/categories');

      setCategories(response.data.data);
    })();
  }, []);

  useEffect(() => {}, [categories]);
  const menuDisActive = () => {
    setActive(false);
  };
  const menuActive = () => {
    setActive(true);
  };

  const { t } = useTranslation('home');

  return (
    <>
      <Navigations className={active ? 'navigation active' : 'navigation'}>
        <NavItems className="nav-items">
          <CloseIconNav onClick={menuDisActive} />

          <Select
            disableUnderline
            variant="standard"
            sx={{
              fontSize: '0.9em',
              border: 0,
              color: '#000000',
              boxShadow: 'none',
              '.MuiOutlinedInput-notchedOutline': { border: 0 },
            }}
            defaultValue={0}
          >
            <MenuItem value={0} sx={categoryItem}>
              {t('Categories')}
            </MenuItem>
            {categories ? (
              categories.map((category: ICategory) => {
                return (
                  <MenuItem
                    key={category.id}
                    value={category.id}
                    sx={categoryItem}
                  >
                    {category.title}
                  </MenuItem>
                );
              })
            ) : (
              <MenuItem value={4} sx={categoryItem}>
                noCategories
              </MenuItem>
            )}
          </Select>

          <NavigationAnchor href="/" onClick={menuDisActive}>
            <HomeIconNav />
            {t('Home')}
          </NavigationAnchor>
          <NavigationAnchor href="/contacts" onClick={menuDisActive}>
            <Diversity1IconNav />
            {t('Contact Us')}
          </NavigationAnchor>
          <NavigationAnchor href="/contacts" onClick={menuDisActive}>
            <HomeRepairServiceIconNav />
            {t('who we are')}
          </NavigationAnchor>
        </NavItems>
      </Navigations>
      <AppsIconNav onClick={menuActive} />
    </>
  );
};

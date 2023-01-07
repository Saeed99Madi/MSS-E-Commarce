import { MenuItem, Select } from '@mui/material';
// import { GetServerSideProps } from 'next';
import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';
// import { ICategory } from '../../../interfaces/ICategory';
// import ApiServices from '../../../services/ApiService';

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

const category = {
  fontStyle: 'italic',
  fontWeight: 'bold',
  margin: '5px 0px',
  color: '#000000',
  opacity: '1 !important',
};
// type Props = {
//   categories?: ICategory[];
// };

export const NavHeader = () => {
  // const { categories } = props;
  const [active, setActive] = useState(false);

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
              border: 0,
              boxShadow: 'none',
              '.MuiOutlinedInput-notchedOutline': { border: 0 },
            }}
            defaultValue={0}
          >
            <MenuItem value={0} sx={category}>
              {t('Categories')}
            </MenuItem>
            <MenuItem value={4} sx={category}>
              Category 1
            </MenuItem>
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
            <MenuItem sx={category}>Category 2</MenuItem>
            <MenuItem value={3}>Option 3</MenuItem>
          </Select>

          <NavigationAnchor href="/" onClick={menuDisActive}>
            <HomeIconNav />
            {t('Home')}
          </NavigationAnchor>
          <NavigationAnchor href="/doctors" onClick={menuDisActive}>
            <Diversity1IconNav />
            {t('Contact Us')}
          </NavigationAnchor>
          <NavigationAnchor href="/" onClick={menuDisActive}>
            <HomeRepairServiceIconNav />
            {t('who we are')}
          </NavigationAnchor>
        </NavItems>
      </Navigations>
      <AppsIconNav onClick={menuActive} />
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async context => {
//   try {
//     // ApiServices.init();
//     const { data } = await ApiServices.get('/products');
//     return {
//       props: {
//         products: data.data,
//       },
//     };
//   } catch (error: unknown) {
//     return {
//       props: {
//         error: { error: 'somthing went wrong' },
//       },
//     };
//   }
// };

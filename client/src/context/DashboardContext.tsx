import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import IDashboardContext from '../interfaces/IDashboardContext';
import { IProduct } from '../interfaces/IProduct';
import ApiServices from '../servises/ApiService';

ApiServices.init();
const DashboardContext = createContext({} as IDashboardContext);
const ProvideDashboard = ({ children }: { children: ReactNode }) => {
  // fgfg
  const [checkedProducts, setIsCheckedProducts] = useState<Array<number>>([]);

  const [searchFilterCategory, setSearchFilterCategory] = useState<string>('');

  const [productSearch, setProductSearch] = useState<string>('');

  const [openSideBar, setOpenSideBar] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    (async () => {
      if (productSearch && searchFilterCategory) {
        const { data } = await ApiServices.get(
          `products/${productSearch}/${searchFilterCategory}`,
        );
        setProducts(data.data);
      } else if (searchFilterCategory && !productSearch) {
        const { data } = await ApiServices.get(
          `/category/products/${searchFilterCategory}`,
        );
        setProducts(data.data);
      } else if (!searchFilterCategory && productSearch) {
        const { data } = await ApiServices.get(
          `products/${productSearch}/${searchFilterCategory}`,
        );
        setProducts(data.data);
      } else {
        const { data } = await ApiServices.get(`products`);
        setProducts(data.data);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productSearch, searchFilterCategory]);

  const dashboardValues = useMemo(
    () => ({
      products,
      setProducts,
      checkedProducts,
      setIsCheckedProducts,
      searchFilterCategory,
      setSearchFilterCategory,
      productSearch,
      setProductSearch,
      openSideBar,
      setOpenSideBar,
    }),
    [
      checkedProducts,
      openSideBar,
      productSearch,
      searchFilterCategory,
      products,
    ],
  );
  return (
    <DashboardContext.Provider value={dashboardValues}>
      {children}
    </DashboardContext.Provider>
  );
};
export { ProvideDashboard, DashboardContext };

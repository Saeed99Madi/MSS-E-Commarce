import { createContext, ReactNode, useMemo, useState } from 'react';
import IDashboardContext from '../interfaces/IDashboardContext';

const DashboardContext = createContext({} as IDashboardContext);
const ProvideDashboard = ({ children }: { children: ReactNode }) => {
  // fgfg
  const [checkedProducts, setIsCheckedProducts] = useState<Array<number>>([]);

  const [searchFilterCategory, setSearchFilterCategory] = useState<string>('');

  const [productSearch, setProductSearch] = useState<string>('');

  const [openSideBar, setOpenSideBar] = useState(false);
  const dashboardValues = useMemo(
    () => ({
      checkedProducts,
      setIsCheckedProducts,
      searchFilterCategory,
      setSearchFilterCategory,
      productSearch,
      setProductSearch,
      openSideBar,
      setOpenSideBar,
    }),
    [checkedProducts, openSideBar, productSearch, searchFilterCategory],
  );
  return (
    <DashboardContext.Provider value={dashboardValues}>
      {children}
    </DashboardContext.Provider>
  );
};
export { ProvideDashboard, DashboardContext };

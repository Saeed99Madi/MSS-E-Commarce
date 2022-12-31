import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import IDashboardContext from '../interfaces/IDashboardContext';
import { IProduct } from '../interfaces/IProduct';
import { IService } from '../interfaces/IService';
import ApiServices from '../servises/ApiService';

ApiServices.init();
const DashboardContext = createContext({} as IDashboardContext);
const ProvideDashboard = ({ children }: { children: ReactNode }) => {
  // Begen Products Managment States
  const [checkedProducts, setIsCheckedProducts] = useState<Array<number>>([]);
  const [searchFilterCategory, setSearchFilterCategory] = useState<string>('');
  const [productSearch, setProductSearch] = useState<string>('');
  const [openSideBar, setOpenSideBar] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  // Begen Products Managment States

  // Begen Services Managment States
  const [checkedServices, setIsCheckedServices] = useState<Array<number>>([]);
  const [servicesSearch, setServicesSearch] = useState<string>('');
  const [openAddService, setOpenAddService] = useState(false);
  const [services, setServices] = useState<IService[]>([]);
  // End Services Managment States

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
    (async () => {
      if (servicesSearch) {
        const { data } = await ApiServices.get(
          `products/${productSearch}/${searchFilterCategory}`,
        );
        setProducts(data.data);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productSearch, searchFilterCategory, servicesSearch]);

  useEffect(() => {
    (async () => {
      if (servicesSearch !== '') {
        const { data } = await ApiServices.get(
          `/services/search/${servicesSearch}`,
        );
        setServices(data.data);
      } else {
        const { data } = await ApiServices.get(`/services`);
        setServices(data.data);
      }
    })();
  }, [servicesSearch]);

  const dashboardValues = useMemo(
    () => ({
      // Begen Services Managment States
      checkedServices,
      setIsCheckedServices,
      servicesSearch,
      setServicesSearch,
      openAddService,
      setOpenAddService,
      services,
      setServices,
      // End Services Managment States
      // Begen Products Managment States
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
      // End Products Managment States
    }),
    [
      checkedServices,
      servicesSearch,
      openAddService,
      services,
      products,
      checkedProducts,
      searchFilterCategory,
      productSearch,
      openSideBar,
    ],
  );
  return (
    <DashboardContext.Provider value={dashboardValues}>
      {children}
    </DashboardContext.Provider>
  );
};
export { ProvideDashboard, DashboardContext };

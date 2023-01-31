/* eslint-disable no-console */
import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import { IContact } from '../interfaces/IContact';
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
  const [editIdProduct, setEditIdProduct] = useState<number>(0);
  const [openEditProduct, setOpenEditProduct] = useState<boolean>(false);
  // Begen Products Managment States

  // Begen Services Managment States
  const [checkedServices, setIsCheckedServices] = useState<Array<number>>([]);
  const [servicesSearch, setServicesSearch] = useState<string>('');
  const [openAddService, setOpenAddService] = useState(false);
  const [services, setServices] = useState<IService[]>([]);
  const [openEditService, setOpenEditService] = useState(false);
  const [editIdService, setEditIdService] = useState<number>(0);
  // End Services Managment States

  // Begen Contact Managment States
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [openShowContact, setOpenShowContact] = useState<boolean>(false);
  const [slectedContact, setSlectedContact] = useState<number>(0);
  // End Services Managment States

  // Begen Conferm Action Dialog
  const [openConfermAlert, setOpenConfermAlert] = useState(false);
  const [confermMessage, setConfermMessage] = useState<string>('');
  const [confermHandler, setConfermHandler] = useState<() => Promise<void>>(
    async () => {
      console.log('no handlers');
    },
  );
  // End Conferm Action Dialog

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
      openEditService,
      setOpenEditService,
      editIdService,
      setEditIdService,
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
      editIdProduct,
      setEditIdProduct,
      openEditProduct,
      setOpenEditProduct,
      // End Products Managment States
      // Begen Conferm Action Dialog
      openConfermAlert,
      setOpenConfermAlert,
      confermHandler,
      setConfermHandler,
      confermMessage,
      setConfermMessage,
      // End Conferm Action Dialog
      // Begen Contact Managment States
      contacts,
      setContacts,
      openShowContact,
      setOpenShowContact,
      slectedContact,
      setSlectedContact,
      // End Services Managment States
    }),
    [
      checkedServices,
      servicesSearch,
      openAddService,
      services,
      openEditService,
      editIdService,
      products,
      checkedProducts,
      searchFilterCategory,
      productSearch,
      openSideBar,
      editIdProduct,
      openEditProduct,
      openConfermAlert,
      confermHandler,
      confermMessage,
      contacts,
      openShowContact,
      slectedContact,
    ],
  );
  return (
    <DashboardContext.Provider value={dashboardValues}>
      {children}
    </DashboardContext.Provider>
  );
};
export { ProvideDashboard, DashboardContext };

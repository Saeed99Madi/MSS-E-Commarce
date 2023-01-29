import { Dispatch, MouseEventHandler, SetStateAction } from 'react';
import { IProduct } from './IProduct';
import { IService } from './IService';

interface IDashboardContext {
  // Begen Services Managment States
  servicesSearch: string;
  setServicesSearch: Dispatch<SetStateAction<string>>;
  openAddService: boolean;
  setOpenAddService: Dispatch<SetStateAction<boolean>>;
  services: IService[];
  setServices: Dispatch<SetStateAction<IService[]>>;
  checkedServices: Array<number>;
  setIsCheckedServices: Dispatch<SetStateAction<Array<number>>>;
  // End Services Managment States
  // Begen Products Managment States
  products: IProduct[];
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
  editIdProduct?: number;
  setEditIdProduct: Dispatch<SetStateAction<number>>;
  openEditProduct: boolean;
  setOpenEditProduct: Dispatch<SetStateAction<boolean>>;

  searchFilterCategory: string;
  setSearchFilterCategory: Dispatch<SetStateAction<string>>;
  productSearch: string;
  setProductSearch: Dispatch<SetStateAction<string>>;
  openSideBar: boolean;
  setOpenSideBar: Dispatch<SetStateAction<boolean>>;
  checkedProducts: Array<number>;
  setIsCheckedProducts: Dispatch<SetStateAction<Array<number>>>;
  // End Products Managment States
  // Begen Conferm Action Dialog
  openConfermAlert: boolean;
  setOpenConfermAlert: Dispatch<SetStateAction<boolean>>;
  confermHandler: () => Promise<void>;
  setConfermHandler: Dispatch<SetStateAction<() => Promise<void>>>;
  confermMessage: string;
  setConfermMessage: Dispatch<SetStateAction<string>>;
  // End Conferm Action Dialog
}

export default IDashboardContext;

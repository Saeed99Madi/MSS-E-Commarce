import { Dispatch, SetStateAction } from 'react';

interface IDashboardContext {
  searchFilterCategory: string;
  setSearchFilterCategory: Dispatch<SetStateAction<string>>;
  productSearch: string;
  setProductSearch: Dispatch<SetStateAction<string>>;
  openSideBar: boolean;
  setOpenSideBar: Dispatch<SetStateAction<boolean>>;
  checkedProducts: Array<number>;
  setIsCheckedProducts: Dispatch<SetStateAction<Array<number>>>;
}

export default IDashboardContext;

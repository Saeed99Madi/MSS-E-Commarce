import ApiServices from '../servises/ApiService';
import { ICategories } from '../interfaces/ICategories';

ApiServices.init();

const useCategories = () => {
  return async (): Promise<ICategories[]> => {
    const { data } = await ApiServices.get('all-categories');

    return data.data;
  };
};

export default useCategories;

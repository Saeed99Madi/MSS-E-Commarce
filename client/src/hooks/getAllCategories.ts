import ApiServices from '../servises/ApiService';
import { ICategories } from '../interfaces/ICategories';

ApiServices.init();

const useCategories = () => {
  return async (): Promise<ICategories[]> => {
    const { data } = await ApiServices.get('categories/all');
    return data.data;
  };
};

export default useCategories;

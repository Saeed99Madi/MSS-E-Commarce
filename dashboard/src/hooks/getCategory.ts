import ApiServices from '../servises/ApiService';
import { ICategories } from '../interfaces/ICategories';

ApiServices.init();

const useCategory = (id: number) => {
  return async (): Promise<ICategories[] | any> => {
    const { data } = await ApiServices.get(`/categories/${id}`);

    return data.data;
  };
};

export default useCategory;

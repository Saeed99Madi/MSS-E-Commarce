import ApiServices from '../servises/ApiService';
import { ICategories } from '../interfaces/ICategories';

ApiServices.init();
const useSubcategories = (selectedCategory: string): any => {
  if (selectedCategory) {
    return async (categoryId: number | string): Promise<ICategories[]> => {
      const { data } = await ApiServices.get(`subcategories/${categoryId}`);
      return data.data;
    };
  }
  return () => {};
};

export default useSubcategories;

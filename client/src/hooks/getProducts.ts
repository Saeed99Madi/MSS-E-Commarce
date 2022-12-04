import { IProduct } from '../interfaces/IProduct';
import ApiServices from '../servises/ApiService';

ApiServices.init();
const useProducts = () => {
  return async (): Promise<IProduct[]> => {
    const { data } = await ApiServices.get('products');
    return data.data;
  };
};

export default useProducts;

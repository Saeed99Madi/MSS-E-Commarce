import { Service } from '../../db';
import CustomError from '../errorHandler/CustomError';

// ServicesHelper.ts file
export default class ServicesHelper {
  // login based on user providing a series of specific user information
  public static async publish(id: number | undefined) {
    const product = await Service.findByPk(id);
    if (!product) {
      throw new CustomError(404, 'Service Not Found');
    }
    product.set({
      active: true,
    });
    const newProduct = await product.save();
    return newProduct;
  }

  public static async unPublish(id: number | undefined) {
    const product = await Service.findByPk(id);
    if (!product) {
      throw new CustomError(404, 'Service Not Found');
    }
    product.set({
      active: false,
    });
    const newProduct = await product.save();
    return newProduct;
  }

  public static async delete(id: number | undefined) {
    const product = await Service.findByPk(id);
    if (!product) {
      throw new CustomError(404, 'Service Not Found');
    }
    const deletedProduct = await product.destroy();

    return deletedProduct;
  }
}

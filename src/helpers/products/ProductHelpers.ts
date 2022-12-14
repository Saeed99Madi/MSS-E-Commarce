import { Product } from '../../models';
import CustomError from '../errorHandler/CustomError';

// ProductPublish.ts file
export default class ProductHelpers {
  // login based on user providing a series of specific user information
  public static async publish(id: number | undefined) {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new CustomError(404, 'Product Not Found');
    }
    product.set({
      active: true,
    });
    const newProduct = await product.save();
    return newProduct;
  }

  public static async unPublish(id: number | undefined) {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new CustomError(404, 'Product Not Found');
    }
    product.set({
      active: false,
    });
    const newProduct = await product.save();
    return newProduct;
  }

  public static async delete(id: number | undefined) {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new CustomError(404, 'Product Not Found');
    }
    const deletedProduct = await product.destroy();

    return deletedProduct;
  }
}

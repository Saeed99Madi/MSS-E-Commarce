import { Request, Response } from 'express';

import { Product } from '../models';
import CustomError from '../helpers/errorHandler/CustomError';
import { productSchema } from '../schemes';

// import environment from '../config/environment';

// ProductController.ts file
export default class ProductController {
  // get All Products
  public static async index(req: Request, res: Response) {
    const products = await Product.findAll();

    res.status(200).json({
      status: 200,
      data: products,
    });
  }

  // create Product
  public static async create(req: Request, res: Response) {
    const { title, description, cover, active, images } = req.body;

    await productSchema({ title, description, cover });

    const product = await Product.findOne({ where: { title } });
    if (product) {
      throw new CustomError(422, 'The Product was added previously !');
    }
    const newProduct = Product.build({
      title,
      description,
    });
    if (images) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      images.forEach((image: any) => {
        console.log(req.file, image);
      });
    }
    if (active) {
      newProduct.active = active;
    }
    await newProduct.save();
    res.status(201).json({
      status: 201,
      data: newProduct,
    });
  }
}

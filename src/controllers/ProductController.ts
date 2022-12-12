import { Request, Response } from 'express';

import { Product, ProductAttripute, ProductGalary } from '../models';
import CustomError from '../helpers/errorHandler/CustomError';
import { productSchema } from '../schemes';
import { sequelize } from '../db';
import PublishProduct from '../helpers/products/unPublishProduct';
import { IAttripute } from '../interfaces/IAttripute';

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
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };
    const { gallery, cover, catalog } = files;
    const catalogInstance = catalog[0];
    const coverInstance = cover[0];
    // console.log(req.files.cover, 'files');
    const { title, description, active, CategoryId, attriputes } = req.body;
    // const {} = req.files;
    // console.log('body', req.body, 'body');
    await productSchema({ title, description });

    const product = await Product.findOne({ where: { title } });
    if (product) {
      throw new CustomError(422, 'The Product was added previously !');
    }
    const newProduct = await Product.create({
      title,
      description,
      CategoryId,
      catalog: catalogInstance.filename,
      cover: coverInstance.filename,
      active,
    });

    if (gallery) {
      await Promise.all(
        gallery.map(async image => {
          return await ProductGalary.create({
            ProductId: newProduct.id,
            image: image.filename,
          });
        }),
      );
    }
    if (attriputes) {
      const productAttriputes: IAttripute[] = JSON.parse(attriputes);
      console.log(productAttriputes, newProduct);

      await Promise.all(
        productAttriputes.map(async attr => {
          return await ProductAttripute.create({
            ProductId: newProduct.id,
            title: attr.title,
            description: attr.description,
          });
        }),
      );
    }
    if (active) {
      newProduct.active = active;
    }

    res.status(201).json({
      status: 201,
      data: newProduct,
    });
  }
}

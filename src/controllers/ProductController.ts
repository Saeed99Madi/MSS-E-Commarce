import { Request, Response } from 'express';

import { Product } from '../models';
import CustomError from '../helpers/errorHandler/CustomError';
import { productSchema } from '../schemes';
import { sequelize } from '../db';
import PublishProduct from '../helpers/products/unPublishProduct';

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

  // search products with category filter Products
  public static async search(req: Request, res: Response) {
    const { search, CategoryId } = req.params;
    console.log(search, 'heris the search controller');

    let products = [];
    if (CategoryId) {
      products = await Product.findAll({
        limit: 10,
        where: {
          title: sequelize.where(
            sequelize.fn('LOWER', sequelize.col('title')),
            'LIKE',
            '%' + search + '%',
          ),
          CategoryId,
        },
      });
    } else {
      products = await Product.findAll({
        limit: 10,
        where: {
          title: sequelize.where(
            sequelize.fn('LOWER', sequelize.col('title')),
            'LIKE',
            '%' + search + '%',
          ),
        },
      });
    }
    res.status(200).json({
      status: 200,
      data: products,
    });
  }

  // filter products by category
  public static async categoryProducts(req: Request, res: Response) {
    const { CategoryId } = req.params;
    if (!CategoryId) {
      throw new CustomError(404, 'CATEGORY NOT FOUND');
    }

    let products = [];
    console.log(CategoryId);

    products = await Product.findAll({
      limit: 10,
      where: {
        CategoryId,
      },
    });

    res.status(200).json({
      status: 200,
      data: products,
    });
  }

  // unPublish products, make product | products not active
  public static async unPublish(req: Request, res: Response) {
    const { products } = req.body;
    if (!products) {
      throw new CustomError(404, 'PRODUCTS NOT FOUND');
    }

    await Promise.all(
      products.map(async (productId: number | undefined) => {
        return await PublishProduct.unPublish(productId);
      }),
    );
    res.status(200).json({
      status: 200,
      message: 'products has been Unpublished successfully',
    });
  }

  public static async publish(req: Request, res: Response) {
    const { products } = req.body;
    if (!products) {
      throw new CustomError(404, 'PRODUCTS NOT FOUND');
    }

    await Promise.all(
      products.map(async (productId: number | undefined) => {
        return await PublishProduct.publish(productId);
      }),
    );

    res.status(200).json({
      status: 200,
      message: 'products has been Published successfully',
    });
  }

  // create Product
  public static async create(req: Request, res: Response) {
    console.log(req.files, 'files');
    console.log(req.file, 'file');
    const { title, description, cover, active, images, formData } = req.body;
    console.log('body', req.body, 'body');
    await productSchema({ title, description });

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

import { Request, Response } from 'express';

import { Product, ProductAttripute, ProductGalary } from '../models';
import CustomError from '../helpers/errorHandler/CustomError';
import { productSchema } from '../schemes';
import { sequelize } from '../db';
import ProductHelpers from '../helpers/products/ProductHelpers';
import { IAttripute } from '../interfaces/IAttripute';

// import environment from '../config/environment';

// ProductController.ts file
export default class ProductController {
  // get All Products
  public static async index(req: Request, res: Response) {
    const products = await Product.findAll({
      include: ['productGallery', 'ProductAttriputes'],
    });

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
        return await ProductHelpers.unPublish(productId);
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
        return await ProductHelpers.publish(productId);
      }),
    );

    res.status(200).json({
      status: 200,
      message: 'products has been Published successfully',
    });
  }

  public static async destroy(req: Request, res: Response) {
    const { productsIds } = req.params;
    const products = productsIds.split(',').map(function (item) {
      return parseInt(item, 10);
    });

    if (!products) {
      throw new CustomError(404, 'PRODUCTS NOT FOUND');
    }

    await Promise.all(
      products.map(async (productId: number | undefined) => {
        return await ProductHelpers.delete(productId);
      }),
    );

    res.status(200).json({
      status: 200,
      message: 'products has been dleted successfully',
    });
  }

  // create Product
  public static async create(req: Request, res: Response) {
    console.log('*************************************');
    console.log(req.body);
    console.log('*************************************');
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

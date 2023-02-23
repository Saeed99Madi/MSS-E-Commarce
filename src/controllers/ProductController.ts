import { Request, Response } from 'express';

import { Product, ProductAttripute, ProductGalary, sequelize } from '../db';
import CustomError from '../helpers/errorHandler/CustomError';
import { productSchema } from '../schemes';
import ProductHelpers from '../helpers/products/ProductHelpers';
import { IAttripute } from '../interfaces/IAttripute';
import path from 'path';
import fs from 'fs';

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

  // get All Published Products
  public static async getPublishedProducts(req: Request, res: Response) {
    console.log('are u her ?');

    const products = await Product.findAll({
      include: ['productGallery', 'ProductAttriputes'],
      where: { active: true },
    });

    res.status(200).json({
      status: 200,
      data: products,
    });
  }

  // get Spacific Product By id
  public static async getProduct(req: Request, res: Response) {
    const { id } = req.params;
    const product = await Product.findAll({
      include: ['productGallery', 'ProductAttriputes'],
      where: { id: +id, active: true },
    });
    if (!product) {
      throw new Error('PRODUCTS NOT FOUND');
    }
    res.status(200).json({
      status: 200,
      data: product,
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
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };
    const { gallery, cover, catalog } = files;
    const catalogInstance = catalog[0];
    const coverInstance = cover[0];

    const { title, description, active, CategoryId, attriputes } = req.body;

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

  // update Product
  public static async update(req: Request, res: Response) {
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };
    const { gallery, cover, catalog } = files;

    const { id, title, description, active, CategoryId, attriputes } = req.body;

    await productSchema({ title, description });

    const product = await Product.findByPk(id, { include: ['productGallery'] });
    if (!product) {
      throw new CustomError(404, 'Product Undefined');
    }
    console.log(product);

    await product.update({
      title,
      description,
      CategoryId,
      active,
    });
    if (gallery) {
      const oldProductGallery = product.productGallery;
      if (oldProductGallery && oldProductGallery.length > 0) {
        await Promise.all(
          oldProductGallery.map(async image => {
            const imagePath = path.join(
              __dirname,
              '..',
              'images',
              'products',
              image.image,
            );
            try {
              fs.unlinkSync(imagePath);
            } catch (error) {
              console.log(error);
            }
            await ProductGalary.destroy({ where: { image: image.image } });
          }),
        );
      }
      // create new Gellery
      await Promise.all(
        gallery.map(async image => {
          return await ProductGalary.create({
            ProductId: product.id,
            image: image.filename,
          });
        }),
      );
    }
    if (cover) {
      console.log(cover, 'file cover');

      const coverInstance = cover[0].filename;
      // delete old cover file
      const oldProductCover = product.cover;
      if (oldProductCover) {
        const imagePath = path.join(
          __dirname,
          '..',
          'images',
          'products',
          oldProductCover,
        );
        try {
          fs.unlinkSync(imagePath);
        } catch (error) {
          console.log(error);
        }
      }
      // create new Cover
      const updatedProduct = await product.update({
        cover: coverInstance,
      });
      console.log(updatedProduct, 'updatedProduct');
    }
    if (catalog) {
      const catalogInstance = catalog[0];
      console.log(catalogInstance, 'updatedProduct catalog');
      // delete old cover file
      const oldProductCatalog = product.catalog;
      if (oldProductCatalog) {
        const imagePath = path.join(
          __dirname,
          '..',
          'images',
          'products',
          oldProductCatalog,
        );
        try {
          fs.unlinkSync(imagePath);
        } catch (error) {
          console.log(error);
        }
      }
      // update new Catalog
      await product.update({
        catalog: catalogInstance.filename,
      });
    }

    if (attriputes) {
      const productAttriputes: IAttripute[] = JSON.parse(attriputes);
      console.log(productAttriputes, product);

      await Promise.all(
        productAttriputes.map(async attr => {
          if (typeof attr.id === 'number') {
            const oldAttripute = await ProductAttripute.findByPk(attr.id);
            if (oldAttripute) {
              return await oldAttripute.update({
                title: attr.title,
                description: attr.description,
              });
            }
          }

          return await ProductAttripute.create({
            ProductId: product.id,
            title: attr.title,
            description: attr.description,
          });
        }),
      );
    }

    if (active) {
      product.active = active;
    }
    const updatedProduct = await Product.findByPk(id, {
      include: ['productGallery', 'ProductAttriputes'],
    });

    res.status(200).json({
      status: 200,
      data: updatedProduct,
    });
  }
}

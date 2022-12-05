import { Request, Response } from 'express';
import { Product, Category } from '../models';
import CustomError from '../helpers/errorHandler/CustomError';
import { productSchema } from '../schemes';
import { Op } from 'sequelize';
// import environment from '../config/environment';

// CategoriesController.ts file
export default class CategoriesController {
  // get All Categories
  public static async catIndex(req: Request, res: Response) {
    const categories = await Category.findAll({
      where: {
        isChild: false,
      },
    });

    res.status(200).json({
      status: 200,
      data: categories,
    });
  }

  // get All subCategories
  public static async subCatIndex(req: Request, res: Response) {
    const { categoryName } = req.params;
    if (!categoryName) {
      throw new CustomError(404, 'CATEGORY NOT FOUND');
    }
    console.log(categoryName);
    const categories = await Category.findAll({
      where: {
        [Op.and]: [{ isChild: true }, { title: categoryName }],
      },
    });

    res.status(200).json({
      status: 200,
      data: categories,
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

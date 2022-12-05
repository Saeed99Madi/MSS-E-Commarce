import { Request, Response } from 'express';
import { Category } from '../models';
import CustomError from '../helpers/errorHandler/CustomError';
import { categoriesSchema } from '../schemes';
import { Op } from 'sequelize';

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
    const { categoryId } = req.params;
    if (!categoryId) {
      throw new CustomError(404, 'CATEGORY NOT FOUND');
    }
    const categories = await Category.findAll({
      where: {
        [Op.and]: [{ isChild: true }, { parentId: categoryId }],
      },
    });

    res.status(200).json({
      status: 200,
      data: categories,
    });
  }

  // create categories
  public static async create(req: Request, res: Response) {
    const { title, description, cover, parentId } = req.body;

    await categoriesSchema({ title, description, cover });

    const category = await Category.findOne({ where: { title } });
    if (category) {
      throw new CustomError(422, 'The category was added previously !');
    }
    if (!parentId) {
      const newCategory = Category.build({
        title,
        description,
        isChild: false,
      });

      await newCategory.save();
      res.status(201).json({
        status: 201,
        data: newCategory,
      });
    } else {
      const newSubCategory = Category.build({
        title,
        description,
        isChild: true,
        parentId,
      });

      await newSubCategory.save();
      res.status(201).json({
        status: 201,
        data: newSubCategory,
      });
    }
  }
}

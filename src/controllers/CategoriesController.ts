import { Request, Response } from 'express';
import { Category, Product } from '../models';
import CustomError from '../helpers/errorHandler/CustomError';
import { categoriesSchema } from '../schemes';
import { Op } from 'sequelize';
import * as fs from 'fs';
import * as path from 'path';
// CategoriesController.ts file
export default class CategoriesController {
  // get All Categories
  public static async all(req: Request, res: Response) {
    const categories = await Category.findAll({ attributes: ['id', 'title'] });
    console.log('-------------------');
    console.log(categories);
    console.log('-------------------');
    res.status(200).json({
      status: 200,
      data: categories,
    });
  }

  // get All Categories
  public static async show(req: Request, res: Response) {
    const { id } = req.params;
    const category = await Category.findByPk(id);

    res.status(200).json({
      status: 200,
      data: category,
    });
  }

  // get specific category
  public static async category(req: Request, res: Response) {
    const { categoryId } = req.params;

    const category = await Category.findByPk(categoryId);

    res.status(200).json({
      status: 200,
      data: category,
    });
  }

  // get all parents Categories
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
    const files = req.files as { [fieldName: string]: Express.Multer.File[] };
    const { cover } = files;
    const coverInstance = cover[0];
    const { title, description, parentId } = req.body;
    await categoriesSchema({ title, description });
    const category = await Category.findOne({ where: { title } });

    if (category) {
      // remove image if the category is already exist
      try {
        fs.unlinkSync(coverInstance.path);
        // file removed
      } catch (err) {
        console.error(err);
      }
      throw new CustomError(422, 'The category was added previously !');
    } else if (!parentId) {
      const newCategory = Category.build({
        title,
        description,
        isChild: false,
        cover: coverInstance.filename,
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
        cover: coverInstance.filename,
        parentId,
      });

      await newSubCategory.save();
      res.status(201).json({
        status: 201,
        data: newSubCategory,
      });
    }
  }

  // delete categories
  public static async delete(req: Request, res: Response) {
    const { categoryId } = req.params;
    const category = await Category.findOne({ where: { id: categoryId } });
    if (!category) {
      throw new CustomError(404, 'CATEGORY NOT FOUND');
    }

    const { isChild, cover }: { isChild: boolean; cover: string } =
      category.dataValues;

    const imagePath = path.join(__dirname, '..', 'images', 'categories', cover);

    if (isChild) {
      await Category.destroy({ where: { id: categoryId } });
      await Product.destroy({ where: { CategoryId: categoryId } });
      fs.unlinkSync(imagePath);
      res.status(202).json({
        status: 202,
        msg: 'deleted successfully',
      });
    } else {
      const allCategories = await Category.findAll({
        where: { parentId: categoryId },
      });
      await Promise.all(
        allCategories.map(async category => {
          return await Category.update(
            { isChild: false, parentId: null },
            { where: { id: category.dataValues.id } },
          );
        }),
      );
      await Category.destroy({ where: { id: categoryId } });
      await Product.destroy({ where: { CategoryId: categoryId } });
      fs.unlinkSync(imagePath);
      res.status(202).json({
        status: 202,
        msg: 'deleted successfully',
      });
    }
  }

  // update categories
  public static async update(req: Request, res: Response) {
    const files = req.files as { [fieldName: string]: Express.Multer.File[] };
    const { cover } = files;
    const { id, title, description } = req.body;
    await categoriesSchema({ title, description });
    const category = await Category.findOne({ where: { title } });

    if (category) {
      throw new CustomError(422, 'The category was added previously !');
    }

    if (!cover) {
      try {
        await Category.upsert({
          id,
          title,
          description,
        });

        res.status(200).json({
          status: 200,
          msg: 'updated successfully',
        });
      } catch (error) {
        throw new CustomError(501, 'something went wrong !');
      }
    } else {
      const category = await Category.findOne({ where: { id } });
      const coverInstance = cover[0];
      const imagePath = path.join(
        __dirname,
        '..',
        'images',
        'categories',
        category?.dataValues?.cover,
      );
      try {
        fs.unlinkSync(imagePath);

        await Category.upsert({
          id,
          title,
          description,
          cover: coverInstance.filename,
        });

        res.status(200).json({
          status: 200,
          msg: 'updated successfully',
        });
      } catch (error) {
        fs.unlinkSync(imagePath);
        throw new CustomError(501, 'something went wrong !');
      }
    }
  }
}

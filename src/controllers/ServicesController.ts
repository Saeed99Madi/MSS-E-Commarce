import { Request, Response } from 'express';

import CustomError from '../helpers/errorHandler/CustomError';
import { servicesSchema } from '../schemes';
import { sequelize, Service } from '../db';
import ServicesHelper from '../helpers/services/ServicesHelper';

// ServicesController.ts file
export default class ServicesController {
  // get All Products
  public static async index(req: Request, res: Response) {
    const services = await Service.findAll();

    res.status(200).json({
      status: 200,
      data: services,
    });
  }

  // search services
  public static async search(req: Request, res: Response) {
    const { search } = req.params;
    console.log(search, 'heris the search controller');

    let services = [];

    services = await Service.findAll({
      limit: 10,
      where: {
        title: sequelize.where(
          sequelize.fn('LOWER', sequelize.col('title')),
          'LIKE',
          '%' + search + '%',
        ),
      },
    });

    res.status(200).json({
      status: 200,
      data: services,
    });
  }

  // unPublish services, make service | services not active
  public static async unPublish(req: Request, res: Response) {
    const { services } = req.body;
    if (!services) {
      throw new CustomError(404, 'PRODUCTS NOT FOUND');
    }

    await Promise.all(
      services.map(async (ServiceId: number | undefined) => {
        return await ServicesHelper.unPublish(ServiceId);
      }),
    );
    res.status(200).json({
      status: 200,
      message: 'Services has been Unpublished successfully',
    });
  }

  public static async publish(req: Request, res: Response) {
    const { products } = req.body;
    if (!products) {
      throw new CustomError(404, 'PRODUCTS NOT FOUND');
    }

    await Promise.all(
      products.map(async (ServiceId: number | undefined) => {
        return await ServicesHelper.publish(ServiceId);
      }),
    );

    res.status(200).json({
      status: 200,
      message: 'Services has been Published successfully',
    });
  }

  public static async destroy(req: Request, res: Response) {
    const { servicesIds } = req.params;
    const services = JSON.parse(servicesIds);
    if (!services) {
      throw new CustomError(404, 'PRODUCTS NOT FOUND');
    }

    await Promise.all(
      services.map(async (ServiceId: number | undefined) => {
        return await ServicesHelper.delete(ServiceId);
      }),
    );

    res.status(200).json({
      status: 200,
      message: 'Services has been deleted successfully',
    });
  }

  // create Product
  public static async create(req: Request, res: Response) {
    const cover = req.file;

    const { title, description, active } = req.body;

    await servicesSchema({ title, description });

    const service = await Service.findOne({ where: { title } });
    if (service) {
      throw new CustomError(422, 'The Product was added previously !');
    }
    const newService = await Service.create({
      title,
      description,
      cover: cover?.filename,
      active,
    });

    res.status(201).json({
      status: 201,
      data: newService,
    });
  }
}

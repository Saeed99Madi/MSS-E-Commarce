import { Request, Response } from 'express';

import CustomError from '../helpers/errorHandler/CustomError';
import { SettingsValid } from '../schemes';
import { Settings } from '../db';

// SettingsController.ts file
export default class SettingsController {
  // update Settings
  public static async update(req: Request, res: Response) {
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };
    const { logo, logo2 } = files;
    const logo1Instance = logo[0];
    const logo2Instance = logo2[0];

    const {
      email,
      phone,
      phone2,
      address,
      facebook,
      instagram,
      linkedIn,
      youtupe,
      bio,
    } = req.body;

    await SettingsValid({
      email,
      phone,
      address,
      bio,
    });

    const settings = await Settings.findByPk(1);
    if (!settings) {
      throw new CustomError(422, 'Settings Not have not setuped previously !');
    }
    const newSettings = await settings.update({
      email,
      phone,
      phone2,
      address,
      facebook,
      instagram,
      linkedIn,
      youtupe,
      bio,
      logo: logo1Instance.filename,
      logo2: logo2Instance.filename,
    });

    res.status(201).json({
      status: 201,
      data: newSettings,
    });
  }
}

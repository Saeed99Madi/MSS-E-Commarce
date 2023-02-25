import { Response, Request } from 'express';
import CustomError from '../helpers/errorHandler/CustomError';

import { Contact } from '../models';
import { contentSchema } from '../schemes';

export default class ContactController {
  // get All Contacts
  public static async index(req: Request, res: Response) {
    const contacts = await Contact.findAll();

    res.status(200).json({ status: 200, data: contacts });
  }

  // Add new Contact
  public static async create(req: Request, res: Response) {
    const { name, email, content, mobile } = req.body;

    await contentSchema({ name, email, content, mobile });

    const newContact = await Contact.create({ name, email, content, mobile });

    res.status(201).json({ data: newContact });
  }

  // Delete Contact
  public static async destory(req: Request, res: Response) {
    const { contactId } = req.body;

    const isContactExist = await Contact.findOne({ where: { id: contactId } });
    if (!isContactExist) {
      throw new CustomError(400, 'Contact You Want To Delete Does Not Exist!');
    }

    await Contact.destroy({
      where: {
        id: contactId,
      },
    });

    res.json({
      message: 'Contact deleted successfully!',
    });
  }
}

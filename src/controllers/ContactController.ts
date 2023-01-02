import { Response, Request } from 'express';

import { Contact } from '../models';
import { contentSchema } from '../schemes';

export default class ContactController {
  // get All Contacts
  public static async index(req: Request, res: Response) {
    const contacts = await Contact.findAll();

    res.status(200).json({ data: contacts });
  }

  // Add new Contact
  public static async create(req: Request, res: Response) {
    const { name, email, content } = req.body;

    await contentSchema({ content });

    const newContact = await Contact.create({ name, email, content });

    res.status(201).json({ data: newContact });
  }
}

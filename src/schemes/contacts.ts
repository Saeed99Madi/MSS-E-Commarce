import * as Joi from 'joi';

const contentSchema = (data: object) => {
  const schema = Joi.object({
    name: Joi.string().min(4).max(50).required(),
    mobile: Joi.string().min(4).max(50).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    content: Joi.string().min(8).max(5000).required(),
  });

  return schema.validateAsync(data);
};

export default contentSchema;

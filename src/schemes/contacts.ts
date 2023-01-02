import * as Joi from 'joi';

const contentSchema = (data: object) => {
  const schema = Joi.object({
    content: Joi.string().min(50).max(5000).required(),
  });

  return schema.validateAsync(data);
};

export default contentSchema;

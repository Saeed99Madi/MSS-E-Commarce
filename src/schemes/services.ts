import * as Joi from 'joi';

const ServiceValid = (data: object) => {
  const schema = Joi.object({
    title: Joi.string().min(4).max(50).required(),
    description: Joi.string().min(30).max(5000).required(),
  });
  return schema.validateAsync(data);
};
export default ServiceValid;

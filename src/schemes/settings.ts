import * as Joi from 'joi';

const SettingsValid = (data: object) => {
  const schema = Joi.object({
    title: Joi.string().min(4).max(50).required(),
    description: Joi.string().min(50).max(5000).required(),
  });
  return schema.validateAsync(data);
};
export default SettingsValid;

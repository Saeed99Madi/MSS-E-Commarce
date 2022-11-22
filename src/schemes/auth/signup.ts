import * as Joi from 'joi';

const signupValid = (data: object) => {
  const schema = Joi.object({
    name: Joi.string().min(4).max(50).required(),
    email: Joi.string().email().required(),
    role: Joi.string().valid('USER', 'ADMIN').required(),
    password: Joi.string().min(8).max(15).required(),
    confirmPassword: Joi.any().valid(Joi.ref('password')).required(),
  });
  return schema.validateAsync(data);
};
export default signupValid;

import joi from 'joi';
import ISignInAuthSchema from '../../interfaces/auth/signIn';

const signInSchemaValidation = (body: ISignInAuthSchema) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(5).max(50).required(),
  });
  return schema.validateAsync(body);
};

export default signInSchemaValidation;

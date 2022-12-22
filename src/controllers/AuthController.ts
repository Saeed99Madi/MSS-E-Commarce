import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { Secret, sign } from 'jsonwebtoken';

import { User } from '../models';
import CustomError from '../helpers/errorHandler/CustomError';
import { SignInSchema, SignUpSchema } from '../schemes';

import environment from '../config/environment';

// AuthController.ts file
export default class AuthController {
  public static async isAuthenticated(req: Request, res: Response) {
    res.json({
      user: req.user,
    });
  }

  // login based on user providing a series of specific user information
  public static async signin(req: Request, res: Response) {
    const { secretKey } = environment;
    const { email, password } = req.body;

    await SignInSchema({ email, password });

    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new CustomError(
        404,
        "The email address you entered isn't connected to an account",
      );
    }

    const isValid: boolean = await bcrypt.compare(
      password,
      user.password ?? '',
    );
    if (!isValid) {
      throw new CustomError(
        422,
        "The password that you've entered is incorrect",
      );
    }
    const payload = {
      name: user.name,
      email: user.email,
      role: user.role,
    };
    const token = sign(payload, secretKey as Secret);

    res.set('token', token).json({
      status: 200,
      data: {
        id: user.id,
        email: user.email,
        role: user.role,
        name: user.name,
        token,
      },
    });
  }

  public static async signup(req: Request, res: Response) {
    const { name, email, role, password, confirmPassword } = req.body;
    await SignUpSchema({
      name,
      email,
      role,
      password,
      confirmPassword,
    });
    // const searchEmail = await User.findAll({ where: { email } });
    const user = await User.findOne({ where: { email } });
    if (user) {
      throw new CustomError(400, 'You have account');
    }

    const newUser = await User.create({
      name,
      email,
      role,
      password: await bcrypt.hash(password, 15),
    });

    const token = await sign(
      {
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
      environment.secretKey as Secret,
    );
    res.json({
      token,
      id: newUser.id,
      name: newUser.name,
      role: newUser.role,
      email: newUser.email,
    });
  }
}

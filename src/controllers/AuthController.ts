import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import secret from '../secret';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User';

class AuthController {
  async authenticate(req: Request, res: Response) {
    const repository = getRepository(User);
    const { email, username, password } = req.body;


    const user = await repository.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json('User does not exist');
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json('invalid password');
    }


    const token = jwt.sign({ id: user.id }, secret, {
       expiresIn: process.env.EXPIRES,
    });

    return res.status(200).json({
      user,
      token,
    });
  }
}

export default new AuthController();

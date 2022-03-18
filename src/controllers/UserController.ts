import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';

class UserController {
  async store(req: Request, res: Response) {
    const repository = getRepository(User);
    const { email, username, password } = req.body;

    const userExists = await repository.findOne({ where: { email } });

    if (userExists) {
      return res.status(409).json('User already exists');
    }

    const user = repository.create({ email, username, password });
    await repository.save(user);

    return res.status(200).json(user);
  }
}

export default new UserController();

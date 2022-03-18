import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import secret from '../secret';

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

export default function authMiddleware(
  req: Request, res: Response, next: NextFunction
  ) {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json('Invalid Authorization');
    };

    const token = authorization.replace('Bearer', ' ').trim();

    try {
      const data = jwt.verify(token, secret);

      const { id } = data as TokenPayload;

      req.userId = id;

      return next();
    } catch (err) {
      return res.status(401).json(err);
    }
}

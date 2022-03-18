import { Request, Response } from 'express';
import { getRepository, RelationId } from 'typeorm';

import Review from '../models/Rating';

class RatingController {
  async store(req: Request, res: Response) {
    const repository = getRepository(Review);
    const { rating, comment } = req.body;

    try {
      const review = repository.create({ rating, comment });
      await repository.save(review);

      return res.status(200).json(review);

    } catch (err) {
      res.status(400).json('Invalid review');
    }
  }

  async index(req: Request, res: Response) {
    try {
      const reviews = await getRepository(Review).find();
      res.status(200).json(reviews);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};



export default new RatingController();

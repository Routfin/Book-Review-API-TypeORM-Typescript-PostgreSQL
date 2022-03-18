import { Request, Response } from 'express';
import { getRepository, RelationId } from 'typeorm';

import Post from '../models/Posts';

class PostController {
  async store(req: Request, res: Response) {
    const repository = getRepository(Post);
    const { title, author, content, pages, favoriteCount } = req.body;

    try {
      const post = repository.create({ title, author, content, pages, favoriteCount });
      await repository.save(post);

      return res.status(200).json(post);

    } catch (err) {
      res.status(400).json('Invalid Post');
    }
  }

  async index(req: Request, res: Response) {
    try {
      const posts = await getRepository(Post).find();
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  }


  async update(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const postUpdate = await getRepository(Post).update(
        id,
        req.body,
      );
      res.status(200).json('Post was successfully updated');
    } catch (err) {
      res.status(500).json(err);
    }
  }



  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await getRepository(Post).delete(id);
      res.status(200).json('Post was successfully deleted');
    } catch (err) {
      res.status(500).json(err);
    }
  }
};



export default new PostController();

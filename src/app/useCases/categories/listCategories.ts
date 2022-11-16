import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export const listCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();

    res.json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      erro: 'Internal server error',
    });
  }
};

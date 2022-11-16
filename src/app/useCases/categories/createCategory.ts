import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export const createCategory = async (req: Request, res: Response) => {
  // por padrão o express não faz parse do body
  const { icon, name } = req.body;

  const category = await Category.create({
    icon,
    name,
  });

  res.json(category);
};

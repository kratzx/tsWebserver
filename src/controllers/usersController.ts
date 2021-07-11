import { Request, Response } from 'express'
import { UserModel } from '../services/schemas/userSchema';


export const usersController = {
  
  getFeaturedProducts: (req: Request, res: Response) => {
    const products = UserModel.find().limit(4);
    res.status(200).json(products);
  },

  getAllProducts: (req: Request, res: Response) => {
    const products =  UserModel.find();
    res.status(200).json(products);
  },

  getOneProduct: (req: Request, res: Response) => {
    const id = Number(req.params.id) - 1;
    const product =  UserModel.findById(id);
    res.status(200).json(product);
  }
}

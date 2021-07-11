import { Request, Response } from 'express'
import { UserModel, UserSchema } from '../services/schemas/userSchema';


export const usersController = {

  registerUser: async (req: Request, res: Response) => {
    try {
      const user = await UserModel.find({ email: req.body.email }).exec();
      if (user.length) throw new Error('Email already in use')
      const newUser = await UserModel.create(req.body);
      console.log('Success!');
      console.log('ID:', newUser.id);
      res.status(200).json(newUser);
    } catch (e) {
      console.log('Error: ', e);
      res.status(500).send(e);
    }     
  },
  
  loginUser: (req: Request, res: Response) => {}

}

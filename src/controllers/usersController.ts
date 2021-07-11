import { Request, Response } from 'express'
import { generateAccessToken } from '../helpers/jwt';
import { UserModel } from '../services/schemas/userSchema';


export const usersController = {

  registerUser: async (req: Request, res: Response) => {
    try {
      const user = await UserModel.find({ email: req.body.email }).exec();
      if (user.length) throw new Error('Email already in use');
      const newUser = await UserModel.create(req.body);
      console.log('Success!');
      console.log('ID:', newUser.id);
      res.status(200).json(newUser);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }     
  },
  
  loginUser: async (req: Request, res: Response) => {
    try {
      const reqUser = req.body;
      const dbUser = await UserModel.findOne({ email: reqUser.email }).exec();
      if (!dbUser) throw new Error('User not registered');
      if (dbUser.password != reqUser.password) throw new Error('Wrong password');
      console.log('Success!');
      const token = generateAccessToken({
        name: dbUser.name,
        email: dbUser.email,
        phone: dbUser.phone,
        avatar: dbUser.avatar || ''
      });
      res.status(200).json({ token });
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  }
}

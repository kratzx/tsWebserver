import * as jwt from 'jsonwebtoken';
import { dotEnv } from '../config/dotEnv';
import { Request, Response } from 'express';

export const generateAccessToken = (userdata: string | object) => {
  return jwt.sign(userdata, dotEnv.secret, { expiresIn: '1800s' });
}

export const authenticateToken = (req: Request, res: Response, next: any) => {
  
  if (!req.headers.token) return res.status(401).send('Missing auth token');

  const token = String(req.headers.token);

  jwt.verify(token, dotEnv.secret, (err, user) => {
    if (err) return res.status(403).send(err);
    if (user) {
      req.params.name = user.name;
      req.params.email = user.email;
      req.params.phone = user.phone;
      req.params.avatar = user.avatar;
    }
    next();
  });
}

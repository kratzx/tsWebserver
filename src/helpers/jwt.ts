import * as jwt from 'jsonwebtoken';
import { dotEnv } from '../config/dotEnv';

export const generateAccessToken = (userdata: string | object) => {
  return jwt.sign(userdata, dotEnv.secret, { expiresIn: '1800s' });
}

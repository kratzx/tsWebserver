import dotenv from 'dotenv';

dotenv.config();

export const dotEnv = {
  port: Number(process.env.EXPRESS_PORT),
  secret: String(process.env.TOKEN_SECRET),
  atlasString: String(process.env.MONGODB_ATLAS_STRING),
}
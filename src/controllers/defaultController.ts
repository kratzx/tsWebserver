import {Request, Response} from 'express'

export const defaultController = (req: Request, res: Response) => {
  res.status(200).send('Endpoint Ok');
}
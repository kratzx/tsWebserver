import { Request, Response } from 'express';

export const urlLogger = (req: Request, res: Response, next:any) => {  
  console.log(`${req.method} @ ${req.originalUrl}`);
  next();
}

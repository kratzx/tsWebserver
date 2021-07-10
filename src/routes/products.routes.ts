import e, { Router } from 'express';
import { defaultController } from '../controllers/defaultController';

const productsRouter: Router = e.Router();

productsRouter.get('/', defaultController);

export { productsRouter };
import e, { Router } from 'express';
import { productsController } from '../controllers/';

const indexRouter: Router = e.Router();

indexRouter.get('/', productsController.getFeaturedProducts);

export { indexRouter };
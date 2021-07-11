import e, { Router } from 'express';
import { productsController } from '../controllers/';

const productsRouter: Router = e.Router();

productsRouter.get('/', productsController.getAllProducts);
productsRouter.get('/:id', productsController.getOneProduct);

productsRouter.post('/', 
  e.json(),  
  productsController.addProducts);

productsRouter.put('/', 
  e.json(),
  productsController.updateProducts);
productsRouter.put('/:id', 
  e.json(),
  productsController.updateProducts);

export { productsRouter };
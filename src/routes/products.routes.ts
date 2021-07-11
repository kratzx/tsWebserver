import e, { Router } from 'express';
import { productsController } from '../controllers/';

const productsRouter: Router = e.Router();

productsRouter.get('/', productsController.getProducts);
productsRouter.get('/:id', productsController.getOneProduct);

productsRouter.post('/', 
  e.json(),  
  productsController.addProducts);

productsRouter.put('/:id', 
  e.json(),
  productsController.updateProduct);

productsRouter.delete('/:id', 
  e.json(),
  productsController.deleteOneProduct);

export { productsRouter };
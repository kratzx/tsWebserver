import e, { Router } from 'express';
import { productsController } from '../controllers/';
import { authenticateToken } from '../helpers/jwt';

const productsRouter: Router = e.Router();

productsRouter.get('/', productsController.getProducts);
productsRouter.get('/:id', productsController.getOneProduct);

productsRouter.post('/',
  authenticateToken,
  e.json(),  
  productsController.addProducts);

productsRouter.put('/:id',
  authenticateToken,
  e.json(),
  productsController.updateProduct);

productsRouter.delete('/:id',
  authenticateToken, 
  e.json(),
  productsController.deleteOneProduct);

export { productsRouter };
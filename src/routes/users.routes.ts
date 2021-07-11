import e, { Router } from 'express';
import { defaultController } from '../controllers/';
import { usersController } from '../controllers/usersController';

const usersRouter: Router = e.Router();

usersRouter.get('/', defaultController);

usersRouter.post('/register', 
  e.json(),
  usersController.registerUser);

usersRouter.post('/login', 
  e.json(),
  usersController.loginUser);

export { usersRouter };